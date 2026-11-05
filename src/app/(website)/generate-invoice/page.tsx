
"use client";

import React, { useMemo, useRef, useState } from "react";

type Item = {
    id: number;
    description: string;
    details: string;
    quantity: number;
    rate: number;
};

type PaymentMethod = "upi" | "bank" | "both";

const inputClass =
    "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

const labelClass = "mb-1.5 block text-xs font-semibold text-slate-600";

const initialCompany = {
    name: "SoftQivo Technology",
    tagline: "Software Development & Digital Solutions",
    address:
        "A-21, 2nd Floor, BSI Business Park, Sector-63, Noida, Uttar Pradesh, India",
    phone: "+91 99531 76985",
    email: "softqivo@gmail.com",
    gstin: "",
};

const initialCustomer = {
    name: "",
    address: "",
    phone: "",
    email: "",
    gstin: "",
};

const initialBank = {
    bankName: "",
    accountHolder: "SoftQivo Technology",
    accountNumber: "",
    ifsc: "",
    branch: "",
};

const money = (value: number) =>
    new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2,
    }).format(value);

const dateFormat = (value: string) => {
    if (!value) return "-";
    return new Date(`${value}T00:00:00`).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
};

export default function GenerateInvoicePage() {
    const invoiceRef = useRef<HTMLDivElement>(null);

    const [invoice, setInvoice] = useState({
        number: "SQ-2026-001",
        date: new Date().toISOString().slice(0, 10),
        dueDate: "",
        paymentTerms: "Due on receipt",
    });

    const [company, setCompany] = useState(initialCompany);
    const [billTo, setBillTo] = useState(initialCustomer);
    const [billFrom, setBillFrom] = useState(initialCompany);

    const [items, setItems] = useState<Item[]>([
        {
            id: 1,
            description: "Website Design & Development",
            details: "Website design, development and responsive implementation.",
            quantity: 1,
            rate: 25000,
        },
    ]);

    const [gstEnabled, setGstEnabled] = useState(false);
    const [gstRate, setGstRate] = useState(18);
    const [taxType, setTaxType] = useState<"igst" | "cgst">("igst");

    const [paymentMethod, setPaymentMethod] =
        useState<PaymentMethod>("upi");

    const [upiId, setUpiId] = useState("");
    const [qrImage, setQrImage] = useState("");
    const [bank, setBank] = useState(initialBank);

    const [paymentNote, setPaymentNote] = useState(
        "Please share the payment confirmation after making the payment."
    );

    const [downloading, setDownloading] = useState(false);

    const subtotal = useMemo(
        () =>
            items.reduce(
                (sum, item) => sum + item.quantity * item.rate,
                0
            ),
        [items]
    );

    const gstAmount = gstEnabled ? (subtotal * gstRate) / 100 : 0;
    const total = subtotal + gstAmount;

    const updateObject = (
        setter: React.Dispatch<React.SetStateAction<any>>,
        key: string,
        value: string
    ) => {
        setter((previous: any) => ({
            ...previous,
            [key]: value,
        }));
    };

    const addItem = () => {
        setItems((previous) => [
            ...previous,
            {
                id: Date.now(),
                description: "",
                details: "",
                quantity: 1,
                rate: 0,
            },
        ]);
    };

    const updateItem = (
        id: number,
        key: keyof Item,
        value: string | number
    ) => {
        setItems((previous) =>
            previous.map((item) =>
                item.id === id ? { ...item, [key]: value } : item
            )
        );
    };

    const uploadQR = (file?: File) => {
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("Please upload a valid QR image.");
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            alert("QR image must be smaller than 5 MB.");
            return;
        }

        const reader = new FileReader();

        reader.onload = () => {
            setQrImage(String(reader.result));
        };

        reader.readAsDataURL(file);
    };

    const downloadInvoice = async () => {
        if (!billTo.name.trim()) {
            alert("Please enter the Bill To name.");
            return;
        }

        if (!invoice.number.trim()) {
            alert("Please enter the invoice number.");
            return;
        }

        if (
            items.length === 0 ||
            items.some(
                (item) =>
                    !item.description.trim() ||
                    item.quantity <= 0 ||
                    item.rate < 0
            )
        ) {
            alert("Please complete all service details.");
            return;
        }

        if (
            (paymentMethod === "upi" || paymentMethod === "both") &&
            !qrImage &&
            !upiId.trim()
        ) {
            alert("Please upload a QR code or enter a UPI ID.");
            return;
        }

        if (
            (paymentMethod === "bank" || paymentMethod === "both") &&
            (!bank.bankName ||
                !bank.accountHolder ||
                !bank.accountNumber ||
                !bank.ifsc)
        ) {
            alert("Please complete the bank account details.");
            return;
        }

        const invoiceElement = invoiceRef.current;

        if (!invoiceElement) {
            alert("Invoice content not found.");
            return;
        }

        setDownloading(true);

        try {
            await document.fonts.ready;

            const html2pdf = (await import("html2pdf.js")).default;

            const options = {
                margin: [10, 10, 10, 10] as [number, number, number, number],
                filename: `Invoice-${invoice.number.replace(/[^a-zA-Z0-9-_]/g, "-")}.pdf`,
                image: {
                    type: "jpeg" as const,
                    quality: 0.98,
                },
                html2canvas: {
                    scale: 2,
                    useCORS: true,
                    backgroundColor: "#ffffff",
                    logging: false,
                },
                jsPDF: {
                    unit: "mm" as const,
                    format: "a4" as const,
                    orientation: "portrait" as const,
                },
                pagebreak: {
                    mode: ["css", "legacy"] as Array<"css" | "legacy">,
                },
            };

            await html2pdf()
                .set(options)
                .from(invoiceElement)
                .save();

        } catch (error) {
            console.error("Invoice PDF generation error:", error);
            alert("Unable to generate PDF. Please check the browser console.");
        } finally {
            setDownloading(false);
        }
    };

    const Field = ({
        label,
        value,
        onChange,
        placeholder,
        type = "text",
    }: {
        label: string;
        value: string;
        onChange: (value: string) => void;
        placeholder?: string;
        type?: string;
    }) => (
        <div>
            <label className={labelClass}>{label}</label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder || label}
                className={inputClass}
            />
        </div>
    );

    const Section = ({
        title,
        children,
    }: {
        title: string;
        children: React.ReactNode;
    }) => (
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
                <h2 className="text-sm font-bold uppercase tracking-wide text-[#124b7c]">
                    {title}
                </h2>
            </div>
            <div className="p-5">{children}</div>
        </section>
    );

    return (
        <main className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">

                {/* PAGE HEADING */}
                <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                            SoftQivo / Billing
                        </p>
                        <h1 className="mt-2 text-3xl font-bold text-slate-900">
                            Generate Invoice
                        </h1>
                        <p className="mt-1 text-sm text-slate-500">
                            Fill in the details and download your professional invoice.
                        </p>
                    </div>

                    <button
                        onClick={downloadInvoice}
                        disabled={downloading}
                        className="rounded-lg bg-blue-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-800 disabled:opacity-60"
                    >
                        {downloading ? "Generating PDF..." : "Download Invoice PDF"}
                    </button>
                </div>

                {/* EDITABLE FORM */}
                <div className="space-y-6">

                    {/* 1. COMPANY DETAILS + INVOICE DETAILS */}
                    <section className="grid overflow-hidden rounded-xl border border-slate-200 bg-white md:grid-cols-2">
                        <div className="p-5 sm:p-6">
                            <h2 className="mb-5 text-lg font-bold text-[#124b7c]">
                                Company Details
                            </h2>

                            <div className="space-y-4">
                                <Field
                                    label="Company Name"
                                    value={company.name}
                                    onChange={(v) => updateObject(setCompany, "name", v)}
                                />
                                <Field
                                    label="Tagline"
                                    value={company.tagline}
                                    onChange={(v) => updateObject(setCompany, "tagline", v)}
                                />
                                <Field
                                    label="Address"
                                    value={company.address}
                                    onChange={(v) => updateObject(setCompany, "address", v)}
                                />
                                <Field
                                    label="Phone"
                                    value={company.phone}
                                    onChange={(v) => updateObject(setCompany, "phone", v)}
                                />
                                <Field
                                    label="Email"
                                    value={company.email}
                                    onChange={(v) => updateObject(setCompany, "email", v)}
                                />
                                <Field
                                    label="GSTIN"
                                    value={company.gstin}
                                    onChange={(v) => updateObject(setCompany, "gstin", v)}
                                    placeholder="Enter GSTIN (optional)"
                                />
                            </div>
                        </div>

                        <div className="border-t border-slate-200 p-5 sm:border-l sm:border-t-0 sm:p-6">
                            <h2 className="mb-5 text-lg font-bold text-blue-600">
                                Invoice Details
                            </h2>

                            <div className="space-y-4">
                                <Field
                                    label="Invoice Number"
                                    value={invoice.number}
                                    onChange={(v) => updateObject(setInvoice, "number", v)}
                                />
                                <Field
                                    label="Invoice Date"
                                    type="date"
                                    value={invoice.date}
                                    onChange={(v) => updateObject(setInvoice, "date", v)}
                                />
                                <Field
                                    label="Due Date"
                                    type="date"
                                    value={invoice.dueDate}
                                    onChange={(v) => updateObject(setInvoice, "dueDate", v)}
                                />

                                <div>
                                    <label className={labelClass}>Payment Terms</label>
                                    <select
                                        value={invoice.paymentTerms}
                                        onChange={(e) =>
                                            updateObject(
                                                setInvoice,
                                                "paymentTerms",
                                                e.target.value
                                            )
                                        }
                                        className={inputClass}
                                    >
                                        <option>Due on receipt</option>
                                        <option>Due in 7 days</option>
                                        <option>Due in 15 days</option>
                                        <option>Due in 30 days</option>
                                        <option>Due in 45 days</option>
                                        <option>Custom</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 2. BILL TO + BILL FROM */}
                    <section className="grid overflow-hidden rounded-xl border border-slate-200 bg-white md:grid-cols-2">
                        <div>
                            <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
                                <h2 className="text-sm font-bold uppercase tracking-wide text-[#124b7c]">
                                    Bill To
                                </h2>
                            </div>

                            <div className="space-y-4 p-5">
                                <Field
                                    label="Customer / Company Name"
                                    value={billTo.name}
                                    onChange={(v) => updateObject(setBillTo, "name", v)}
                                />
                                <Field
                                    label="Address"
                                    value={billTo.address}
                                    onChange={(v) => updateObject(setBillTo, "address", v)}
                                />
                                <Field
                                    label="Phone"
                                    value={billTo.phone}
                                    onChange={(v) => updateObject(setBillTo, "phone", v)}
                                />
                                <Field
                                    label="Email"
                                    value={billTo.email}
                                    onChange={(v) => updateObject(setBillTo, "email", v)}
                                />
                                <Field
                                    label="GSTIN"
                                    value={billTo.gstin}
                                    onChange={(v) => updateObject(setBillTo, "gstin", v)}
                                    placeholder="Optional"
                                />
                            </div>
                        </div>

                        <div className="border-t border-slate-200 md:border-l md:border-t-0">
                            <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
                                <h2 className="text-sm font-bold uppercase tracking-wide text-[#124b7c]">
                                    Bill From
                                </h2>
                            </div>

                            <div className="space-y-4 p-5">
                                <Field
                                    label="Company Name"
                                    value={billFrom.name}
                                    onChange={(v) => updateObject(setBillFrom, "name", v)}
                                />
                                <Field
                                    label="Address"
                                    value={billFrom.address}
                                    onChange={(v) => updateObject(setBillFrom, "address", v)}
                                />
                                <Field
                                    label="Phone"
                                    value={billFrom.phone}
                                    onChange={(v) => updateObject(setBillFrom, "phone", v)}
                                />
                                <Field
                                    label="Email"
                                    value={billFrom.email}
                                    onChange={(v) => updateObject(setBillFrom, "email", v)}
                                />
                                <Field
                                    label="GSTIN"
                                    value={billFrom.gstin}
                                    onChange={(v) => updateObject(setBillFrom, "gstin", v)}
                                    placeholder="Optional"
                                />
                            </div>
                        </div>
                    </section>

                    {/* 3. SERVICE DETAILS */}
                    <Section title="Service Details">
                        <div className="mb-4 flex justify-end">
                            <button
                                onClick={addItem}
                                className="rounded-lg bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-100"
                            >
                                + Add Service
                            </button>
                        </div>

                        <div className="space-y-4">
                            {items.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="grid gap-3 rounded-lg border border-slate-200 p-4 sm:grid-cols-12"
                                >
                                    <div className="sm:col-span-1">
                                        <span className="text-xs font-bold text-slate-500">
                                            #{index + 1}
                                        </span>
                                    </div>

                                    <div className="space-y-3 sm:col-span-5">
                                        <Field
                                            label="Service Name"
                                            value={item.description}
                                            onChange={(v) =>
                                                updateItem(item.id, "description", v)
                                            }
                                        />
                                        <div>
                                            <label className={labelClass}>
                                                Service Description
                                            </label>
                                            <textarea
                                                rows={2}
                                                value={item.details}
                                                onChange={(e) =>
                                                    updateItem(item.id, "details", e.target.value)
                                                }
                                                placeholder="Describe the service..."
                                                className={inputClass}
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <Field
                                            label="Quantity"
                                            type="number"
                                            value={String(item.quantity)}
                                            onChange={(v) =>
                                                updateItem(item.id, "quantity", Number(v))
                                            }
                                        />
                                    </div>

                                    <div className="sm:col-span-2">
                                        <Field
                                            label="Rate (INR)"
                                            type="number"
                                            value={String(item.rate)}
                                            onChange={(v) =>
                                                updateItem(item.id, "rate", Number(v))
                                            }
                                        />
                                    </div>

                                    <div className="flex items-end justify-between sm:col-span-2 sm:flex-col sm:items-end">
                                        <div>
                                            <label className={labelClass}>Amount</label>
                                            <p className="text-sm font-bold text-slate-800">
                                                {money(item.quantity * item.rate)}
                                            </p>
                                        </div>

                                        <button
                                            onClick={() =>
                                                setItems((previous) =>
                                                    previous.filter((row) => row.id !== item.id)
                                                )
                                            }
                                            disabled={items.length === 1}
                                            className="text-xs font-semibold text-red-500 disabled:opacity-30"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* GST and total */}
                        <div className="mt-6 grid gap-6 border-t border-slate-200 pt-5 md:grid-cols-2">
                            <div className="space-y-4">
                                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                                    <input
                                        type="checkbox"
                                        checked={gstEnabled}
                                        onChange={(e) => setGstEnabled(e.target.checked)}
                                        className="h-4 w-4 accent-blue-600"
                                    />
                                    Apply GST
                                </label>

                                {gstEnabled && (
                                    <>
                                        <div>
                                            <label className={labelClass}>GST Rate</label>
                                            <select
                                                value={gstRate}
                                                onChange={(e) =>
                                                    setGstRate(Number(e.target.value))
                                                }
                                                className={inputClass}
                                            >
                                                {[5, 12, 18, 28].map((rate) => (
                                                    <option key={rate} value={rate}>
                                                        {rate}%
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className={labelClass}>Tax Type</label>
                                            <select
                                                value={taxType}
                                                onChange={(e) =>
                                                    setTaxType(e.target.value as "igst" | "cgst")
                                                }
                                                className={inputClass}
                                            >
                                                <option value="igst">IGST</option>
                                                <option value="cgst">CGST + SGST</option>
                                            </select>
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500">Subtotal</span>
                                    <strong>{money(subtotal)}</strong>
                                </div>

                                {gstEnabled && (
                                    taxType === "igst" ? (
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-500">
                                                IGST ({gstRate}%)
                                            </span>
                                            <strong>{money(gstAmount)}</strong>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-slate-500">
                                                    CGST ({gstRate / 2}%)
                                                </span>
                                                <strong>{money(gstAmount / 2)}</strong>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-slate-500">
                                                    SGST ({gstRate / 2}%)
                                                </span>
                                                <strong>{money(gstAmount / 2)}</strong>
                                            </div>
                                        </>
                                    )
                                )}

                                <div className="flex justify-between bg-[#124b7c] px-4 py-4 text-white">
                                    <strong>Total Amount Due</strong>
                                    <strong>{money(total)}</strong>
                                </div>
                            </div>
                        </div>
                    </Section>

                    {/* 4. PAYMENT DETAILS */}
                    <Section title="Payment Details">
                        <div className="space-y-5">
                            <div>
                                <label className={labelClass}>Payment Method</label>
                                <select
                                    value={paymentMethod}
                                    onChange={(e) =>
                                        setPaymentMethod(e.target.value as PaymentMethod)
                                    }
                                    className={`${inputClass} max-w-sm`}
                                >
                                    <option value="upi">UPI / QR Code</option>
                                    <option value="bank">Bank Account</option>
                                    <option value="both">Both UPI and Bank Account</option>
                                </select>
                            </div>

                            {(paymentMethod === "upi" || paymentMethod === "both") && (
                                <div className="grid gap-5 rounded-lg border border-slate-200 p-4 md:grid-cols-2">
                                    <div className="space-y-4">
                                        <h3 className="font-bold text-slate-800">
                                            UPI Details
                                        </h3>
                                        <Field
                                            label="UPI ID"
                                            value={upiId}
                                            onChange={setUpiId}
                                            placeholder="yourname@upi"
                                        />

                                        <div>
                                            <label className={labelClass}>Upload QR Code</label>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => uploadQR(e.target.files?.[0])}
                                                className="w-full text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex min-h-40 items-center justify-center rounded-lg border border-dashed border-slate-300 p-4">
                                        {qrImage ? (
                                            <div className="text-center">
                                                <img
                                                    src={qrImage}
                                                    alt="Uploaded UPI QR"
                                                    className="mx-auto h-36 w-36 object-contain"
                                                />
                                                <button
                                                    onClick={() => setQrImage("")}
                                                    className="mt-2 text-xs font-semibold text-red-500"
                                                >
                                                    Remove QR
                                                </button>
                                            </div>
                                        ) : (
                                            <p className="text-sm text-slate-400">
                                                QR code preview
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}

                            {(paymentMethod === "bank" || paymentMethod === "both") && (
                                <div className="rounded-lg border border-slate-200 p-4">
                                    <h3 className="mb-4 font-bold text-slate-800">
                                        Bank Account Details
                                    </h3>

                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <Field
                                            label="Bank Name"
                                            value={bank.bankName}
                                            onChange={(v) => updateObject(setBank, "bankName", v)}
                                        />
                                        <Field
                                            label="Account Holder"
                                            value={bank.accountHolder}
                                            onChange={(v) =>
                                                updateObject(setBank, "accountHolder", v)
                                            }
                                        />
                                        <Field
                                            label="Account Number"
                                            value={bank.accountNumber}
                                            onChange={(v) =>
                                                updateObject(setBank, "accountNumber", v)
                                            }
                                        />
                                        <Field
                                            label="IFSC Code"
                                            value={bank.ifsc}
                                            onChange={(v) => updateObject(setBank, "ifsc", v)}
                                        />
                                        <Field
                                            label="Branch"
                                            value={bank.branch}
                                            onChange={(v) => updateObject(setBank, "branch", v)}
                                        />
                                    </div>
                                </div>
                            )}

                            <Field
                                label="Payment Note"
                                value={paymentNote}
                                onChange={setPaymentNote}
                                placeholder="Additional payment instructions"
                            />
                        </div>
                    </Section>

                    {/* DOWNLOAD BUTTON */}
                    <div className="flex justify-end">
                        <button
                            onClick={downloadInvoice}
                            disabled={downloading}
                            className="rounded-lg bg-blue-700 px-7 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-800 disabled:opacity-60"
                        >
                            {downloading ? "Generating PDF..." : "Download Invoice PDF"}
                        </button>
                    </div>
                </div>

                {/* FINAL INVOICE: THIS ELEMENT ALONE IS EXPORTED TO PDF */}
                <div className="pointer-events-none fixed left-[-10000px] top-0">
                    <div
                        ref={invoiceRef}
                        className="invoice-document bg-white text-slate-800"
                    >
                        {/* HEADER */}
                        <div className="invoice-header">
                            <div className="invoice-company">
                                <h1>{company.name}</h1>
                                <p className="invoice-tagline">{company.tagline}</p>
                                <p>{company.address}</p>
                                <p>Phone: {company.phone}</p>
                                <p>Email: {company.email}</p>
                                {company.gstin && <p>GSTIN: {company.gstin}</p>}
                            </div>

                            <div className="invoice-meta">
                                <h2>INVOICE</h2>
                                <p><strong>Invoice No:</strong> {invoice.number}</p>
                                <p><strong>Invoice Date:</strong> {dateFormat(invoice.date)}</p>
                                {invoice.dueDate && (
                                    <p><strong>Due Date:</strong> {dateFormat(invoice.dueDate)}</p>
                                )}
                                <p><strong>Payment Terms:</strong> {invoice.paymentTerms}</p>
                            </div>
                        </div>

                        {/* BILL TO / FROM */}
                        <div className="invoice-parties">
                            <div className="invoice-party">
                                <h3>BILL TO</h3>
                                <div>
                                    <strong>{billTo.name}</strong>
                                    <p>{billTo.address}</p>
                                    {billTo.phone && <p>Phone: {billTo.phone}</p>}
                                    {billTo.email && <p>Email: {billTo.email}</p>}
                                    {billTo.gstin && <p>GSTIN: {billTo.gstin}</p>}
                                </div>
                            </div>

                            <div className="invoice-party">
                                <h3>BILL FROM</h3>
                                <div>
                                    <strong>{billFrom.name}</strong>
                                    <p>{billFrom.address}</p>
                                    <p>Phone: {billFrom.phone}</p>
                                    <p>Email: {billFrom.email}</p>
                                    {billFrom.gstin && <p>GSTIN: {billFrom.gstin}</p>}
                                </div>
                            </div>
                        </div>

                        {/* SERVICE DETAILS */}
                        <div className="invoice-services">
                            <h3>Service Details</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th className="number-col">#</th>
                                        <th>Description</th>
                                        <th className="qty-col">Qty</th>
                                        <th className="amount-col">Amount (INR)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item, index) => (
                                        <tr key={item.id}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <strong>{item.description}</strong>
                                                {item.details && <p>{item.details}</p>}
                                            </td>
                                            <td>{item.quantity}</td>
                                            <td>{money(item.quantity * item.rate)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* TOTAL */}
                        <div className="invoice-total">
                            <div className="invoice-total-line">
                                <span>Subtotal</span>
                                <strong>{money(subtotal)}</strong>
                            </div>

                            {gstEnabled && taxType === "igst" && (
                                <div className="invoice-total-line">
                                    <span>IGST ({gstRate}%)</span>
                                    <strong>{money(gstAmount)}</strong>
                                </div>
                            )}

                            {gstEnabled && taxType === "cgst" && (
                                <>
                                    <div className="invoice-total-line">
                                        <span>CGST ({gstRate / 2}%)</span>
                                        <strong>{money(gstAmount / 2)}</strong>
                                    </div>
                                    <div className="invoice-total-line">
                                        <span>SGST ({gstRate / 2}%)</span>
                                        <strong>{money(gstAmount / 2)}</strong>
                                    </div>
                                </>
                            )}

                            <div className="invoice-grand-total">
                                <strong>TOTAL AMOUNT DUE</strong>
                                <strong>{money(total)}</strong>
                            </div>
                        </div>

                        {/* PAYMENT DETAILS */}
                        <div className="invoice-payment">
                            <div className="invoice-payment-info">
                                <h3>PAYMENT DETAILS</h3>

                                {(paymentMethod === "upi" || paymentMethod === "both") && (
                                    <div className="payment-block">
                                        <strong>UPI / PhonePe</strong>
                                        {upiId && <p>UPI ID: {upiId}</p>}
                                    </div>
                                )}

                                {(paymentMethod === "bank" || paymentMethod === "both") && (
                                    <div className="payment-block">
                                        <strong>Bank Transfer</strong>
                                        <p>Bank Name: {bank.bankName}</p>
                                        <p>Account Name: {bank.accountHolder}</p>
                                        <p>Account Number: {bank.accountNumber}</p>
                                        <p>IFSC: {bank.ifsc}</p>
                                        {bank.branch && <p>Branch: {bank.branch}</p>}
                                    </div>
                                )}

                                <div className="payment-block">
                                    <p>Phone: {billFrom.phone}</p>
                                    <p>Email: {billFrom.email}</p>
                                    <p>Payment Reference: {invoice.number}</p>
                                    {paymentNote && <p>{paymentNote}</p>}
                                </div>
                            </div>

                            {(paymentMethod === "upi" || paymentMethod === "both") && (
                                <div className="invoice-qr">
                                    <h3>SCAN &amp; PAY</h3>
                                    {qrImage ? (
                                        <img src={qrImage} alt="Payment QR Code" />
                                    ) : (
                                        <p>QR code not provided</p>
                                    )}
                                    {upiId && <span>{upiId}</span>}
                                </div>
                            )}
                        </div>

                        {/* FOOTER */}
                        <div className="invoice-note">
                            <strong>Note:</strong>{" "}
                            {billFrom.gstin
                                ? "Please verify the invoice details before making payment."
                                : "GST has not been charged on this invoice. Please verify all details before making payment."}
                        </div>

                        <div className="invoice-footer">
                            Thank you for choosing {company.name}.
                        </div>
                    </div>
                </div>
            </div>

            {/* PDF DOCUMENT STYLING */}
            <style jsx global>{`
      .invoice-document {
        box-sizing: border-box;
        width: 794px;
        min-height: 1123px;
        padding: 42px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 12px;
        line-height: 1.55;
        color: #334155;
        background: #ffffff;
        overflow: hidden;
        }

        .invoice-document * {
          box-sizing: border-box;
        }

        .invoice-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          padding-bottom: 22px;
          border-bottom: 3px solid #2563a6;
        }

        .invoice-company h1 {
          margin: 0 0 2px;
          color: #124b7c;
          font-size: 25px;
          font-weight: 800;
          line-height: 1.2;
        }

        .invoice-company p {
          margin: 3px 0;
          overflow-wrap: anywhere;
        }

        .invoice-company .invoice-tagline {
          margin-bottom: 8px;
          color: #64748b;
          font-size: 11px;
        }

        .invoice-meta {
          text-align: right;
        }

        .invoice-meta h2 {
          margin: 0 0 12px;
          color: #2563a6;
          font-size: 35px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .invoice-meta p {
          margin: 5px 0;
        }

        .invoice-parties {
          display: grid;
          grid-template-columns: 1fr 1fr;
          margin-top: 24px;
          border: 1px solid #dbe2ea;
        }

        .invoice-party + .invoice-party {
          border-left: 1px solid #dbe2ea;
        }

        .invoice-party h3,
        .invoice-payment-info h3,
        .invoice-qr h3 {
          margin: 0;
          padding: 9px 13px;
          background: #f1f5f9;
          border-bottom: 1px solid #dbe2ea;
          color: #124b7c;
          font-size: 12px;
          font-weight: 800;
        }

        .invoice-party > div {
          min-height: 125px;
          padding: 13px;
        }

        .invoice-party p {
          margin: 4px 0;
          overflow-wrap: anywhere;
        }

        .invoice-party strong {
          color: #1e293b;
        }

        .invoice-services {
          margin-top: 28px;
        }

        .invoice-services h3 {
          margin: 0 0 10px;
          color: #124b7c;
          font-size: 15px;
          font-weight: 800;
        }

        .invoice-services table {
          width: 100%;
          border-collapse: collapse;
          table-layout: fixed;
        }

        .invoice-services th {
          padding: 10px;
          background: #f1f5f9;
          border: 1px solid #dbe2ea;
          color: #334155;
          text-align: left;
          font-size: 11px;
        }

        .invoice-services td {
          padding: 11px 10px;
          border: 1px solid #dbe2ea;
          vertical-align: top;
          overflow-wrap: anywhere;
        }

        .invoice-services td strong {
          color: #1e293b;
        }

        .invoice-services td p {
          margin: 3px 0 0;
          color: #64748b;
          font-size: 10px;
        }

        .invoice-services .number-col {
          width: 42px;
        }

        .invoice-services .qty-col {
          width: 65px;
        }

        .invoice-services .amount-col {
          width: 145px;
        }

        .invoice-total {
          width: 330px;
          margin: 18px 0 0 auto;
        }

        .invoice-total-line {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          padding: 5px 0;
          font-size: 12px;
        }

        .invoice-grand-total {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          margin-top: 9px;
          padding: 13px;
          background: #124b7c;
          color: white;
          font-size: 12px;
        }

        .invoice-payment {
          display: grid;
          grid-template-columns: 1fr 215px;
          margin-top: 26px;
          border: 1px solid #dbe2ea;
          break-inside: avoid;
        }

        .invoice-payment-info {
          border-right: 1px solid #dbe2ea;
        }

        .payment-block {
          padding: 11px 13px 0;
        }

        .payment-block strong {
          display: block;
          margin-bottom: 5px;
          color: #1e293b;
        }

        .payment-block p {
          margin: 3px 0;
          overflow-wrap: anywhere;
        }

        .invoice-qr {
          text-align: center;
        }

        .invoice-qr img {
          display: block;
          width: 145px;
          height: 145px;
          margin: 14px auto 7px;
          object-fit: contain;
        }

        .invoice-qr span {
          display: block;
          padding: 0 8px 10px;
          overflow-wrap: anywhere;
          font-size: 10px;
        }

        .invoice-qr > p {
          padding: 30px 10px;
          color: #94a3b8;
        }

        .invoice-note {
          margin-top: 20px;
          padding: 12px 0;
          border-bottom: 1px solid #dbe2ea;
          color: #64748b;
          font-size: 10px;
        }

        .invoice-footer {
          padding-top: 30px;
          color: #64748b;
          text-align: center;
          font-size: 11px;
        }
      `}</style>
        </main>
    );
}

import React from "react";

interface MessageFieldProps {
  label: string;
  placeholder?: string;
  className?:string;
}

const MessageField = ({ label, placeholder,className }: MessageFieldProps) => {
  return (
    <div className="">
      <span className="text-dark font-semibold">{label}</span>

      <textarea
        placeholder={placeholder}
        className={`${className} w-full h-40 text-[15px] rounded-lg mt-2 bg-[#F8F8F8] px-4 py-3 font-normal text-[#000000] outline-none placeholder:text-[#323232B2] focus:border-[#000000]`}
      />
    </div>
  );
};

export default MessageField;
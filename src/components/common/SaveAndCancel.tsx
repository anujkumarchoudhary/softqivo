import Link from "next/link";

type SaveAndCancelProps = {
  saveText?: string;
  cancelText?: string;
  saveHref?: string;
  cancelHref?: string;
  className?: string;
};

const SaveAndCancel = ({
  saveText = "Start a Project",
  cancelText = "Explore Our Work",
  saveHref = "/contact",
  cancelHref = "/work",
  className = "",
}: SaveAndCancelProps) => {
  return (
    <div
      className={`
        flex items-center gap-3
        ${className}
      `}
    >
      {/* Start a Project */}
      <Link
        href={saveHref}
        className="
          group
          inline-flex items-center justify-center
          gap-2
          rounded-md
          bg-gradient-to-r
          from-[#A855F7]
          to-[#2563EB]
          px-5 py-3
          text-[16px]
          sm:text-[18px]
          font-medium
          text-white
          shadow-lg
          shadow-purple-500/20
          transition-all
          duration-300
          hover:scale-[1.03]
          hover:shadow-purple-500/30
        "
      >
        <span>{saveText}</span>

        <span
          className="
            text-sm
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        >
          →
        </span>
      </Link>

      {/* Explore Our Work */}
      <Link
        href={cancelHref}
        className="
          inline-flex items-center justify-center
          rounded-md
          border border-white/20
          bg-white/[0.02]
          px-5 py-3
          text-[16px]
          sm:text-[18px]
          font-medium
          text-white
          transition-all
          duration-300
          hover:border-white/40
          hover:bg-white/[0.06]
          hover:scale-[1.03]
        "
      >
        {cancelText}
      </Link>
    </div>
  );
};

export default SaveAndCancel;
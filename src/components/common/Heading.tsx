type HeadingPart = {
  text: string;
  color?: string;
  font?: string;
  style?: string;
  size?: string;
  weight?: string;
};

type HeadingProps = {
  label?: string;
  description?: string;
  headingParts: HeadingPart[];

  textColor?: string;
  descColor?: string;

  labelBorderStart?: string;
  labelBorderEnd?: string;
  isDart?: boolean;
  isCenter?: boolean;
  isVisible?: boolean;

  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const fontMap: Record<string, string> = {
  playfair: "var(--font-playfair-display)",
  geist: "var(--font-geist-sans)",
  "geist-mono": "var(--font-geist-mono)",
  kanit: "var(--font-kanit)",
};

const Heading = ({
  label,
  description,
  headingParts,
  textColor = "#000000",
  isDart = false,
  isCenter = false,
  isVisible = true,
  className = "",
  as: Tag = "h1",
}: HeadingProps) => {
  return (
    <div className={`${isCenter ? "text-center" : ""}`}>
      {/* Label */}
      {label && (
        <div
          className={`
      inline-block rounded-full
      transition-all duration-700
      border ${isDart ? "border-[#FFFFFF]/50" : "border-[#000000]/50"} 
      ${label && "mb-5"}
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
    `}
        >
          <span
            className={`
        uppercase inline-block
        rounded-full
        bg-transparent
        px-5 py-2
        tracking-widest
        text-[12px]
        lg:text-[15px]
        font-semibold
        ${isCenter ? "text-center" : ""}
      `}
            style={{
              color: textColor,
            }}
          >
            {label}
          </span>
        </div>
      )}

      {/* Heading */}
      <Tag
        className={`
          transition-all duration-700 delay-150
          ${className}
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }
        `}
      >
        {headingParts.map((part, index) => (
          <span
            key={index}
            style={{
              color: part.color,
              fontFamily: part.font
                ? fontMap[part.font] || part.font
                : undefined,
              fontStyle: part.style,
              fontSize: part.size,
              fontWeight: part.weight,
            }}
          >
            {part.text}
          </span>
        ))}
      </Tag>

      {/* Description */}
      {description && (
        <p
          className={`
            text-[20px]
            transition-all duration-700 delay-300
            ${description && "mt-10"}
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }
            ${isCenter ? "mx-auto text-center" : ""}
          `}
          style={{
            color: textColor,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default Heading;

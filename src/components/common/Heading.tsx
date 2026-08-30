type HeadingPart = {
  text: string;
  color?: string;
  font?: string;
  style?: string;
  size?: string;
  weight?: string;
  gradient?: string;
};

type HeadingProps = {
  label?: string;
  labelColor?: string;
  accentColor?: string;
  description?: string;
  headingParts: HeadingPart[];

  textColor?: string;
  descColor?: string;

  labelBorderStart?: string;
  labelBorderEnd?: string;
  isDart?: boolean;
  isCenter?: boolean;
  isVisible?: boolean;
  isGradient?: boolean;
  gradient?: string;

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
  labelColor,
  accentColor,
  description,
  headingParts,
  textColor = "#000000",
  isDart = false,
  isCenter = false,
  isVisible = true,
  isGradient = false,
  gradient,
  className = "",
  as: Tag = "h1",
}: HeadingProps) => {
  return (
    <div className={`${isCenter ? "text-center" : ""}`}>
      {/* Label */}
      {label && (
        <div
          className={`flex items-center gap-3  ${isCenter ? "text-center w-fit mx-auto" : "w-full"}`}
        >
          {accentColor && (
            <span
              className="h-2.5 w-2.5 animate-pulse rounded-full"
              style={{
                backgroundColor: accentColor ?? "#A855F7",
                boxShadow: `0 0 12px ${accentColor ?? "#A855F7"}`,
              }}
            />
          )}

          <span
            className={`
        uppercase inline-block
        rounded-full
        bg-transparent
        px-0 py-2
        tracking-widest
        text-[12px]
        lg:text-[14px]
        font-semibold
      `}
            style={{
              color: labelColor ?? textColor,
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
        {headingParts.map((part, index) => {
          const isPartGradient = Boolean(part.gradient);

          return (
            <span
              key={index}
              style={{
                // Normal color when no gradient
                color: isPartGradient ? "transparent" : part.color,

                // Gradient only for this part
                backgroundImage: isPartGradient ? part.gradient : undefined,

                backgroundClip: isPartGradient ? "text" : undefined,

                WebkitBackgroundClip: isPartGradient ? "text" : undefined,

                WebkitTextFillColor: isPartGradient ? "transparent" : undefined,

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
          );
        })}
      </Tag>

      {/* Description */}
      {description && (
        <p
          className={`
            text-[18px] lg:text-[20px]
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

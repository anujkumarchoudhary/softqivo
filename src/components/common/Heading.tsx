type HeadingPart = {
  text: string;
  color?: string;
  font?: string;
  style?: string;
  size?: string;
  weight?: string | number;
  lineHeight?: string | number;
  gradient?: string;
};

type HeadingProps = {
  label?: string;
  isAccentCircle?: boolean;
  isAccentLine?:boolean
  labelColor?: string;
  accentColor?: string;
  description?: string;
  headingParts?: HeadingPart[];

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

const headingDefaults = {
  h1: {
    fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
    fontWeight: 600,
    lineHeight: 1.08,
  },
  h2: {
    fontSize: "clamp(2rem, 4vw, 3.5rem)",
    fontWeight: 700,
    lineHeight: 1.1,
  },
  h3: {
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
    fontWeight: 600,
    lineHeight: 1.15,
  },
  h4: {
    fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)",
    fontWeight: 600,
    lineHeight: 1.2,
  },
  h5: {
    fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
    fontWeight: 600,
    lineHeight: 1.25,
  },
  h6: {
    fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
    fontWeight: 600,
    lineHeight: 1.3,
  },
};

const Heading = ({
  label,
  labelColor,
  accentColor,
  isAccentCircle,
  isAccentLine,
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
  const defaultHeading = headingDefaults[Tag];
  return (
    <div className={` space-y-3  ${isCenter ? "text-center" : ""}`}>
      {/* Label */}
      {label && (
        <div
          className={``}
        >
          {isAccentCircle && (
            <div className={`flex items-center gap-5 justify-center lg:justify-normal  ${isCenter ? "text-center w-fit mx-auto" : "w-full"}`}>
              <span
              className="h-2.5 w-2.5 animate-pulse rounded-full"
              style={{
                backgroundColor: accentColor ?? "#A855F7",
                boxShadow: `0 0 12px ${accentColor ?? "#A855F7"}`,
              }}
            />
             <span
            className={`
        uppercase inline-block
        rounded-full
        bg-transparent
        px-0 py-2
        text-[10px]
        lg:text-[12px]
        tracking-[0.25em]
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
          
          {isAccentLine && <div className={`flex items-center gap-5 justify-center lg:justify-normal  ${isCenter ? "text-center w-fit mx-auto" : "w-full"}`}>
            <span className="h-px w-4 lg:w-7 animate-ping" style={{backgroundColor: accentColor ?? "#A855F7",animationDelay: "0s",}} />

          <span
            className={`
        uppercase inline-block
        rounded-full
        bg-transparent
        px-0 py-2
        text-[10px]
        lg:text-[12px]
        tracking-[0.25em]
        font-semibold
      `}
            style={{
              color: labelColor ?? textColor,
            }}
          >
            {label}
          </span>
              <span className="h-px w-4 lg:w-7 animate-ping" style={{backgroundColor: accentColor ?? "#A855F7",animationDelay: "0.5s",}} /></div>}
        </div>
      )}

      {/* Heading */}
<Tag
  className={`
    transition-all duration-700 delay-150
    ${className}
    ${
      isVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-10"
    }
  `}
>
  {headingParts?.map((part, index) => {
    const isPartGradient = Boolean(part.gradient);

    return (
      <span
        key={index}
        className={`
          flex
          ${
            isCenter
              ? "justify-center text-center"
              : "justify-center text-center lg:justify-start lg:text-left"
          }
        `}
        style={{
          color: isPartGradient
            ? "transparent"
            : part.color ?? textColor,

          backgroundImage: isPartGradient
            ? part.gradient
            : undefined,

          backgroundClip: isPartGradient
            ? "text"
            : undefined,

          WebkitBackgroundClip: isPartGradient
            ? "text"
            : undefined,

          WebkitTextFillColor: isPartGradient
            ? "transparent"
            : undefined,

          fontFamily: part.font
            ? fontMap[part.font] || part.font
            : undefined,

          fontStyle: part.style,

          fontSize:
            part.size ?? defaultHeading.fontSize,

          fontWeight:
            part.weight ?? defaultHeading.fontWeight,

          lineHeight:
            part.lineHeight ?? defaultHeading.lineHeight,
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
      transition-all
      duration-700
      delay-300
      w-[90%]
      ${
        isCenter
          ? "mx-auto text-center"
          : "mx-auto text-center lg:mx-0 lg:text-left lg:w-full"
      }
      ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }
      mt-6 lg:mt-8
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

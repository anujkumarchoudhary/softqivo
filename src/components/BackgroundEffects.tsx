interface BackgroundEffectsProps {
  color?: string;
}

export default function BackgroundEffects({
  color,
}: BackgroundEffectsProps) {
  const leftColor = color
    ? `color-mix(in srgb, ${color} 10%, transparent)`
    : undefined;

  const rightColor = color
    ? `color-mix(in srgb, ${color} 10%, transparent)`
    : undefined;

  const topColor = color
    ? `color-mix(in srgb, ${color} 30%, transparent)`
    : undefined;

  const bottomColor = color
    ? `color-mix(in srgb, ${color} 30%, transparent)`
    : undefined;

  return (
    <>
      {/* Background Grid */}
      <div className="absolute inset-0 -z-20 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.035) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.035) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      {/* Left Purple Glow */}
      <div
        className={`absolute -left-32 top-1/2 -z-10 h-[420px] w-[420px] -translate-y-1/2 rounded-full blur-[120px] ${
          !color ? "bg-purple-600/10" : ""
        }`}
        style={{
          backgroundColor: leftColor,
        }}
      />

      {/* Right Blue Glow */}
      <div
        className={`absolute -right-32 top-1/2 -z-10 h-[420px] w-[420px] -translate-y-1/2 rounded-full blur-[120px] ${
          !color ? "bg-blue-600/10" : ""
        }`}
        style={{
          backgroundColor: rightColor,
        }}
      />

      {/* Top subtle line */}
      <div
        className={`absolute left-0 right-0 top-0 h-px ${
          !color
            ? "bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
            : ""
        }`}
        style={
          color
            ? {
                background: `linear-gradient(
                  to right,
                  transparent,
                  ${topColor},
                  transparent
                )`,
              }
            : undefined
        }
      />

      {/* Bottom subtle line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px ${
          !color
            ? "bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
            : ""
        }`}
        style={
          color
            ? {
                background: `linear-gradient(
                  to right,
                  transparent,
                  ${bottomColor},
                  transparent
                )`,
              }
            : undefined
        }
      />
    </>
  );
}
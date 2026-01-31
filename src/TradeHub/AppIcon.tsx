import { AbsoluteFill } from "remotion";
import { z } from "zod";

export const appIconSchema = z.object({});

export const TradeHubAppIcon: React.FC<z.infer<typeof appIconSchema>> = () => {
  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0a0f14 0%, #0d1520 50%, #101820 100%)",
        fontFamily: "system-ui, -apple-system, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(15,255,107,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,255,107,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Green glow behind icon */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(15,255,107,0.3) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      {/* Icon container */}
      <div
        style={{
          width: 600,
          height: 600,
          borderRadius: 140,
          background: "linear-gradient(145deg, rgba(15,255,107,0.15) 0%, rgba(15,255,107,0.05) 100%)",
          border: "3px solid rgba(15,255,107,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
      >
        {/* Chart icon */}
        <svg
          width="340"
          height="340"
          viewBox="0 0 24 24"
          fill="none"
          style={{ position: "relative", zIndex: 10 }}
        >
          {/* Axes */}
          <path
            d="M3 3v18h18"
            stroke="url(#greenGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Chart line */}
          <path
            d="M7 14l3-3 3 2 5-6"
            stroke="url(#greenGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Arrow up */}
          <path
            d="M15 7h3v3"
            stroke="url(#greenGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Dots on chart */}
          <circle cx="7" cy="14" r="2" fill="#0fff6b" />
          <circle cx="10" cy="11" r="2" fill="#0fff6b" />
          <circle cx="13" cy="13" r="2" fill="#0fff6b" />
          <circle cx="18" cy="7" r="2.5" fill="#0fff6b" />

          <defs>
            <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0fff6b" />
              <stop offset="100%" stopColor="#00d45a" />
            </linearGradient>
          </defs>
        </svg>

        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: 80,
            right: 80,
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "rgba(15,255,107,0.1)",
            border: "2px solid rgba(15,255,107,0.2)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 100,
            left: 70,
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "rgba(15,255,107,0.08)",
            border: "2px solid rgba(15,255,107,0.15)",
          }}
        />
      </div>

      {/* Corner accents */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 60,
          width: 80,
          height: 80,
          borderLeft: "3px solid rgba(15,255,107,0.3)",
          borderTop: "3px solid rgba(15,255,107,0.3)",
          borderRadius: "20px 0 0 0",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 60,
          right: 60,
          width: 80,
          height: 80,
          borderRight: "3px solid rgba(15,255,107,0.3)",
          borderBottom: "3px solid rgba(15,255,107,0.3)",
          borderRadius: "0 0 20px 0",
        }}
      />
    </AbsoluteFill>
  );
};

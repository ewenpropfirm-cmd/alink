import { AbsoluteFill, Img, staticFile } from "remotion";
import { z } from "zod";

export const featureStatsSchema = z.object({});

export const FeatureStats: React.FC<z.infer<typeof featureStatsSchema>> = () => {
  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #1a3d2e 0%, #0d2818 50%, #0a1f14 100%)",
        fontFamily: "system-ui, -apple-system, sans-serif",
        overflow: "hidden",
      }}
    >

      {/* Gradient orbs */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 800,
          background: "radial-gradient(circle, rgba(34,197,94,0.2) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      {/* Main content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "50px 60px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "14px 28px",
            background: "rgba(34,197,94,0.15)",
            borderRadius: 100,
            border: "1px solid rgba(34,197,94,0.3)",
            marginBottom: 40,
          }}
        >
          <span style={{ fontSize: 24 }}>📊</span>
          <span style={{ fontSize: 24, color: "#22c55e", fontWeight: 600 }}>TRACK RECORD</span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: 100,
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            margin: 0,
            marginBottom: 60,
            letterSpacing: "-0.03em",
          }}
        >
          Proven{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #22c55e, #fbbf24)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Results
          </span>
        </h1>

        {/* Stats grid */}
        <div
          style={{
            display: "flex",
            gap: 40,
            marginBottom: 50,
          }}
        >
          {[
            { value: "+26%", label: "Last Month ROI", icon: "📈" },
            { value: "+64", label: "Units CBB Season", icon: "🏀" },
            { value: "Daily", label: "Fresh Picks", icon: "🔥" },
            { value: "$20", label: "Per Month", icon: "💰" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: 24,
                padding: "36px 48px",
                border: "1px solid rgba(255,255,255,0.1)",
                textAlign: "center",
                minWidth: 200,
              }}
            >
              <div style={{ fontSize: 48, marginBottom: 16 }}>{stat.icon}</div>
              <div
                style={{
                  fontSize: 72,
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #22c55e, #fbbf24)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: 12,
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: 26, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <Img
            src={staticFile("cheddys-logo.png")}
            style={{ width: 60, height: 60, borderRadius: 14 }}
          />
          <span style={{ fontSize: 28, fontWeight: 700, color: "#fbbf24" }}>
            Cheddy's Kitchen
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

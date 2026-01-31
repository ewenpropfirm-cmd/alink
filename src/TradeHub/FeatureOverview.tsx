import { AbsoluteFill } from "remotion";
import { z } from "zod";

export const featureOverviewSchema = z.object({});

export const FeatureOverview: React.FC<z.infer<typeof featureOverviewSchema>> = () => {
  const features = [
    {
      icon: "💰",
      title: "Your Affiliate Links",
      description: "Add your own partners and earn commissions",
      color: "#0fff6b",
    },
    {
      icon: "📊",
      title: "CTA Placements",
      description: "Show partner ads on every section",
      color: "#f59e0b",
    },
    {
      icon: "📅",
      title: "Economic Calendar",
      description: "Real-time market events with AI summaries",
      color: "#3b82f6",
    },
    {
      icon: "🧮",
      title: "Position Calculator",
      description: "Lot size, risk & AI trade analysis",
      color: "#22c55e",
    },
    {
      icon: "🗺️",
      title: "Correlation Heat Map",
      description: "Forex, Crypto & Indices correlations",
      color: "#8b5cf6",
    },
    {
      icon: "🎨",
      title: "White Label",
      description: "Your brand, your colors, your logo",
      color: "#ec4899",
    },
  ];

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #06080d 0%, #0a0f18 50%, #0d1520 100%)",
        fontFamily: "system-ui, -apple-system, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(15,255,107,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,255,107,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: -100,
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 400,
          background: "radial-gradient(circle, rgba(15,255,107,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          padding: "60px 80px",
        }}
      >
        {/* Badge */}
        <div
          style={{
            padding: "10px 24px",
            borderRadius: 100,
            background: "rgba(15,255,107,0.15)",
            border: "1px solid rgba(15,255,107,0.3)",
            color: "#0fff6b",
            fontSize: 14,
            fontWeight: 600,
            marginBottom: 24,
            letterSpacing: "0.05em",
          }}
        >
          FOR COMMUNITY OWNERS
        </div>

        <h1
          style={{
            fontSize: 54,
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            margin: 0,
            marginBottom: 16,
            letterSpacing: "-0.03em",
          }}
        >
          Value + {" "}
          <span
            style={{
              background: "linear-gradient(135deg, #0fff6b 0%, #00d45a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Monetization
          </span>
        </h1>

        <p
          style={{
            fontSize: 20,
            color: "rgba(255,255,255,0.6)",
            textAlign: "center",
            margin: 0,
            marginBottom: 50,
          }}
        >
          Give your members pro trading tools while earning from your affiliate partners
        </p>

        {/* Features grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            width: "100%",
            maxWidth: 1100,
          }}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              style={{
                background: "#0d1117",
                borderRadius: 20,
                padding: 28,
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 16,
                  background: `${feature.color}15`,
                  border: `1px solid ${feature.color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                  marginBottom: 20,
                }}
              >
                {feature.icon}
              </div>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "white",
                  marginBottom: 8,
                }}
              >
                {feature.title}
              </div>
              <div
                style={{
                  fontSize: 15,
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.5,
                }}
              >
                {feature.description}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA area */}
        <div
          style={{
            marginTop: 40,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              padding: "14px 28px",
              background: "#0fff6b",
              borderRadius: 12,
              color: "#06080d",
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            Start Earning →
          </div>
          <div
            style={{
              padding: "14px 28px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              color: "white",
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            Available on Whop
          </div>
        </div>
      </div>

      {/* Logo */}
      <div
        style={{
          position: "absolute",
          top: 40,
          left: 60,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: "linear-gradient(135deg, #0fff6b 0%, #00d45a 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06080d" strokeWidth="2.5">
            <path d="M3 3v18h18" />
            <path d="M18 9l-5 5-4-4-3 3" />
          </svg>
        </div>
        <span style={{ fontSize: 22, fontWeight: 600 }}>
          <span style={{ color: "white" }}>Trade</span>
          <span style={{ color: "#0fff6b" }}> Hub</span>
        </span>
      </div>
    </AbsoluteFill>
  );
};

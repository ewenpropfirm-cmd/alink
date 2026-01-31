import { AbsoluteFill } from "remotion";
import { z } from "zod";

export const featureShowcaseSchema = z.object({});

export const FeatureShowcase: React.FC<z.infer<typeof featureShowcaseSchema>> = () => {
  const features = [
    {
      icon: "🎨",
      title: "White Label",
      description: "Your name, your colors, your logo",
      color: "#8b5cf6",
    },
    {
      icon: "🖼️",
      title: "9 Templates",
      description: "Beautiful pre-designed styles for any niche",
      color: "#ec4899",
    },
    {
      icon: "📊",
      title: "Click Tracking",
      description: "See clicks per link over any time period",
      color: "#10b981",
    },
    {
      icon: "🏷️",
      title: "Badges & Ratings",
      description: "Highlight top partners with custom badges",
      color: "#f59e0b",
    },
    {
      icon: "📱",
      title: "Responsive",
      description: "Looks perfect on desktop and mobile",
      color: "#06b6d4",
    },
    {
      icon: "⚡",
      title: "Easy Setup",
      description: "Add partners in seconds with intuitive admin",
      color: "#ef4444",
    },
  ];

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)",
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
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Gradient orbs */}
      <div
        style={{
          position: "absolute",
          top: -200,
          left: "30%",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
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
        {/* Header */}
        <div
          style={{
            padding: "10px 24px",
            borderRadius: 100,
            background: "rgba(59,130,246,0.2)",
            border: "1px solid rgba(59,130,246,0.3)",
            color: "#60a5fa",
            fontSize: 14,
            fontWeight: 600,
            marginBottom: 24,
            letterSpacing: "0.05em",
          }}
        >
          FEATURES
        </div>

        <h1
          style={{
            fontSize: 58,
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            margin: 0,
            marginBottom: 20,
            letterSpacing: "-0.03em",
          }}
        >
          Everything You Need to{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Succeed
          </span>
        </h1>

        <p
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.6)",
            textAlign: "center",
            margin: 0,
            marginBottom: 60,
          }}
        >
          Powerful tools to grow your affiliate revenue
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
                background: "rgba(255,255,255,0.05)",
                borderRadius: 20,
                padding: 32,
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "all 0.3s",
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  background: `${feature.color}20`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 32,
                  marginBottom: 20,
                }}
              >
                {feature.icon}
              </div>
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "white",
                  marginBottom: 8,
                }}
              >
                {feature.title}
              </div>
              <div
                style={{
                  fontSize: 16,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.5,
                }}
              >
                {feature.description}
              </div>
            </div>
          ))}
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
            background: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        </div>
        <span style={{ fontSize: 22, fontWeight: 600, color: "white" }}>
          Affiliate <span style={{ color: "#a78bfa" }}>Links</span>
        </span>
      </div>
    </AbsoluteFill>
  );
};

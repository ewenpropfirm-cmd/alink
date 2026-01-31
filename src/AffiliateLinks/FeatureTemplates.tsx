import { AbsoluteFill } from "remotion";
import { z } from "zod";

export const featureTemplatesSchema = z.object({});

export const FeatureTemplates: React.FC<z.infer<typeof featureTemplatesSchema>> = () => {
  const templates = [
    { name: "Ecom Starter", category: "E-commerce", color: "#10b981", icon: "🛒" },
    { name: "SaaS Stack", category: "Business", color: "#8b5cf6", icon: "⚡" },
    { name: "Influencer Kit", category: "Creator", color: "#f59e0b", icon: "⭐" },
    { name: "Creator Studio", category: "Content", color: "#ec4899", icon: "🎨" },
    { name: "Wellness Hub", category: "Health", color: "#06b6d4", icon: "💚" },
    { name: "Shadow Quartz", category: "Dark Mode", color: "#6366f1", icon: "🌙" },
    { name: "Arcade", category: "Gaming", color: "#ef4444", icon: "🎮" },
    { name: "Minimal", category: "Clean", color: "#64748b", icon: "✨" },
    { name: "Neon Glow", category: "Vibrant", color: "#a855f7", icon: "💜" },
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
          right: -100,
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -200,
          left: -100,
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Content */}
      <div
        style={{
          display: "flex",
          height: "100%",
          padding: "60px 80px",
          gap: 60,
        }}
      >
        {/* Left side */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Badge */}
          <div
            style={{
              padding: "10px 24px",
              borderRadius: 100,
              background: "rgba(236,72,153,0.2)",
              border: "1px solid rgba(236,72,153,0.3)",
              color: "#ec4899",
              fontSize: 14,
              fontWeight: 600,
              marginBottom: 24,
              letterSpacing: "0.05em",
              alignSelf: "flex-start",
            }}
          >
            TEMPLATE GALLERY
          </div>

          <h1
            style={{
              fontSize: 58,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              margin: 0,
              marginBottom: 24,
              letterSpacing: "-0.03em",
            }}
          >
            9 Beautiful
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Templates
            </span>
          </h1>

          <p
            style={{
              fontSize: 22,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.6,
              margin: 0,
              marginBottom: 40,
              maxWidth: 450,
            }}
          >
            White label templates for every niche. Apply your branding and make it uniquely yours.
          </p>

          {/* Features list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {["One-click apply", "White label ready", "Match your brand"].map((feature) => (
              <div key={feature} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 6,
                    background: "rgba(236,72,153,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span style={{ fontSize: 18, color: "rgba(255,255,255,0.8)" }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Template grid */}
        <div
          style={{
            flex: 1.3,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
            gap: 20,
            alignContent: "center",
          }}
        >
          {templates.map((template, i) => (
            <div
              key={template.name}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: 16,
                padding: 20,
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                flexDirection: "column",
                transform: i % 2 === 1 ? "translateY(20px)" : "translateY(0)",
              }}
            >
              {/* Preview area */}
              <div
                style={{
                  height: 100,
                  background: `linear-gradient(135deg, ${template.color}30, ${template.color}10)`,
                  borderRadius: 10,
                  marginBottom: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 36,
                }}
              >
                {template.icon}
              </div>

              <div style={{ fontSize: 16, fontWeight: 600, color: "white", marginBottom: 4 }}>
                {template.name}
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
                {template.category}
              </div>

              {/* Color indicator */}
              <div
                style={{
                  marginTop: 12,
                  height: 4,
                  borderRadius: 2,
                  background: template.color,
                }}
              />
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

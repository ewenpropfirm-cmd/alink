import { AbsoluteFill } from "remotion";
import { z } from "zod";

export const featureWhiteLabelSchema = z.object({});

export const FeatureWhiteLabel: React.FC<z.infer<typeof featureWhiteLabelSchema>> = () => {
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

      {/* Purple glow */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "20%",
          width: 600,
          height: 500,
          background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
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
        {/* Left - Text */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              padding: "10px 24px",
              borderRadius: 100,
              background: "rgba(168,85,247,0.15)",
              border: "1px solid rgba(168,85,247,0.3)",
              color: "#a855f7",
              fontSize: 14,
              fontWeight: 600,
              marginBottom: 24,
              letterSpacing: "0.05em",
              alignSelf: "flex-start",
            }}
          >
            WHITE LABEL + MONETIZATION
          </div>

          <h1
            style={{
              fontSize: 54,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              margin: 0,
              marginBottom: 24,
              letterSpacing: "-0.03em",
            }}
          >
            Your Brand,
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #a855f7 0%, #c084fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Your Revenue
            </span>
          </h1>

          <p
            style={{
              fontSize: 20,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.6,
              margin: 0,
              marginBottom: 36,
              maxWidth: 420,
            }}
          >
            Fully customize Trade Hub with your brand and monetize with your own affiliate partners.
          </p>

          {/* Features list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { icon: "💰", text: "Add your own affiliate links" },
              { icon: "🎨", text: "Custom app name & colors" },
              { icon: "🖼️", text: "Upload your own logo" },
              { icon: "📊", text: "Partner ads on every page" },
              { icon: "📍", text: "Choose landing page" },
            ].map((item) => (
              <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "rgba(168,85,247,0.1)",
                    border: "1px solid rgba(168,85,247,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                  }}
                >
                  {item.icon}
                </div>
                <span style={{ fontSize: 17, color: "rgba(255,255,255,0.8)" }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Admin panel mockup */}
        <div
          style={{
            flex: 1.1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 600,
              background: "#0d1117",
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "20px 28px",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#f59e0b",
                  }}
                />
                <span style={{ fontSize: 20, fontWeight: 700, color: "white" }}>Admin Panel</span>
              </div>
              <div
                style={{
                  padding: "6px 14px",
                  background: "rgba(15,255,107,0.15)",
                  border: "1px solid rgba(15,255,107,0.3)",
                  borderRadius: 8,
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#0fff6b",
                }}
              >
                ACTIVE PLAN: PRO
              </div>
            </div>

            {/* Tabs */}
            <div
              style={{
                padding: "16px 28px",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                display: "flex",
                gap: 8,
              }}
            >
              {["Branding", "Resources & Links"].map((tab, i) => (
                <div
                  key={tab}
                  style={{
                    padding: "12px 24px",
                    borderRadius: 10,
                    background: i === 0 ? "white" : "transparent",
                    color: i === 0 ? "#0d1117" : "rgba(255,255,255,0.5)",
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  {tab}
                </div>
              ))}
            </div>

            {/* Form content */}
            <div style={{ padding: 28 }}>
              {/* App name */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 10, letterSpacing: "0.05em" }}>APP NAME</div>
                <div
                  style={{
                    padding: "16px 20px",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: 12,
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "white",
                    fontSize: 16,
                  }}
                >
                  Trade Hub
                </div>
              </div>

              {/* Colors */}
              <div style={{ display: "flex", gap: 20, marginBottom: 24 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 10, letterSpacing: "0.05em" }}>FIRST WORD COLOR</div>
                  <div
                    style={{
                      padding: "14px 20px",
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: 12,
                      border: "1px solid rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <div style={{ width: 28, height: 28, borderRadius: 6, background: "white" }} />
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>#ffffff</span>
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 10, letterSpacing: "0.05em" }}>REST COLOR</div>
                  <div
                    style={{
                      padding: "14px 20px",
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: 12,
                      border: "1px solid rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <div style={{ width: 28, height: 28, borderRadius: 6, background: "#0fff6b" }} />
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>#0fff6b</span>
                  </div>
                </div>
              </div>

              {/* App Icon */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 10, letterSpacing: "0.05em" }}>APP ICON / LOGO</div>
                <div
                  style={{
                    padding: 20,
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: 12,
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                  }}
                >
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: 16,
                      background: "linear-gradient(135deg, #0fff6b, #00d45a)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#06080d" strokeWidth="2">
                      <path d="M3 3v18h18" />
                      <path d="M18 9l-5 5-4-4-3 3" />
                    </svg>
                  </div>
                  <div>
                    <div
                      style={{
                        padding: "10px 20px",
                        background: "rgba(15,255,107,0.1)",
                        border: "1px solid rgba(15,255,107,0.3)",
                        borderRadius: 10,
                        color: "#0fff6b",
                        fontSize: 14,
                        fontWeight: 500,
                        marginBottom: 8,
                      }}
                    >
                      ↑ Choose Image
                    </div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>Recommended: 100x100px PNG or JPG</div>
                  </div>
                </div>
              </div>

              {/* Landing page */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 10, letterSpacing: "0.05em" }}>LANDING PAGE</div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {["Calculator", "Resources", "Calendar", "Heat Map", "Cashback"].map((page, i) => (
                    <div
                      key={page}
                      style={{
                        padding: "12px 20px",
                        borderRadius: 10,
                        background: i === 2 ? "#0fff6b" : "rgba(255,255,255,0.05)",
                        color: i === 2 ? "#06080d" : "rgba(255,255,255,0.6)",
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      {page}
                    </div>
                  ))}
                </div>
              </div>

              {/* Save button */}
              <div
                style={{
                  padding: "16px 32px",
                  background: "white",
                  borderRadius: 12,
                  color: "#0d1117",
                  fontSize: 16,
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                Save Branding
              </div>
            </div>
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

import { AbsoluteFill, Img, staticFile } from "remotion";
import { z } from "zod";

export const featureExtensionSchema = z.object({});

export const FeatureExtension: React.FC<
  z.infer<typeof featureExtensionSchema>
> = () => {
  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #1a0a2e 0%, #16082a 50%, #0d0620 100%)",
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
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 800,
          background: "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      {/* Main content */}
      <div
        style={{
          display: "flex",
          height: "100%",
          padding: "60px 80px",
          gap: 80,
          alignItems: "center",
        }}
      >
        {/* Left side - Extension mockup */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Browser corner with extension */}
          <div
            style={{
              position: "relative",
            }}
          >
            {/* Browser chrome mockup */}
            <div
              style={{
                width: 500,
                background: "#2d2d44",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
              }}
            >
              {/* Browser toolbar */}
              <div
                style={{
                  padding: "12px 16px",
                  background: "#1a1a2e",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div style={{ display: "flex", gap: 6 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
                </div>
                <div
                  style={{
                    flex: 1,
                    height: 28,
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: 6,
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: 12,
                    fontSize: 12,
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  whop.com/cobra-trading
                </div>
                {/* Extension icons area */}
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {/* Kickback extension icon - active */}
                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <Img
                      src={staticFile("kickback-logo.png")}
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 6,
                        boxShadow: "0 0 12px rgba(168,85,247,0.5)",
                      }}
                    />
                    {/* Green active dot */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: -2,
                        right: -2,
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "#22c55e",
                        border: "2px solid #1a1a2e",
                        boxShadow: "0 0 8px #22c55e",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Page content preview */}
              <div style={{ height: 300, background: "#fafafa", padding: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 12,
                      background: "linear-gradient(135deg, #1a1a2e, #2d2d44)",
                    }}
                  />
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#1a1a2e" }}>Cobra's Den</div>
                    <div style={{ fontSize: 12, color: "#6b7280" }}>Premium Trading Signals</div>
                  </div>
                </div>
                <div
                  style={{
                    padding: 16,
                    background: "white",
                    borderRadius: 12,
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <div style={{ fontSize: 24, fontWeight: 700, color: "#1a1a2e", marginBottom: 4 }}>$97/month</div>
                  <div style={{ fontSize: 13, color: "#6b7280" }}>Join 5,000+ members</div>
                </div>
              </div>
            </div>

            {/* Extension popup */}
            <div
              style={{
                position: "absolute",
                top: 50,
                right: -80,
                width: 280,
                background: "white",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                border: "1px solid rgba(168,85,247,0.2)",
              }}
            >
              {/* Popup header */}
              <div
                style={{
                  padding: 16,
                  background: "linear-gradient(135deg, #1a0a2e, #2d1b4e)",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <Img
                  src={staticFile("kickback-logo.png")}
                  style={{ width: 32, height: 32, borderRadius: 8 }}
                />
                <div>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      background: "linear-gradient(135deg, #a855f7, #f97316)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Kickback
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.95)" }}>Whop Cashback</div>
                </div>
              </div>

              {/* Cashback info */}
              <div style={{ padding: 20 }}>
                {/* Active status */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 16,
                  }}
                >
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "#22c55e",
                      boxShadow: "0 0 8px #22c55e",
                    }}
                  />
                  <span style={{ fontSize: 14, color: "#22c55e", fontWeight: 600 }}>
                    Cashback Active
                  </span>
                </div>

                {/* Cashback amount */}
                <div
                  style={{
                    background: "linear-gradient(135deg, #faf5ff, #fff7ed)",
                    borderRadius: 12,
                    padding: 16,
                    marginBottom: 16,
                    border: "1px solid rgba(168,85,247,0.2)",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 8 }}>
                    Cashback available
                  </div>
                  <div
                    style={{
                      fontSize: 48,
                      fontWeight: 800,
                      background: "linear-gradient(135deg, #a855f7, #f97316)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    18%
                  </div>
                </div>

                {/* Wallet balance */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 0",
                    borderTop: "1px solid #e5e7eb",
                  }}
                >
                  <span style={{ fontSize: 13, color: "#6b7280" }}>Wallet Balance</span>
                  <span style={{ fontSize: 15, fontWeight: 700, color: "#1a1a2e" }}>$892.75</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Text */}
        <div
          style={{
            flex: 0.8,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              background: "rgba(34,197,94,0.15)",
              borderRadius: 100,
              border: "1px solid rgba(34,197,94,0.3)",
              marginBottom: 24,
              width: "fit-content",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 8px #22c55e",
              }}
            />
            <span style={{ fontSize: 14, color: "#22c55e", fontWeight: 500 }}>
              Chrome Extension
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 52,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.15,
              margin: 0,
              marginBottom: 20,
              letterSpacing: "-0.03em",
            }}
          >
            Always Know
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #a855f7 0%, #f97316 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Your Cashback
            </span>
          </h1>

          <p
            style={{
              fontSize: 24,
              color: "white",
              lineHeight: 1.5,
              margin: 0,
              marginBottom: 32,
              maxWidth: 420,
              fontWeight: 500,
            }}
          >
            The extension shows you the cashback percentage available on every Whop product.
            Green icon means savings!
          </p>

          {/* Features */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { icon: "🟢", text: "Green icon when cashback is available" },
              { icon: "💰", text: "See cashback % before purchase" },
              { icon: "🔔", text: "Auto-claim notifications" },
            ].map((feature) => (
              <div
                key={feature.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span style={{ fontSize: 20 }}>{feature.icon}</span>
                <span style={{ fontSize: 16, color: "white" }}>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

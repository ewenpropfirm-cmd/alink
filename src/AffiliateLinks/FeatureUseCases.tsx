import { AbsoluteFill } from "remotion";
import { z } from "zod";

export const featureUseCasesSchema = z.object({});

export const FeatureUseCases: React.FC<z.infer<typeof featureUseCasesSchema>> = () => {
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
          bottom: -100,
          right: "20%",
          width: 600,
          height: 400,
          background: "radial-gradient(circle, rgba(245,158,11,0.2) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          padding: "50px 80px",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "10px 24px",
            borderRadius: 100,
            background: "rgba(245,158,11,0.2)",
            border: "1px solid rgba(245,158,11,0.3)",
            color: "#f59e0b",
            fontSize: 14,
            fontWeight: 600,
            marginBottom: 24,
            letterSpacing: "0.05em",
          }}
        >
          USE CASES
        </div>

        <h1
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            margin: 0,
            marginBottom: 16,
            letterSpacing: "-0.03em",
          }}
        >
          Perfect for{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Any Community
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
          See how different communities use Affiliate Links
        </p>

        {/* Use cases */}
        <div
          style={{
            display: "flex",
            gap: 32,
            width: "100%",
            maxWidth: 1200,
            flex: 1,
          }}
        >
          {/* Trading / Finance */}
          <div
            style={{
              flex: 1,
              background: "linear-gradient(180deg, #1a1a2e 0%, #0f0f1a 100%)",
              borderRadius: 24,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ padding: 24, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "linear-gradient(135deg, #10b981, #059669)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                  }}
                >
                  📈
                </div>
                <span style={{ fontSize: 18, fontWeight: 600, color: "white" }}>Trading Community</span>
              </div>
            </div>
            <div style={{ padding: 24, flex: 1 }}>
              {/* Categories */}
              {[
                { name: "BROKERS", items: ["Vantage", "VT Markets"] },
                { name: "FUNDING", items: ["FTMO", "Darwinex Zero"] },
                { name: "TOOLS", items: ["TradingView", "Notion"] },
              ].map((category) => (
                <div key={category.name} style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 10, letterSpacing: "0.05em" }}>
                    {category.name}
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {category.items.map((item) => (
                      <div
                        key={item}
                        style={{
                          padding: "10px 16px",
                          background: "rgba(255,255,255,0.05)",
                          borderRadius: 8,
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "white",
                          fontSize: 13,
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gaming / Arcade */}
          <div
            style={{
              flex: 1,
              background: "linear-gradient(180deg, #1e1b4b 0%, #0f0f1a 100%)",
              borderRadius: 24,
              overflow: "hidden",
              border: "1px solid rgba(139,92,246,0.3)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ padding: 24, borderBottom: "1px solid rgba(139,92,246,0.2)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "linear-gradient(135deg, #8b5cf6, #6366f1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                  }}
                >
                  🎮
                </div>
                <span style={{ fontSize: 18, fontWeight: 600, color: "white" }}>Gaming Community</span>
              </div>
            </div>
            <div style={{ padding: 24, flex: 1 }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: "#a78bfa", marginBottom: 16, fontFamily: "monospace" }}>
                THE VAULT
              </div>
              {/* Game cards */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
                {["25€", "50€", "100€"].map((price, i) => (
                  <div
                    key={price}
                    style={{
                      background: "rgba(139,92,246,0.1)",
                      borderRadius: 12,
                      padding: 12,
                      border: "1px solid rgba(139,92,246,0.2)",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: 24, marginBottom: 8 }}>🎁</div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "white" }}>{price}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>Gift Card</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* E-commerce / Creator */}
          <div
            style={{
              flex: 1,
              background: "linear-gradient(180deg, #fafafa 0%, #f5f5f5 100%)",
              borderRadius: 24,
              overflow: "hidden",
              border: "1px solid rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ padding: 24, borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "linear-gradient(135deg, #ec4899, #db2777)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                  }}
                >
                  ✨
                </div>
                <span style={{ fontSize: 18, fontWeight: 600, color: "#1a1a2e" }}>Creator Community</span>
              </div>
            </div>
            <div style={{ padding: 24, flex: 1 }}>
              <div style={{ fontSize: 11, color: "#ec4899", marginBottom: 8, fontWeight: 600, letterSpacing: "0.05em" }}>
                VERIFIED PARTNERS
              </div>
              <div style={{ fontSize: 20, fontWeight: 700, color: "#1a1a2e", marginBottom: 20 }}>
                Creator Essentials
              </div>
              {/* Partner items */}
              {["Camera Gear", "Editing Software", "Hosting"].map((item, i) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: 12,
                    background: "white",
                    borderRadius: 10,
                    marginBottom: 8,
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      background: `linear-gradient(135deg, ${["#10b981", "#f59e0b", "#6366f1"][i]}, ${["#059669", "#d97706", "#4f46e5"][i]})`,
                    }}
                  />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#1a1a2e" }}>{item}</div>
                    <div style={{ fontSize: 11, color: "#6b7280" }}>View details →</div>
                  </div>
                </div>
              ))}
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

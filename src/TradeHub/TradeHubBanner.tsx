import { AbsoluteFill } from "remotion";
import { z } from "zod";

export const tradeHubBannerSchema = z.object({});

export const TradeHubBanner: React.FC<z.infer<typeof tradeHubBannerSchema>> = () => {
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

      {/* Green glow orbs */}
      <div
        style={{
          position: "absolute",
          top: -150,
          right: 100,
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(15,255,107,0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -200,
          left: -100,
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(15,255,107,0.1) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Main content */}
      <div
        style={{
          display: "flex",
          height: "100%",
          padding: "60px 80px",
          gap: 60,
        }}
      >
        {/* Left side - Text */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 40,
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                background: "linear-gradient(135deg, #0fff6b 0%, #00d45a 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 32px rgba(15,255,107,0.3)",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#06080d" strokeWidth="2.5">
                <path d="M3 3v18h18" />
                <path d="M18 9l-5 5-4-4-3 3" />
              </svg>
            </div>
            <span style={{ fontSize: 28, fontWeight: 700 }}>
              <span style={{ color: "white" }}>Trade</span>
              <span style={{ color: "#0fff6b" }}> Hub</span>
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              margin: 0,
              marginBottom: 24,
              letterSpacing: "-0.03em",
            }}
          >
            Monetize Your
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #0fff6b 0%, #00d45a 50%, #0fff6b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Trading Community
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 22,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.6,
              margin: 0,
              marginBottom: 40,
              maxWidth: 500,
            }}
          >
            Add your affiliate links, promote your trading partners, and earn revenue while providing value to your members.
          </p>

          {/* Feature pills */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {["Your Affiliate Links", "Partner Ads", "Click Tracking", "White Label"].map((feature) => (
              <div
                key={feature}
                style={{
                  padding: "12px 24px",
                  borderRadius: 100,
                  background: "rgba(15,255,107,0.1)",
                  border: "1px solid rgba(15,255,107,0.2)",
                  color: "#0fff6b",
                  fontSize: 15,
                  fontWeight: 500,
                }}
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Right side - App mockup */}
        <div
          style={{
            flex: 1.2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Main app window */}
          <div
            style={{
              width: "100%",
              maxWidth: 680,
              background: "#0d1117",
              borderRadius: 20,
              border: "1px solid rgba(255,255,255,0.1)",
              overflow: "hidden",
              boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
              transform: "perspective(1000px) rotateY(-5deg) rotateX(2deg)",
            }}
          >
            {/* App header */}
            <div
              style={{
                padding: "16px 24px",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                gap: 32,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: "linear-gradient(135deg, #0fff6b, #00d45a)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#06080d" strokeWidth="2.5">
                    <path d="M3 3v18h18" />
                    <path d="M18 9l-5 5-4-4-3 3" />
                  </svg>
                </div>
                <span style={{ fontSize: 16, fontWeight: 600, color: "white" }}>
                  Trade <span style={{ color: "#0fff6b" }}>Hub</span>
                </span>
              </div>
              {["Calendar", "News", "Calculator", "Heat Map", "Partners"].map((tab, i) => (
                <span
                  key={tab}
                  style={{
                    fontSize: 13,
                    color: i === 0 ? "#0fff6b" : "rgba(255,255,255,0.5)",
                    borderBottom: i === 0 ? "2px solid #0fff6b" : "none",
                    paddingBottom: 4,
                  }}
                >
                  {tab}
                </span>
              ))}
            </div>

            {/* Market sessions */}
            <div
              style={{
                padding: "16px 24px",
                background: "rgba(255,255,255,0.02)",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                display: "flex",
                gap: 16,
              }}
            >
              {[
                { name: "Sydney", status: "Open" },
                { name: "Tokyo", status: "Open" },
                { name: "London", status: "Closed" },
                { name: "New York", status: "Closed" },
              ].map((session) => (
                <div
                  key={session.name}
                  style={{
                    flex: 1,
                    padding: "10px 14px",
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: session.status === "Open" ? "#0fff6b" : "#6b7280",
                    }}
                  />
                  <span style={{ fontSize: 12, color: "white" }}>{session.name}</span>
                  <span
                    style={{
                      fontSize: 10,
                      color: session.status === "Open" ? "#0fff6b" : "#ef4444",
                      marginLeft: "auto",
                    }}
                  >
                    {session.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Calendar preview */}
            <div style={{ padding: 24 }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
                <div style={{ width: 4, height: 24, background: "#f59e0b", borderRadius: 2, marginRight: 12 }} />
                <span style={{ fontSize: 18, fontWeight: 600, color: "white" }}>Economic Calendar</span>
              </div>

              {/* Calendar rows */}
              {[
                { time: "10:00", currency: "EU", event: "German ifo Business Climate", impact: "MED", value: "88.3" },
                { time: "14:30", currency: "US", event: "Core Durable Goods Orders", impact: "MED", value: "0.3%" },
                { time: "16:00", currency: "US", event: "Consumer Confidence", impact: "HIGH", value: "108.2" },
              ].map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "12px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    gap: 16,
                  }}
                >
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", width: 50 }}>{row.time}</span>
                  <span style={{ fontSize: 12, color: "white", background: "rgba(255,255,255,0.1)", padding: "4px 8px", borderRadius: 4 }}>
                    {row.currency}
                  </span>
                  <span style={{ fontSize: 13, color: "white", flex: 1 }}>{row.event}</span>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      color: "white",
                      background: row.impact === "HIGH" ? "#ef4444" : "#f59e0b",
                      padding: "4px 10px",
                      borderRadius: 4,
                    }}
                  >
                    {row.impact}
                  </span>
                  <span style={{ fontSize: 13, color: "#0fff6b", width: 60, textAlign: "right" }}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating calculator card */}
          <div
            style={{
              position: "absolute",
              bottom: 20,
              left: -60,
              background: "#0d1117",
              borderRadius: 16,
              padding: 20,
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.1)",
              zIndex: 20,
            }}
          >
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 8 }}>Lot Size</div>
            <div style={{ fontSize: 32, fontWeight: 700, color: "#0fff6b" }}>1.06</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 4 }}>Risk: $106.00</div>
          </div>

          {/* Floating AI badge */}
          <div
            style={{
              position: "absolute",
              top: 40,
              right: -20,
              background: "linear-gradient(135deg, #8b5cf6, #6366f1)",
              borderRadius: 12,
              padding: "12px 20px",
              boxShadow: "0 10px 40px rgba(139,92,246,0.3)",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ fontSize: 16 }}>✨</span>
            <span style={{ fontSize: 14, fontWeight: 600, color: "white" }}>AI Analysis</span>
          </div>
        </div>
      </div>

      {/* Whop badge */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 80,
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "12px 20px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: 100,
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <span style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}>Available on</span>
        <span style={{ fontSize: 16, fontWeight: 700, color: "white" }}>Whop</span>
      </div>
    </AbsoluteFill>
  );
};

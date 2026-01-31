import { AbsoluteFill } from "remotion";
import { z } from "zod";

export const featureNewsSchema = z.object({});

export const FeatureNews: React.FC<z.infer<typeof featureNewsSchema>> = () => {
  const newsItems = [
    {
      time: "2 min ago",
      title: "Fed signals potential rate cuts amid cooling inflation data",
      source: "Reuters",
      category: "USD",
      impact: "HIGH",
    },
    {
      time: "15 min ago",
      title: "EUR/USD breaks above 1.0950 resistance on weak dollar",
      source: "FXStreet",
      category: "EUR",
      impact: "MED",
    },
    {
      time: "32 min ago",
      title: "Gold hits new weekly high as treasury yields decline",
      source: "Bloomberg",
      category: "XAU",
      impact: "MED",
    },
    {
      time: "1h ago",
      title: "Bank of Japan maintains ultra-loose monetary policy",
      source: "Nikkei",
      category: "JPY",
      impact: "HIGH",
    },
    {
      time: "2h ago",
      title: "Oil prices surge on Middle East supply concerns",
      source: "CNBC",
      category: "OIL",
      impact: "MED",
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

      {/* Blue glow for news */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 500,
          background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          padding: "60px 80px",
        }}
      >
        {/* Badge */}
        <div
          style={{
            padding: "10px 24px",
            borderRadius: 100,
            background: "rgba(59,130,246,0.15)",
            border: "1px solid rgba(59,130,246,0.3)",
            color: "#3b82f6",
            fontSize: 14,
            fontWeight: 600,
            marginBottom: 24,
            letterSpacing: "0.05em",
          }}
        >
          MARKET NEWS
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
          Stay Ahead with{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Real-Time News
          </span>
        </h1>

        <p
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.6)",
            textAlign: "center",
            margin: 0,
            marginBottom: 50,
            maxWidth: 600,
          }}
        >
          Breaking market news and analysis to inform your trading decisions
        </p>

        {/* News mockup */}
        <div
          style={{
            width: "100%",
            maxWidth: 1000,
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
              <div style={{ width: 4, height: 28, background: "#3b82f6", borderRadius: 2 }} />
              <span style={{ fontSize: 22, fontWeight: 700, color: "white" }}>Market News</span>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              {["All", "Forex", "Crypto", "Commodities"].map((tab, i) => (
                <div
                  key={tab}
                  style={{
                    padding: "10px 20px",
                    borderRadius: 10,
                    background: i === 0 ? "#3b82f6" : "rgba(255,255,255,0.05)",
                    color: i === 0 ? "white" : "rgba(255,255,255,0.6)",
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  {tab}
                </div>
              ))}
            </div>
          </div>

          {/* Recommended partner banner */}
          <div
            style={{
              margin: "20px 28px",
              padding: "16px 24px",
              background: "linear-gradient(135deg, rgba(15,255,107,0.1), rgba(15,255,107,0.05))",
              borderRadius: 12,
              border: "1px solid rgba(15,255,107,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "#0fff6b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: 18 }}>⚡</span>
              </div>
              <div>
                <div style={{ fontSize: 12, color: "#0fff6b", fontWeight: 600 }}>RECOMMENDED PARTNER</div>
                <div style={{ fontSize: 15, color: "white" }}>VT Markets • Brokers</div>
              </div>
            </div>
            <div style={{ padding: "10px 20px", background: "#0fff6b", borderRadius: 10, color: "#06080d", fontSize: 14, fontWeight: 600 }}>
              Learn More ↗
            </div>
          </div>

          {/* News items */}
          <div style={{ padding: "0 28px 28px" }}>
            {newsItems.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  padding: "20px 0",
                  borderBottom: i < newsItems.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    padding: "6px 12px",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: 6,
                    fontSize: 12,
                    color: "rgba(255,255,255,0.5)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.time}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 16, color: "white", fontWeight: 500, marginBottom: 6, lineHeight: 1.4 }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>{item.source}</div>
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: "white",
                      background: "rgba(255,255,255,0.1)",
                      padding: "5px 12px",
                      borderRadius: 6,
                    }}
                  >
                    {item.category}
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      color: "white",
                      background: item.impact === "HIGH" ? "#ef4444" : "#f59e0b",
                      padding: "5px 10px",
                      borderRadius: 6,
                    }}
                  >
                    {item.impact}
                  </span>
                </div>
              </div>
            ))}
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

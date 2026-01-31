import { AbsoluteFill, Img, staticFile } from "remotion";
import { z } from "zod";

export const featureDealsSchema = z.object({});

export const FeatureDeals: React.FC<
  z.infer<typeof featureDealsSchema>
> = () => {
  const deals = [
    {
      name: "Capital Complex",
      category: "Trading",
      cashback: "6%",
      color: "#8b5cf6",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
    },
    {
      name: "CityVista Properties",
      category: "Real Estate",
      cashback: "6%",
      color: "#1a1a2e",
      gradient: "linear-gradient(135deg, #f5f5f5 0%, #e5e5e5 100%)",
      dark: false,
    },
    {
      name: "Cobra's Den",
      category: "Trading",
      cashback: "18%",
      color: "#ef4444",
      gradient: "linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%)",
    },
    {
      name: "Crypto Signals",
      category: "Trading",
      cashback: "12%",
      color: "#f59e0b",
      gradient: "linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 100%)",
    },
    {
      name: "E-Com Academy",
      category: "E-commerce",
      cashback: "15%",
      color: "#10b981",
      gradient: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    },
    {
      name: "Sports Picks Pro",
      category: "Sports Betting",
      cashback: "20%",
      color: "#3b82f6",
      gradient: "linear-gradient(135deg, #0c1929 0%, #1e3a5f 100%)",
    },
  ];

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
          top: -100,
          right: 200,
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -200,
          left: 100,
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(251,146,60,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Main content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "60px 80px",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              background: "rgba(16,185,129,0.15)",
              borderRadius: 100,
              border: "1px solid rgba(16,185,129,0.3)",
              marginBottom: 20,
            }}
          >
            <span style={{ fontSize: 14 }}>✨</span>
            <span style={{ fontSize: 14, color: "#34d399", fontWeight: 600 }}>NEW</span>
          </div>
          <h1
            style={{
              fontSize: 52,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.2,
              margin: 0,
              marginBottom: 12,
              letterSpacing: "-0.03em",
            }}
          >
            Latest{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a855f7 0%, #f97316 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Deals
            </span>
          </h1>
          <p style={{ fontSize: 20, color: "rgba(255,255,255,0.6)", margin: 0 }}>
            Check out our newest cashback opportunities
          </p>
        </div>

        {/* Deals grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            flex: 1,
          }}
        >
          {deals.map((deal) => (
            <div
              key={deal.name}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Image area */}
              <div
                style={{
                  height: 140,
                  background: deal.gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    color: deal.dark === false ? "#1a1a2e" : "white",
                    textAlign: "center",
                    padding: "0 20px",
                  }}
                >
                  {deal.name}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: 20 }}>
                {/* Category tag */}
                <div
                  style={{
                    display: "inline-block",
                    padding: "4px 10px",
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: 6,
                    fontSize: 12,
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: 12,
                  }}
                >
                  {deal.category}
                </div>

                {/* Name */}
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "white",
                    marginBottom: 12,
                  }}
                >
                  {deal.name}
                </div>

                {/* Cashback badge */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "8px 14px",
                    background: "linear-gradient(135deg, rgba(168,85,247,0.2), rgba(251,146,60,0.2))",
                    borderRadius: 8,
                    border: "1px solid rgba(168,85,247,0.3)",
                    marginBottom: 16,
                  }}
                >
                  <span style={{ fontSize: 16, fontWeight: 700, color: "#c084fc" }}>
                    {deal.cashback} Cashback
                  </span>
                </div>

                {/* CTA */}
                <div
                  style={{
                    padding: "12px 20px",
                    background: "linear-gradient(135deg, #a855f7, #7c3aed)",
                    borderRadius: 10,
                    color: "white",
                    fontSize: 14,
                    fontWeight: 600,
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  Get Deal
                  <span style={{ fontSize: 12 }}>↗</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

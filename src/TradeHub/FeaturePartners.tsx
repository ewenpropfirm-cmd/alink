import { AbsoluteFill } from "remotion";
import { z } from "zod";

export const featurePartnersSchema = z.object({});

export const FeaturePartners: React.FC<z.infer<typeof featurePartnersSchema>> = () => {
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
          top: "40%",
          left: "30%",
          width: 600,
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
          MONETIZATION
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
          Add Your Own{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #0fff6b 0%, #00d45a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Affiliate Partners
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
          Promote your brokers, prop firms & tools — earn commissions from every signup
        </p>

        {/* Partner categories */}
        <div style={{ display: "flex", gap: 32, width: "100%", maxWidth: 1100 }}>
          {/* Brokers */}
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(15,255,107,0.15)",
                  border: "1px solid rgba(15,255,107,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: 20 }}>💼</span>
              </div>
              <div>
                <div style={{ fontSize: 20, fontWeight: 700, color: "white" }}>Brokers</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>2 partners</div>
              </div>
            </div>

            {[
              { name: "Vantage", badge: "RECOMMENDED", badgeColor: "#0fff6b", desc: "Instant capital boost. Get a 50% Deposit Bonus to trade with more margin." },
              { name: "VT Markets", badge: "PREMIUM", badgeColor: "#a78bfa", desc: "Maximize your trading potential with up to 1:500 leverage and lightning-fast ECN execution." },
            ].map((partner) => (
              <div
                key={partner.name}
                style={{
                  background: "#0d1117",
                  borderRadius: 16,
                  padding: 24,
                  marginBottom: 16,
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 20, fontWeight: 600, color: "white" }}>{partner.name}</span>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        color: partner.badgeColor === "#0fff6b" ? "#06080d" : "white",
                        background: partner.badgeColor,
                        padding: "4px 10px",
                        borderRadius: 6,
                      }}
                    >
                      {partner.badge}
                    </span>
                  </div>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "rgba(255,255,255,0.5)" }}>↗</span>
                  </div>
                </div>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", margin: 0, lineHeight: 1.5 }}>{partner.desc}</p>
              </div>
            ))}
          </div>

          {/* Funding */}
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(245,158,11,0.15)",
                  border: "1px solid rgba(245,158,11,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: 20 }}>📈</span>
              </div>
              <div>
                <div style={{ fontSize: 20, fontWeight: 700, color: "white" }}>Funding</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>4 partners</div>
              </div>
            </div>

            {[
              { name: "Darwinex Zero", badge: "RECOMMENDED", badgeColor: "#0fff6b", desc: "The serious alternative to Prop Firms. No crazy rules, no time limits." },
              { name: "FTMO", badge: "POPULAR", badgeColor: "#f59e0b", desc: "The industry leader for a reason. Trade up to $200k with unlimited time limits." },
              { name: "Funding Pips", badge: null, badgeColor: null, desc: "Get funded faster. Enjoy weekly payouts and the lowest evaluation fees." },
            ].map((partner) => (
              <div
                key={partner.name}
                style={{
                  background: "#0d1117",
                  borderRadius: 16,
                  padding: 24,
                  marginBottom: 16,
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 20, fontWeight: 600, color: "white" }}>{partner.name}</span>
                    {partner.badge && (
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 600,
                          color: partner.badgeColor === "#0fff6b" ? "#06080d" : "white",
                          background: partner.badgeColor || undefined,
                          padding: "4px 10px",
                          borderRadius: 6,
                        }}
                      >
                        {partner.badge}
                      </span>
                    )}
                  </div>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "rgba(255,255,255,0.5)" }}>↗</span>
                  </div>
                </div>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", margin: 0, lineHeight: 1.5 }}>{partner.desc}</p>
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

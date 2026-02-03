import { AbsoluteFill, Img, staticFile } from "remotion";
import { z } from "zod";

export const featurePricingTiersSchema = z.object({});

export const FeaturePricingTiers: React.FC<z.infer<typeof featurePricingTiersSchema>> = () => {
  const tiers = [
    { duration: "1 Month", price: "$20", perMonth: "$20/mo" },
    { duration: "3 Months", price: "$40", perMonth: "$13/mo", badge: "SAVE 33%" },
    { duration: "1 Year", price: "$100", perMonth: "$8/mo", badge: "BEST VALUE" },
  ];

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #1a3d2e 0%, #0d2818 50%, #0a1f14 100%)",
        fontFamily: "system-ui, -apple-system, sans-serif",
        overflow: "hidden",
      }}
    >

      {/* Gradient orbs */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 800,
          background: "radial-gradient(circle, rgba(34,197,94,0.2) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      {/* Main content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "50px 60px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "14px 28px",
              background: "rgba(34,197,94,0.15)",
              borderRadius: 100,
              border: "1px solid rgba(34,197,94,0.3)",
              marginBottom: 30,
            }}
          >
            <span style={{ fontSize: 28 }}>💰</span>
            <span style={{ fontSize: 28, color: "#22c55e", fontWeight: 600 }}>PRICING</span>
          </div>

          <h1
            style={{
              fontSize: 110,
              fontWeight: 800,
              color: "white",
              margin: 0,
              letterSpacing: "-0.03em",
            }}
          >
            Choose Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22c55e, #fbbf24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Plan
            </span>
          </h1>
        </div>

        {/* Pricing cards */}
        <div
          style={{
            display: "flex",
            gap: 36,
            alignItems: "stretch",
            justifyContent: "center",
          }}
        >
          {tiers.map((tier, index) => (
            <div
              key={tier.duration}
              style={{
                background: index === 2
                  ? "linear-gradient(135deg, rgba(34,197,94,0.2), rgba(251,191,36,0.1))"
                  : "rgba(255,255,255,0.05)",
                borderRadius: 28,
                padding: "40px 50px",
                border: index === 2
                  ? "2px solid rgba(34,197,94,0.5)"
                  : "1px solid rgba(255,255,255,0.1)",
                textAlign: "center",
                minWidth: 320,
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {/* Badge */}
              {tier.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: -18,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "linear-gradient(135deg, #22c55e, #16a34a)",
                    padding: "10px 24px",
                    borderRadius: 100,
                    fontSize: 20,
                    fontWeight: 700,
                    color: "white",
                  }}
                >
                  {tier.badge}
                </div>
              )}

              <div style={{ fontSize: 36, color: "white", fontWeight: 600, marginBottom: 20, marginTop: tier.badge ? 10 : 0 }}>
                {tier.duration}
              </div>

              <div
                style={{
                  fontSize: 90,
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #22c55e, #fbbf24)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1,
                  marginBottom: 12,
                }}
              >
                {tier.price}
              </div>

              <div style={{ fontSize: 28, color: "rgba(255,255,255,0.6)" }}>
                {tier.perMonth}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginTop: 50,
          }}
        >
          <Img
            src={staticFile("cheddys-logo.png")}
            style={{ width: 60, height: 60, borderRadius: 14 }}
          />
          <span style={{ fontSize: 28, fontWeight: 700, color: "#fbbf24" }}>
            Cheddy's Kitchen
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

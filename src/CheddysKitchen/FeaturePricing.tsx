import { AbsoluteFill, Img, staticFile } from "remotion";
import { z } from "zod";

export const featurePricingSchema = z.object({});

export const FeaturePricing: React.FC<z.infer<typeof featurePricingSchema>> = () => {
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
          left: "30%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(34,197,94,0.25) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Main content */}
      <div
        style={{
          display: "flex",
          height: "100%",
          padding: "50px 60px",
          alignItems: "center",
        }}
      >
        {/* Left side - Text */}
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
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "14px 28px",
              background: "rgba(34,197,94,0.15)",
              borderRadius: 100,
              border: "1px solid rgba(34,197,94,0.3)",
              marginBottom: 36,
              width: "fit-content",
            }}
          >
            <span style={{ fontSize: 24 }}>💰</span>
            <span style={{ fontSize: 24, color: "#22c55e", fontWeight: 600 }}>PRICING</span>
          </div>

          <h1
            style={{
              fontSize: 96,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              margin: 0,
              marginBottom: 32,
              letterSpacing: "-0.03em",
            }}
          >
            Join the
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #22c55e, #fbbf24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Kitchen
            </span>{" "}
            Today
          </h1>

          <p
            style={{
              fontSize: 32,
              color: "white",
              lineHeight: 1.4,
              margin: 0,
              marginBottom: 44,
              maxWidth: 550,
              fontWeight: 500,
            }}
          >
            Get access to daily picks across 4 major sports. No long-term commitment required.
          </p>

          {/* Features list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              "Daily picks for NBA, NFL, NCAAF & CBB",
              "Discord community access",
              "+26% ROI last month",
              "Cancel anytime",
            ].map((feature) => (
              <div
                key={feature}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: "rgba(34,197,94,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#22c55e",
                    fontSize: 20,
                  }}
                >
                  ✓
                </div>
                <span style={{ fontSize: 26, color: "white", fontWeight: 500 }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Pricing card */}
        <div
          style={{
            flex: 0.8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, rgba(34,197,94,0.1), rgba(251,191,36,0.05))",
              borderRadius: 32,
              padding: "50px 60px",
              border: "2px solid rgba(34,197,94,0.3)",
              textAlign: "center",
            }}
          >
            {/* Logo */}
            <Img
              src={staticFile("cheddys-logo.png")}
              style={{
                width: 100,
                height: 100,
                borderRadius: 24,
                margin: "0 auto 24px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              }}
            />

            <div style={{ fontSize: 28, color: "rgba(255,255,255,0.7)", marginBottom: 8 }}>
              Monthly Access
            </div>

            <div
              style={{
                fontSize: 100,
                fontWeight: 800,
                background: "linear-gradient(135deg, #22c55e, #fbbf24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1,
                marginBottom: 8,
              }}
            >
              $20
            </div>

            <div style={{ fontSize: 24, color: "rgba(255,255,255,0.6)", marginBottom: 32 }}>
              per month
            </div>

            {/* CTA Button */}
            <div
              style={{
                background: "linear-gradient(135deg, #22c55e, #16a34a)",
                borderRadius: 16,
                padding: "20px 48px",
                fontSize: 26,
                fontWeight: 700,
                color: "white",
              }}
            >
              Get Started →
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

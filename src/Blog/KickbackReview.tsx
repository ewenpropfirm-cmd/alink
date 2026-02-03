import { AbsoluteFill, Img, staticFile } from "remotion";
import { z } from "zod";

export const kickbackReviewSchema = z.object({});

export const KickbackReview: React.FC<z.infer<typeof kickbackReviewSchema>> = () => {
  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)",
        fontFamily: "system-ui, -apple-system, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Gradient orbs */}
      <div
        style={{
          position: "absolute",
          top: -100,
          right: "20%",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -150,
          left: "10%",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(34,197,94,0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Main content */}
      <div
        style={{
          display: "flex",
          height: "100%",
          padding: "60px 80px",
          alignItems: "center",
          gap: 60,
        }}
      >
        {/* Left side - Text */}
        <div
          style={{
            flex: 1.2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "16px 32px",
              background: "rgba(34,197,94,0.15)",
              borderRadius: 100,
              border: "1px solid rgba(34,197,94,0.3)",
              marginBottom: 40,
              width: "fit-content",
            }}
          >
            <span style={{ fontSize: 28 }}>⭐</span>
            <span style={{ fontSize: 28, color: "#22c55e", fontWeight: 600 }}>REVIEW 2026</span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: 90,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              margin: 0,
              marginBottom: 40,
              letterSpacing: "-0.02em",
            }}
          >
            <span
              style={{
                background: "linear-gradient(135deg, #6366f1, #22c55e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Kickback
            </span>{" "}
            Review
          </h1>

          <p
            style={{
              fontSize: 44,
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.4,
              margin: 0,
              marginBottom: 50,
              fontWeight: 500,
            }}
          >
            The Cashback Extension That Actually Works for Creator Marketplaces
          </p>

          {/* Feature highlights */}
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {["6-50% Cashback", "Auto-Claim", "Instant Payouts", "Chrome Extension"].map((feature) => (
              <div
                key={feature}
                style={{
                  padding: "18px 36px",
                  borderRadius: 100,
                  background: "rgba(99,102,241,0.15)",
                  border: "1px solid rgba(99,102,241,0.3)",
                  color: "white",
                  fontSize: 28,
                  fontWeight: 600,
                }}
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Visual */}
        <div
          style={{
            flex: 0.8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Kickback logo */}
          <Img
            src={staticFile("kickback-logo.png")}
            style={{
              width: 220,
              height: 220,
              borderRadius: 48,
              boxShadow: "0 40px 100px rgba(99,102,241,0.4)",
              marginBottom: 40,
            }}
          />

          {/* Rating card */}
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: 24,
              padding: "36px 60px",
              border: "1px solid rgba(255,255,255,0.1)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 32, color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>
              Our Rating
            </div>
            <div
              style={{
                fontSize: 80,
                fontWeight: 800,
                background: "linear-gradient(135deg, #6366f1, #22c55e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              9.2/10
            </div>
            <div style={{ fontSize: 48, marginTop: 8 }}>⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

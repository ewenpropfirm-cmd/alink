import { AbsoluteFill, Img, staticFile } from "remotion";
import { z } from "zod";

export const featureHowItWorksSchema = z.object({});

export const FeatureHowItWorks: React.FC<
  z.infer<typeof featureHowItWorksSchema>
> = () => {
  const steps = [
    {
      number: 1,
      title: "Install the Extension",
      description: "Download the Kickback Chrome extension and claim your welcome bonus.",
      icon: "⬇️",
      highlight: "$5 Welcome Bonus",
    },
    {
      number: 2,
      title: "Browse & Shop",
      description: "Find deals on Kickback or Whop Discovery. The extension confirms you're on the right page.",
      icon: "✨",
      highlight: "Green icon = Cashback active",
    },
    {
      number: 3,
      title: "Auto-Claim",
      description: "After your purchase, the extension detects it and submits your claim automatically.",
      icon: "🛒",
      highlight: "No copy/paste needed!",
    },
    {
      number: 4,
      title: "Get Paid",
      description: "Once approved, your cashback appears in your wallet. Withdraw anytime.",
      icon: "💰",
      highlight: "6-50% cashback on every purchase!",
    },
  ];

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #faf5ff 0%, #ffffff 50%, #fff7ed 100%)",
        fontFamily: "system-ui, -apple-system, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Decorative gradient orbs */}
      <div
        style={{
          position: "absolute",
          top: -100,
          left: -100,
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -100,
          right: -100,
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(251,146,60,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Main content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "40px 50px",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h1
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#1a1a2e",
              lineHeight: 1.2,
              margin: 0,
              marginBottom: 16,
              letterSpacing: "-0.03em",
            }}
          >
            How to get your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a855f7 0%, #f97316 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Kickback
            </span>{" "}
            in 4 Steps
          </h1>
          <p
            style={{
              fontSize: 24,
              color: "#374151",
              margin: 0,
              fontWeight: 500,
            }}
          >
            Install the extension and start earning cashback automatically
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "flex",
            gap: 32,
            flex: 1,
            alignItems: "center",
          }}
        >
          {steps.map((step) => (
            <div
              key={step.number}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: "rgba(168,85,247,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                  border: "2px solid rgba(168,85,247,0.2)",
                }}
              >
                <span style={{ fontSize: 36 }}>{step.icon}</span>
              </div>

              {/* Number */}
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #a855f7 0%, #c084fc 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: 16,
                }}
              >
                {step.number}
              </div>

              {/* Title */}
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#1a1a2e",
                  marginBottom: 12,
                }}
              >
                {step.title}
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: 15,
                  color: "#6b7280",
                  lineHeight: 1.5,
                  margin: 0,
                  marginBottom: 16,
                  maxWidth: 220,
                }}
              >
                {step.description}
              </p>

              {/* Highlight pill */}
              <div
                style={{
                  padding: "8px 16px",
                  borderRadius: 100,
                  background: step.number === 4
                    ? "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(251,146,60,0.15))"
                    : "rgba(168,85,247,0.1)",
                  border: step.number === 4
                    ? "1px solid rgba(168,85,247,0.3)"
                    : "1px solid rgba(168,85,247,0.2)",
                  fontSize: 13,
                  fontWeight: 600,
                  color: step.number === 4 ? "#9333ea" : "#7c3aed",
                }}
              >
                {step.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Connecting line */}
        <div
          style={{
            position: "absolute",
            top: 280,
            left: 200,
            right: 200,
            height: 2,
            background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.3) 10%, rgba(168,85,247,0.3) 90%, transparent)",
            zIndex: 0,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

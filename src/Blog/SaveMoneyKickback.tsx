import { AbsoluteFill, Img, staticFile } from "remotion";
import { z } from "zod";

export const saveMoneyKickbackSchema = z.object({});

export const SaveMoneyKickback: React.FC<z.infer<typeof saveMoneyKickbackSchema>> = () => {
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
          left: -100,
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(168,85,247,0.35) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -150,
          right: -100,
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(251,146,60,0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "30%",
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Main content */}
      <div
        style={{
          display: "flex",
          height: "100%",
          padding: "40px 50px",
          alignItems: "center",
        }}
      >
        {/* Left side - Text */}
        <div
          style={{
            flex: 1.2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Blog badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 14,
              padding: "16px 32px",
              background: "rgba(16,185,129,0.15)",
              borderRadius: 100,
              border: "1px solid rgba(16,185,129,0.3)",
              marginBottom: 40,
              width: "fit-content",
            }}
          >
            <span style={{ fontSize: 28 }}>💡</span>
            <span style={{ fontSize: 28, color: "#34d399", fontWeight: 600 }}>GUIDE</span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: 92,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.05,
              margin: 0,
              marginBottom: 32,
              letterSpacing: "-0.03em",
            }}
          >
            How to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Save Money
            </span>
            <br />
            on Creator Purchases
          </h1>

          {/* Subtitle with Kickback mention */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              fontSize: 40,
              color: "white",
              fontWeight: 500,
            }}
          >
            <span>with</span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "14px 30px",
                background: "rgba(168,85,247,0.15)",
                borderRadius: 100,
                border: "1px solid rgba(168,85,247,0.3)",
              }}
            >
              <Img
                src={staticFile("kickback-logo.png")}
                style={{ width: 52, height: 52, borderRadius: 12 }}
              />
              <span
                style={{
                  fontSize: 36,
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #a855f7, #f97316)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Kickback
              </span>
            </div>
          </div>
        </div>

        {/* Right side - Visual */}
        <div
          style={{
            flex: 0.8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Big savings circle */}
          <div
            style={{
              width: 440,
              height: 440,
              borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(251,146,60,0.1))",
              border: "3px solid rgba(168,85,247,0.3)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Img
              src={staticFile("kickback-logo.png")}
              style={{
                width: 120,
                height: 120,
                borderRadius: 28,
                marginBottom: 20,
                boxShadow: "0 20px 60px rgba(168,85,247,0.4)",
              }}
            />
            <div
              style={{
                fontSize: 86,
                fontWeight: 800,
                background: "linear-gradient(135deg, #a855f7, #f97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              6-50%
            </div>
            <span style={{ fontSize: 32, color: "white", fontWeight: 600 }}>CASHBACK</span>
          </div>

          {/* Floating elements */}
          <div
            style={{
              position: "absolute",
              top: 20,
              right: 30,
              background: "white",
              borderRadius: 20,
              padding: "20px 32px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
          >
            <div style={{ fontSize: 18, color: "#6b7280", marginBottom: 6 }}>You save</div>
            <div style={{ fontSize: 42, fontWeight: 700, color: "#10b981" }}>$17.46</div>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: 50,
              left: 20,
              fontSize: 48,
              transform: "rotate(-10deg)",
            }}
          >
            💰
          </div>

          <div
            style={{
              position: "absolute",
              top: 100,
              left: 0,
              fontSize: 36,
              transform: "rotate(15deg)",
            }}
          >
            💸
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

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
          padding: "50px 70px",
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
              gap: 12,
              padding: "14px 28px",
              background: "rgba(16,185,129,0.15)",
              borderRadius: 100,
              border: "1px solid rgba(16,185,129,0.3)",
              marginBottom: 36,
              width: "fit-content",
            }}
          >
            <span style={{ fontSize: 22 }}>💡</span>
            <span style={{ fontSize: 22, color: "#34d399", fontWeight: 600 }}>GUIDE</span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.05,
              margin: 0,
              marginBottom: 28,
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
              gap: 14,
              fontSize: 32,
              color: "white",
              fontWeight: 500,
            }}
          >
            <span>with</span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 24px",
                background: "rgba(168,85,247,0.15)",
                borderRadius: 100,
                border: "1px solid rgba(168,85,247,0.3)",
              }}
            >
              <Img
                src={staticFile("kickback-logo.png")}
                style={{ width: 40, height: 40, borderRadius: 10 }}
              />
              <span
                style={{
                  fontSize: 28,
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
              width: 380,
              height: 380,
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
                width: 100,
                height: 100,
                borderRadius: 24,
                marginBottom: 16,
                boxShadow: "0 20px 60px rgba(168,85,247,0.4)",
              }}
            />
            <div
              style={{
                fontSize: 72,
                fontWeight: 800,
                background: "linear-gradient(135deg, #a855f7, #f97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              6-50%
            </div>
            <span style={{ fontSize: 26, color: "white", fontWeight: 600 }}>CASHBACK</span>
          </div>

          {/* Floating elements */}
          <div
            style={{
              position: "absolute",
              top: 30,
              right: 40,
              background: "white",
              borderRadius: 16,
              padding: "16px 24px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
          >
            <div style={{ fontSize: 14, color: "#6b7280", marginBottom: 4 }}>You save</div>
            <div style={{ fontSize: 32, fontWeight: 700, color: "#10b981" }}>$17.46</div>
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

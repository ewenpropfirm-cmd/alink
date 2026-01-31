import { AbsoluteFill, Img, staticFile } from "remotion";
import { z } from "zod";

export const saveMoneySchema = z.object({});

export const SaveMoney: React.FC<z.infer<typeof saveMoneySchema>> = () => {
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
          top: -150,
          left: "50%",
          transform: "translateX(-50%)",
          width: 700,
          height: 700,
          background: "radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -200,
          right: -100,
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)",
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
              marginBottom: 40,
              width: "fit-content",
            }}
          >
            <span style={{ fontSize: 20 }}>💡</span>
            <span style={{ fontSize: 22, color: "#34d399", fontWeight: 600 }}>GUIDE</span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: 82,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.05,
              margin: 0,
              marginBottom: 30,
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

          {/* Subtitle */}
          <p
            style={{
              fontSize: 30,
              color: "white",
              lineHeight: 1.4,
              margin: 0,
              maxWidth: 550,
              fontWeight: 500,
            }}
          >
            Tips and tricks to get the best deals on digital products and courses
          </p>
        </div>

        {/* Right side - Money illustration */}
        <div
          style={{
            flex: 0.8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Big savings badge */}
          <div
            style={{
              width: 350,
              height: 350,
              borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(16,185,129,0.2), rgba(16,185,129,0.05))",
              border: "3px solid rgba(16,185,129,0.3)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: 80 }}>💰</span>
            <div
              style={{
                fontSize: 72,
                fontWeight: 800,
                background: "linear-gradient(135deg, #10b981, #34d399)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginTop: 10,
              }}
            >
              50%
            </div>
            <span style={{ fontSize: 28, color: "white", fontWeight: 600 }}>SAVE UP TO</span>
          </div>

          {/* Floating money icons */}
          <div
            style={{
              position: "absolute",
              top: 40,
              right: 60,
              fontSize: 48,
              transform: "rotate(15deg)",
            }}
          >
            💵
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 80,
              left: 40,
              fontSize: 40,
              transform: "rotate(-10deg)",
            }}
          >
            💸
          </div>
          <div
            style={{
              position: "absolute",
              top: 120,
              left: 20,
              fontSize: 36,
              transform: "rotate(5deg)",
            }}
          >
            🏷️
          </div>
        </div>
      </div>

      {/* Kickback logo bottom right */}
      <div
        style={{
          position: "absolute",
          bottom: 50,
          right: 60,
          display: "flex",
          alignItems: "center",
          gap: 14,
        }}
      >
        <Img
          src={staticFile("kickback-logo.png")}
          style={{ width: 50, height: 50, borderRadius: 12 }}
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
    </AbsoluteFill>
  );
};

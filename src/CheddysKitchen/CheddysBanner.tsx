import { AbsoluteFill, Img, staticFile } from "remotion";
import { z } from "zod";

export const cheddysBannerSchema = z.object({});

export const CheddysBanner: React.FC<z.infer<typeof cheddysBannerSchema>> = () => {
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
          top: -150,
          right: -100,
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(34,197,94,0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -200,
          left: -100,
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(251,191,36,0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Main content */}
      <div
        style={{
          display: "flex",
          height: "100%",
          padding: "40px 50px",
          gap: 40,
          alignItems: "center",
        }}
      >
        {/* Left side - Text */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            paddingTop: 20,
          }}
        >
          {/* Logo and brand */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginBottom: 40,
            }}
          >
            <Img
              src={staticFile("cheddys-logo.png")}
              style={{
                width: 90,
                height: 90,
                borderRadius: 20,
                boxShadow: "0 8px 32px rgba(34,197,94,0.3)",
              }}
            />
            <span
              style={{
                fontSize: 42,
                fontWeight: 700,
                color: "#fbbf24",
              }}
            >
              Cheddy's Kitchen
            </span>
          </div>

          {/* Main headline */}
          <h1
            style={{
              fontSize: 130,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.02,
              margin: 0,
              marginBottom: 36,
              letterSpacing: "-0.03em",
            }}
          >
            Cookin' Up
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #22c55e 0%, #fbbf24 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Winning Picks
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 44,
              color: "white",
              lineHeight: 1.4,
              margin: 0,
              marginBottom: 44,
              maxWidth: 700,
              fontWeight: 500,
            }}
          >
            Daily sports picks for NBA, NFL, NCAAF & College Basketball.
            Join the kitchen and start winning.
          </p>

          {/* Feature pills */}
          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            {["+26% Last Month", "+64 Units CBB", "Daily Picks", "$20/month"].map((feature) => (
              <div
                key={feature}
                style={{
                  padding: "22px 44px",
                  borderRadius: 100,
                  background: "rgba(34,197,94,0.15)",
                  border: "1px solid rgba(34,197,94,0.3)",
                  color: "white",
                  fontSize: 32,
                  fontWeight: 600,
                }}
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Stats card */}
        <div
          style={{
            flex: 0.9,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Main stats card */}
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: 32,
              padding: 40,
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* ROI highlight */}
            <div
              style={{
                textAlign: "center",
                marginBottom: 32,
              }}
            >
              <div style={{ fontSize: 32, color: "rgba(255,255,255,0.8)", marginBottom: 10 }}>
                Last Month ROI
              </div>
              <div
                style={{
                  fontSize: 160,
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #22c55e, #fbbf24)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1,
                }}
              >
                +26%
              </div>
            </div>

            {/* Sports icons */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 20,
                marginBottom: 32,
              }}
            >
              {["🏀", "🏈", "🎓", "🏆"].map((emoji, i) => (
                <div
                  key={i}
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 16,
                    background: "rgba(34,197,94,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 36,
                  }}
                >
                  {emoji}
                </div>
              ))}
            </div>

            {/* Price tag below */}
            <div
              style={{
                background: "linear-gradient(135deg, #22c55e, #16a34a)",
                borderRadius: 16,
                padding: "18px 40px",
                boxShadow: "0 20px 60px rgba(34,197,94,0.4)",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 24, color: "rgba(255,255,255,0.9)" }}>Only</div>
              <div style={{ fontSize: 48, fontWeight: 800, color: "white" }}>$20/mo</div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

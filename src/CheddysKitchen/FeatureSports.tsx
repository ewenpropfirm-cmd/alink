import { AbsoluteFill, Img, staticFile } from "remotion";
import { z } from "zod";

export const featureSportsSchema = z.object({});

export const FeatureSports: React.FC<z.infer<typeof featureSportsSchema>> = () => {
  const sports = [
    { name: "NBA", emoji: "🏀", desc: "Pro Basketball" },
    { name: "NFL", emoji: "🏈", desc: "Pro Football" },
    { name: "NCAAF", emoji: "🏈", desc: "College Football" },
    { name: "CBB", emoji: "🏀", desc: "College Basketball" },
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
          top: -100,
          left: "25%",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(34,197,94,0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -100,
          right: "25%",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(251,191,36,0.2) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Main content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "50px 60px",
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
              background: "rgba(251,191,36,0.15)",
              borderRadius: 100,
              border: "1px solid rgba(251,191,36,0.3)",
              marginBottom: 30,
            }}
          >
            <span style={{ fontSize: 24 }}>🎯</span>
            <span style={{ fontSize: 24, color: "#fbbf24", fontWeight: 600 }}>COVERAGE</span>
          </div>

          <h1
            style={{
              fontSize: 88,
              fontWeight: 800,
              color: "white",
              margin: 0,
              letterSpacing: "-0.03em",
            }}
          >
            4 Sports,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22c55e, #fbbf24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Daily Picks
            </span>
          </h1>
        </div>

        {/* Sports cards */}
        <div
          style={{
            display: "flex",
            gap: 32,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {sports.map((sport) => (
            <div
              key={sport.name}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: 28,
                padding: "44px 52px",
                border: "1px solid rgba(255,255,255,0.1)",
                textAlign: "center",
                flex: 1,
                maxWidth: 280,
              }}
            >
              <div
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 24,
                  background: "linear-gradient(135deg, rgba(34,197,94,0.2), rgba(251,191,36,0.1))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  fontSize: 56,
                }}
              >
                {sport.emoji}
              </div>
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 800,
                  color: "white",
                  marginBottom: 10,
                }}
              >
                {sport.name}
              </div>
              <div style={{ fontSize: 24, color: "rgba(255,255,255,0.7)" }}>
                {sport.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            marginTop: 30,
          }}
        >
          <Img
            src={staticFile("cheddys-logo.png")}
            style={{ width: 56, height: 56, borderRadius: 14 }}
          />
          <span style={{ fontSize: 26, fontWeight: 700, color: "#fbbf24" }}>
            Cheddy's Kitchen
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

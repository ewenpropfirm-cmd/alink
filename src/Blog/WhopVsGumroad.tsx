import { AbsoluteFill } from "remotion";
import { z } from "zod";

export const whopVsGumroadSchema = z.object({});

export const WhopVsGumroad: React.FC<z.infer<typeof whopVsGumroadSchema>> = () => {
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
          top: "50%",
          left: "25%",
          transform: "translate(-50%, -50%)",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "25%",
          transform: "translate(50%, -50%)",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(251,146,60,0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Main content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "60px 80px",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Blog badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "14px 28px",
            background: "rgba(168,85,247,0.15)",
            borderRadius: 100,
            border: "1px solid rgba(168,85,247,0.3)",
            marginBottom: 40,
          }}
        >
          <span style={{ fontSize: 20 }}>⚔️</span>
          <span style={{ fontSize: 22, color: "white", fontWeight: 600 }}>COMPARISON</span>
        </div>

        {/* VS Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 60,
            marginBottom: 50,
          }}
        >
          {/* Whop */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 140,
                height: 140,
                borderRadius: 32,
                background: "linear-gradient(135deg, #ff6b35, #f7931e)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 20px 60px rgba(255,107,53,0.4)",
              }}
            >
              <span style={{ fontSize: 72, fontWeight: 800, color: "white" }}>W</span>
            </div>
            <span style={{ fontSize: 36, fontWeight: 700, color: "white" }}>Whop</span>
          </div>

          {/* VS */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              background: "linear-gradient(135deg, #a855f7 0%, #f97316 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            VS
          </div>

          {/* Gumroad */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 140,
                height: 140,
                borderRadius: 32,
                background: "linear-gradient(135deg, #ff90e8, #ffb8d1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 20px 60px rgba(255,144,232,0.4)",
              }}
            >
              <span style={{ fontSize: 72, fontWeight: 800, color: "white" }}>G</span>
            </div>
            <span style={{ fontSize: 36, fontWeight: 700, color: "white" }}>Gumroad</span>
          </div>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: 80,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            margin: 0,
            marginBottom: 24,
            letterSpacing: "-0.03em",
          }}
        >
          Complete Comparison
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 30,
            color: "white",
            lineHeight: 1.4,
            margin: 0,
            maxWidth: 700,
            fontWeight: 500,
          }}
        >
          Features, pricing, and which platform is right for you
        </p>
      </div>

    </AbsoluteFill>
  );
};

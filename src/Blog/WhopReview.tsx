import { AbsoluteFill, Img, staticFile } from "remotion";
import { z } from "zod";

export const whopReviewSchema = z.object({});

export const WhopReview: React.FC<z.infer<typeof whopReviewSchema>> = () => {
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
          right: -100,
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(168,85,247,0.35) 0%, transparent 70%)",
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
          background: "radial-gradient(circle, rgba(251,146,60,0.25) 0%, transparent 70%)",
          filter: "blur(80px)",
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
            width: "fit-content",
          }}
        >
          <span style={{ fontSize: 20 }}>📝</span>
          <span style={{ fontSize: 22, color: "white", fontWeight: 600 }}>REVIEW</span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: 100,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.05,
            margin: 0,
            marginBottom: 30,
            letterSpacing: "-0.03em",
          }}
        >
          Whop Review 2026:
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #a855f7 0%, #f97316 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Is It Worth It?
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 32,
            color: "white",
            lineHeight: 1.4,
            margin: 0,
            maxWidth: 800,
            fontWeight: 500,
          }}
        >
          The complete breakdown of features, pricing, and our honest verdict
        </p>

        {/* Rating stars */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginTop: 50,
          }}
        >
          <div style={{ display: "flex", gap: 8 }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} style={{ fontSize: 48, color: star <= 4 ? "#f59e0b" : "#4b5563" }}>
                ★
              </span>
            ))}
          </div>
          <span style={{ fontSize: 36, fontWeight: 700, color: "white" }}>4.5/5</span>
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

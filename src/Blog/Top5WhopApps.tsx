import { AbsoluteFill } from "remotion";
import { z } from "zod";

export const top5WhopAppsSchema = z.object({});

export const Top5WhopApps: React.FC<z.infer<typeof top5WhopAppsSchema>> = () => {
  const apps = [
    { rank: "1", name: "Kickback", desc: "Cashback" },
    { rank: "2", name: "Analytics", desc: "Insights" },
    { rank: "3", name: "Automations", desc: "Workflows" },
    { rank: "4", name: "Affiliates", desc: "Growth" },
    { rank: "5", name: "Discord Bot", desc: "Community" },
  ];

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
        fontFamily: "system-ui, -apple-system, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Gradient orbs */}
      <div
        style={{
          position: "absolute",
          top: -100,
          left: "30%",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -100,
          right: "20%",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)",
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
          gap: 80,
        }}
      >
        {/* Left side - Text */}
        <div
          style={{
            flex: 1,
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
              background: "rgba(168,85,247,0.15)",
              borderRadius: 100,
              border: "1px solid rgba(168,85,247,0.3)",
              marginBottom: 40,
              width: "fit-content",
            }}
          >
            <span style={{ fontSize: 28 }}>🚀</span>
            <span style={{ fontSize: 28, color: "#a855f7", fontWeight: 600 }}>2026 GUIDE</span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: 95,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              margin: 0,
              marginBottom: 40,
              letterSpacing: "-0.02em",
            }}
          >
            Top 5 Apps to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a855f7, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Supercharge
            </span>{" "}
            Your Whop
          </h1>

          <p
            style={{
              fontSize: 40,
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.4,
              margin: 0,
              fontWeight: 500,
            }}
          >
            Essential tools to grow and manage your community
          </p>
        </div>

        {/* Right side - App list */}
        <div
          style={{
            flex: 0.8,
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {apps.map((app) => (
            <div
              key={app.rank}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 24,
                background: "rgba(255,255,255,0.05)",
                borderRadius: 20,
                padding: "24px 32px",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 14,
                  background: "linear-gradient(135deg, #a855f7, #3b82f6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 32,
                  fontWeight: 800,
                  color: "white",
                }}
              >
                {app.rank}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 36, fontWeight: 700, color: "white" }}>
                  {app.name}
                </div>
                <div style={{ fontSize: 24, color: "rgba(255,255,255,0.6)" }}>
                  {app.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

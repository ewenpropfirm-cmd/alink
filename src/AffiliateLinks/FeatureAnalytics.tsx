import { AbsoluteFill } from "remotion";
import { z } from "zod";

export const featureAnalyticsSchema = z.object({});

export const FeatureAnalytics: React.FC<z.infer<typeof featureAnalyticsSchema>> = () => {
  const partners = [
    { name: "Premium Tool", clicks: 847, badge: "POPULAR" },
    { name: "Pro Service", clicks: 623, badge: "RECOMMENDED" },
    { name: "Top Resource", clicks: 412, badge: null },
    { name: "Partner Plus", clicks: 289, badge: "NEW" },
    { name: "Essential Kit", clicks: 156, badge: null },
  ];

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)",
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
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 400,
          background: "radial-gradient(circle, rgba(16,185,129,0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          padding: "60px 80px",
        }}
      >
        {/* Badge */}
        <div
          style={{
            padding: "10px 24px",
            borderRadius: 100,
            background: "rgba(16,185,129,0.2)",
            border: "1px solid rgba(16,185,129,0.3)",
            color: "#10b981",
            fontSize: 14,
            fontWeight: 600,
            marginBottom: 24,
            letterSpacing: "0.05em",
          }}
        >
          CLICK TRACKING
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            margin: 0,
            marginBottom: 20,
            letterSpacing: "-0.03em",
          }}
        >
          Track Your{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Link Clicks
          </span>
        </h1>

        <p
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.6)",
            textAlign: "center",
            margin: 0,
            marginBottom: 50,
            maxWidth: 550,
          }}
        >
          See how many clicks each partner link gets over your chosen time period
        </p>

        {/* Click Tracking Panel Mockup */}
        <div
          style={{
            width: "100%",
            maxWidth: 900,
            background: "white",
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
          }}
        >
          {/* Header with period selector */}
          <div
            style={{
              padding: "20px 28px",
              background: "#fafafa",
              borderBottom: "1px solid #e5e7eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "linear-gradient(135deg, #10b981, #059669)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600, color: "#1a1a2e" }}>Click Tracking</div>
                <div style={{ fontSize: 13, color: "#6b7280" }}>Track partner link performance</div>
              </div>
            </div>

            {/* Period selector */}
            <div style={{ display: "flex", gap: 8 }}>
              {["7 Days", "1 Month", "3 Months", "All"].map((period, i) => (
                <div
                  key={period}
                  style={{
                    padding: "10px 18px",
                    borderRadius: 10,
                    background: i === 0 ? "#10b981" : "#f3f4f6",
                    color: i === 0 ? "white" : "#6b7280",
                    fontSize: 14,
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  {period}
                </div>
              ))}
            </div>
          </div>

          {/* Partner list with clicks */}
          <div style={{ padding: 28 }}>
            {partners.map((partner, i) => (
              <div
                key={partner.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "18px 20px",
                  background: i % 2 === 0 ? "#fafafa" : "white",
                  borderRadius: 12,
                  marginBottom: 8,
                }}
              >
                {/* Partner icon */}
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: `linear-gradient(135deg, ${["#8b5cf6", "#10b981", "#f59e0b", "#06b6d4", "#ec4899"][i]}, ${["#6366f1", "#059669", "#d97706", "#0891b2", "#db2777"][i]})`,
                    marginRight: 16,
                  }}
                />

                {/* Partner info */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 16, fontWeight: 600, color: "#1a1a2e" }}>
                      {partner.name}
                    </span>
                    {partner.badge && (
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 600,
                          color: "white",
                          background: partner.badge === "POPULAR" ? "#10b981" : partner.badge === "RECOMMENDED" ? "#8b5cf6" : "#f59e0b",
                          padding: "3px 8px",
                          borderRadius: 4,
                        }}
                      >
                        {partner.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Click count */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 20px",
                    background: "rgba(16,185,129,0.1)",
                    borderRadius: 10,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                    <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  <span style={{ fontSize: 18, fontWeight: 700, color: "#10b981" }}>
                    {partner.clicks.toLocaleString()}
                  </span>
                  <span style={{ fontSize: 13, color: "#6b7280" }}>clicks</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Logo */}
      <div
        style={{
          position: "absolute",
          top: 40,
          left: 60,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        </div>
        <span style={{ fontSize: 22, fontWeight: 600, color: "white" }}>
          Affiliate <span style={{ color: "#a78bfa" }}>Links</span>
        </span>
      </div>
    </AbsoluteFill>
  );
};

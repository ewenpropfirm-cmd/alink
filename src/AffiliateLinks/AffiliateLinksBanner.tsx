import { AbsoluteFill, Img, staticFile } from "remotion";
import { z } from "zod";

export const affiliateLinksBannerSchema = z.object({});

export const AffiliateLinksBanner: React.FC<
  z.infer<typeof affiliateLinksBannerSchema>
> = () => {
  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)",
        fontFamily: "system-ui, -apple-system, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid pattern overlay */}
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

      {/* Gradient orbs for depth */}
      <div
        style={{
          position: "absolute",
          top: -200,
          right: -100,
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -300,
          left: -200,
          width: 700,
          height: 700,
          background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Main content container */}
      <div
        style={{
          display: "flex",
          height: "100%",
          padding: "60px 80px",
          gap: 60,
        }}
      >
        {/* Left side - Text content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          {/* Logo and brand */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 40,
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 16,
                background: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 32px rgba(139,92,246,0.4)",
              }}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </div>
            <span
              style={{
                fontSize: 32,
                fontWeight: 600,
                color: "white",
                letterSpacing: "-0.02em",
              }}
            >
              Affiliate{" "}
              <span style={{ color: "#a78bfa" }}>Links</span>
            </span>
          </div>

          {/* Main headline */}
          <h1
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              margin: 0,
              marginBottom: 24,
              letterSpacing: "-0.03em",
            }}
          >
            Monetize Your
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa 0%, #818cf8 50%, #60a5fa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Community
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 24,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.6,
              margin: 0,
              marginBottom: 40,
              maxWidth: 500,
            }}
          >
            The ultimate affiliate link store for Whop communities.
            Track clicks, showcase partners, and scale your revenue.
          </p>

          {/* Feature pills */}
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            {["White Label", "9 Templates", "Click Tracking", "Your Branding"].map(
              (feature) => (
                <div
                  key={feature}
                  style={{
                    padding: "12px 24px",
                    borderRadius: 100,
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "white",
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                >
                  {feature}
                </div>
              )
            )}
          </div>
        </div>

        {/* Right side - App preview mockup */}
        <div
          style={{
            flex: 1.2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Browser mockup */}
          <div
            style={{
              width: "100%",
              maxWidth: 700,
              background: "rgba(255,255,255,0.05)",
              borderRadius: 24,
              border: "1px solid rgba(255,255,255,0.1)",
              overflow: "hidden",
              boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
              transform: "perspective(1000px) rotateY(-5deg) rotateX(2deg)",
            }}
          >
            {/* Browser header */}
            <div
              style={{
                padding: "16px 20px",
                background: "rgba(255,255,255,0.05)",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />
            </div>

            {/* App content mockup */}
            <div style={{ padding: 24, background: "#fafafa" }}>
              {/* App header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "linear-gradient(135deg, #8b5cf6, #6366f1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </div>
                <span style={{ fontSize: 18, fontWeight: 600, color: "#1a1a2e" }}>
                  Affiliate <span style={{ color: "#8b5cf6" }}>Links</span>
                </span>
                <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
                  <div style={{ padding: "8px 16px", background: "#8b5cf6", borderRadius: 8, color: "white", fontSize: 13, fontWeight: 500 }}>
                    Partners
                  </div>
                  <div style={{ padding: "8px 16px", background: "#f3f4f6", borderRadius: 8, color: "#6b7280", fontSize: 13, fontWeight: 500 }}>
                    Admin
                  </div>
                </div>
              </div>

              {/* Section header */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 11, color: "#8b5cf6", fontWeight: 600, letterSpacing: "0.05em", marginBottom: 4 }}>
                  VERIFIED PARTNERS
                </div>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#1a1a2e" }}>
                  Recommended Tools
                </div>
              </div>

              {/* Partner cards grid */}
              <div style={{ display: "flex", gap: 16 }}>
                {[
                  { name: "Premium Tool", badge: "POPULAR", color: "#10b981" },
                  { name: "Pro Service", badge: "RECOMMENDED", color: "#8b5cf6" },
                  { name: "Top Resource", badge: "NEW", color: "#f59e0b" },
                ].map((partner, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      background: "white",
                      borderRadius: 12,
                      padding: 16,
                      border: "1px solid #e5e7eb",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: 80,
                        background: `linear-gradient(135deg, ${partner.color}20, ${partner.color}10)`,
                        borderRadius: 8,
                        marginBottom: 12,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 10,
                          background: partner.color,
                          opacity: 0.8,
                        }}
                      />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <span style={{ fontSize: 14, fontWeight: 600, color: "#1a1a2e" }}>
                        {partner.name}
                      </span>
                      <span
                        style={{
                          fontSize: 9,
                          fontWeight: 600,
                          color: "white",
                          background: partner.color,
                          padding: "2px 6px",
                          borderRadius: 4,
                        }}
                      >
                        {partner.badge}
                      </span>
                    </div>
                    <div style={{ fontSize: 11, color: "#6b7280" }}>
                      Click to view details →
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating stats card */}
          <div
            style={{
              position: "absolute",
              bottom: 40,
              left: -40,
              background: "white",
              borderRadius: 16,
              padding: 20,
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              zIndex: 20,
            }}
          >
            <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 4 }}>Total Clicks</div>
            <div style={{ fontSize: 32, fontWeight: 700, color: "#1a1a2e" }}>12,847</div>
            <div style={{ fontSize: 13, color: "#10b981", fontWeight: 500 }}>↑ 24% this week</div>
          </div>

          {/* Floating template card */}
          <div
            style={{
              position: "absolute",
              top: 20,
              right: -20,
              background: "linear-gradient(135deg, #1a1a2e, #2d2d44)",
              borderRadius: 12,
              padding: 16,
              boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
              zIndex: 20,
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>9 Templates</div>
            <div style={{ display: "flex", gap: 6 }}>
              {["#8b5cf6", "#10b981", "#f59e0b", "#ef4444"].map((color, i) => (
                <div
                  key={i}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    background: color,
                    opacity: 0.9,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Whop badge */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 80,
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "12px 20px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: 100,
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <span style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}>Available on</span>
        <span style={{ fontSize: 16, fontWeight: 700, color: "white" }}>Whop</span>
      </div>
    </AbsoluteFill>
  );
};

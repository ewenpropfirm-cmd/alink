import { AbsoluteFill, Img, staticFile } from "remotion";
import { z } from "zod";

export const kickbackBannerSchema = z.object({});

export const KickbackBanner: React.FC<
  z.infer<typeof kickbackBannerSchema>
> = () => {
  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #1a0a2e 0%, #16082a 50%, #0d0620 100%)",
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

      {/* Gradient orbs - Kickback purple/orange colors */}
      <div
        style={{
          position: "absolute",
          top: -200,
          right: -100,
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)",
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
          background: "radial-gradient(circle, rgba(251,146,60,0.25) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 800,
          background: "radial-gradient(circle, rgba(147,51,234,0.15) 0%, transparent 60%)",
          filter: "blur(100px)",
        }}
      />

      {/* Main content container */}
      <div
        style={{
          display: "flex",
          height: "100%",
          padding: "40px 50px",
          gap: 40,
        }}
      >
        {/* Left side - Text content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            zIndex: 10,
          }}
        >
          {/* Logo and brand - top left */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 50,
            }}
          >
            <Img
              src={staticFile("kickback-logo.png")}
              style={{
                width: 80,
                height: 80,
                borderRadius: 18,
                boxShadow: "0 8px 32px rgba(168,85,247,0.4)",
              }}
            />
            <span
              style={{
                fontSize: 42,
                fontWeight: 700,
                background: "linear-gradient(135deg, #a855f7 0%, #f97316 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.02em",
              }}
            >
              Kickback
            </span>
          </div>

          {/* Main headline */}
          <h1
            style={{
              fontSize: 96,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.05,
              margin: 0,
              marginBottom: 28,
              letterSpacing: "-0.03em",
            }}
          >
            Get Cashback on
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #a855f7 0%, #c084fc 50%, #f97316 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Every Purchase
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 32,
              color: "white",
              lineHeight: 1.4,
              margin: 0,
              marginBottom: 40,
              maxWidth: 580,
              fontWeight: 500,
            }}
          >
            The Chrome extension that gives you 6-50% cashback on Whop purchases.
            Install once, earn forever.
          </p>

          {/* Feature pills */}
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            {["6-50% Cashback", "Auto-Claim", "$5 Welcome Bonus", "Instant Payouts"].map(
              (feature) => (
                <div
                  key={feature}
                  style={{
                    padding: "16px 32px",
                    borderRadius: 100,
                    background: "rgba(168,85,247,0.15)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(168,85,247,0.3)",
                    color: "white",
                    fontSize: 22,
                    fontWeight: 600,
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
              maxWidth: 900,
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
              <div
                style={{
                  marginLeft: 16,
                  flex: 1,
                  height: 28,
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: 6,
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 12,
                  fontSize: 13,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                whop.com/marketplace
              </div>
            </div>

            {/* App content mockup - Whop style */}
            <div style={{ padding: 24, background: "#fafafa" }}>
              {/* Whop header mockup */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 24,
                  paddingBottom: 16,
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                <div style={{ fontSize: 20, fontWeight: 700, color: "#1a1a2e" }}>
                  Trading Course
                </div>
                <div
                  style={{
                    padding: "8px 16px",
                    background: "linear-gradient(135deg, #a855f7, #f97316)",
                    borderRadius: 8,
                    color: "white",
                    fontSize: 14,
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span style={{ fontSize: 18 }}>💰</span>
                  18% Cashback
                </div>
              </div>

              {/* Product info */}
              <div style={{ display: "flex", gap: 20 }}>
                <div
                  style={{
                    width: 200,
                    height: 150,
                    background: "linear-gradient(135deg, #1a1a2e, #2d2d44)",
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ fontSize: 48 }}>📈</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 28, fontWeight: 700, color: "#1a1a2e", marginBottom: 8 }}>
                    $97/mo
                  </div>
                  <div style={{ fontSize: 14, color: "#6b7280", marginBottom: 16 }}>
                    Premium trading signals and education
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "12px 16px",
                      background: "rgba(168,85,247,0.1)",
                      borderRadius: 8,
                      border: "1px solid rgba(168,85,247,0.2)",
                    }}
                  >
                    <span style={{ fontSize: 16 }}>✨</span>
                    <span style={{ fontSize: 14, color: "#7c3aed", fontWeight: 600 }}>
                      Kickback available on this product!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating cashback card */}
          <div
            style={{
              position: "absolute",
              bottom: 60,
              left: -60,
              background: "white",
              borderRadius: 20,
              padding: 28,
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              zIndex: 20,
            }}
          >
            <div style={{ fontSize: 16, color: "#6b7280", marginBottom: 6 }}>Total Earned</div>
            <div
              style={{
                fontSize: 44,
                fontWeight: 700,
                background: "linear-gradient(135deg, #a855f7, #f97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              $2,388.75
            </div>
            <div style={{ fontSize: 18, color: "#10b981", fontWeight: 500 }}>↑ Lifetime earnings</div>
          </div>

          {/* Floating extension popup */}
          <div
            style={{
              position: "absolute",
              top: 10,
              right: -30,
              background: "linear-gradient(135deg, #1a0a2e, #2d1b4e)",
              borderRadius: 16,
              padding: 24,
              boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
              zIndex: 20,
              border: "1px solid rgba(168,85,247,0.3)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 8px #22c55e",
                }}
              />
              <span style={{ fontSize: 18, color: "white" }}>Cashback Active</span>
            </div>
            <div style={{ fontSize: 36, fontWeight: 700, color: "white" }}>18%</div>
          </div>
        </div>
      </div>

      {/* Whop badge */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 50,
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "20px 36px",
          background: "rgba(168,85,247,0.1)",
          borderRadius: 100,
          border: "1px solid rgba(168,85,247,0.2)",
        }}
      >
        <span style={{ fontSize: 26, color: "white", fontWeight: 500 }}>Chrome Extension for</span>
        <span style={{ fontSize: 30, fontWeight: 700, color: "white" }}>Whop</span>
      </div>
    </AbsoluteFill>
  );
};

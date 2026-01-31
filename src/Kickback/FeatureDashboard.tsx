import { AbsoluteFill, Img, staticFile } from "remotion";
import { z } from "zod";

export const featureDashboardSchema = z.object({});

export const FeatureDashboard: React.FC<
  z.infer<typeof featureDashboardSchema>
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

      {/* Gradient orbs */}
      <div
        style={{
          position: "absolute",
          top: -150,
          left: -100,
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -200,
          right: -150,
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(251,146,60,0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Main content */}
      <div
        style={{
          display: "flex",
          height: "100%",
          padding: "60px 80px",
          gap: 60,
        }}
      >
        {/* Left side - Text */}
        <div
          style={{
            flex: 0.8,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              background: "rgba(168,85,247,0.15)",
              borderRadius: 100,
              border: "1px solid rgba(168,85,247,0.3)",
              marginBottom: 24,
              width: "fit-content",
            }}
          >
            <span style={{ fontSize: 14, color: "#c084fc" }}>📊</span>
            <span style={{ fontSize: 14, color: "#c084fc", fontWeight: 500 }}>Dashboard</span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.15,
              margin: 0,
              marginBottom: 20,
              letterSpacing: "-0.03em",
            }}
          >
            Track Your
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #a855f7 0%, #f97316 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Earnings
            </span>
          </h1>

          <p
            style={{
              fontSize: 24,
              color: "white",
              lineHeight: 1.5,
              margin: 0,
              marginBottom: 32,
              maxWidth: 400,
              fontWeight: 500,
            }}
          >
            See your total earnings, pending balance, and available funds all in one place.
          </p>

          {/* Stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { label: "Total Earned", value: "$2,388.75", icon: "💰" },
              { label: "Pending", value: "$245.50", icon: "⏳" },
              { label: "Available", value: "$892.75", icon: "✅" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "16px 20px",
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <span style={{ fontSize: 24 }}>{stat.icon}</span>
                <div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{stat.label}</div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: "white" }}>{stat.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Dashboard mockup */}
        <div
          style={{
            flex: 1.2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Dashboard mockup */}
          <div
            style={{
              width: "100%",
              maxWidth: 750,
              background: "white",
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
              transform: "perspective(1000px) rotateY(-3deg) rotateX(2deg)",
            }}
          >
            {/* Sidebar */}
            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: 200,
                  background: "#fafafa",
                  padding: 20,
                  borderRight: "1px solid #e5e7eb",
                }}
              >
                {/* Logo */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
                  <Img
                    src={staticFile("kickback-logo.png")}
                    style={{ width: 36, height: 36, borderRadius: 8 }}
                  />
                  <span
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      background: "linear-gradient(135deg, #a855f7, #f97316)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Kickback
                  </span>
                </div>

                {/* Nav */}
                <div style={{ fontSize: 11, color: "#9ca3af", fontWeight: 500, marginBottom: 12 }}>
                  Navigation
                </div>
                {[
                  { label: "Home", icon: "🏠", active: false },
                  { label: "Dashboard", icon: "📊", active: true },
                  { label: "Withdrawals", icon: "💳", active: false },
                  { label: "Affiliate", icon: "👥", active: false },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "10px 12px",
                      borderRadius: 8,
                      marginBottom: 4,
                      background: item.active ? "rgba(168,85,247,0.1)" : "transparent",
                      border: item.active ? "1px solid rgba(168,85,247,0.2)" : "1px solid transparent",
                    }}
                  >
                    <span style={{ fontSize: 14 }}>{item.icon}</span>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: item.active ? 600 : 400,
                        color: item.active ? "#7c3aed" : "#6b7280",
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div style={{ flex: 1, padding: 24 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: "#1a1a2e", marginBottom: 4 }}>
                  My Dashboard
                </div>
                <div style={{ fontSize: 14, color: "#6b7280", marginBottom: 24 }}>
                  Track your earnings and submit new claims
                </div>

                {/* Total earned card */}
                <div
                  style={{
                    background: "linear-gradient(135deg, #faf5ff 0%, #fff7ed 100%)",
                    borderRadius: 16,
                    padding: 24,
                    marginBottom: 20,
                    border: "1px solid rgba(168,85,247,0.2)",
                  }}
                >
                  <div style={{ fontSize: 12, color: "#6b7280", fontWeight: 500, marginBottom: 8 }}>
                    TOTAL EARNED (LIFETIME)
                  </div>
                  <div
                    style={{
                      fontSize: 48,
                      fontWeight: 800,
                      background: "linear-gradient(135deg, #a855f7, #f97316)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      marginBottom: 4,
                    }}
                  >
                    $2,388.75
                  </div>
                  <div style={{ fontSize: 13, color: "#6b7280" }}>
                    All-time earnings including withdrawals
                  </div>
                </div>

                {/* Balance cards */}
                <div style={{ display: "flex", gap: 16 }}>
                  <div
                    style={{
                      flex: 1,
                      background: "#fafafa",
                      borderRadius: 12,
                      padding: 20,
                      border: "1px solid #e5e7eb",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                      <span style={{ fontSize: 11, color: "#6b7280", fontWeight: 500 }}>PENDING BALANCE</span>
                      <span style={{ fontSize: 18 }}>⏳</span>
                    </div>
                    <div style={{ fontSize: 28, fontWeight: 700, color: "#1a1a2e" }}>$245.50</div>
                    <div style={{ fontSize: 11, color: "#9ca3af" }}>Claims less than 45 days old</div>
                  </div>
                  <div
                    style={{
                      flex: 1,
                      background: "#fafafa",
                      borderRadius: 12,
                      padding: 20,
                      border: "1px solid #e5e7eb",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                      <span style={{ fontSize: 11, color: "#6b7280", fontWeight: 500 }}>AVAILABLE BALANCE</span>
                      <span style={{ fontSize: 18 }}>📈</span>
                    </div>
                    <div style={{ fontSize: 28, fontWeight: 700, color: "#10b981" }}>$892.75</div>
                    <div style={{ fontSize: 11, color: "#9ca3af" }}>Ready to withdraw</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

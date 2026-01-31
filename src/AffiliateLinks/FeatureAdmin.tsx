import { AbsoluteFill } from "remotion";
import { z } from "zod";

export const featureAdminSchema = z.object({});

export const FeatureAdmin: React.FC<z.infer<typeof featureAdminSchema>> = () => {
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
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1000,
          height: 600,
          background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
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
            background: "rgba(139,92,246,0.2)",
            border: "1px solid rgba(139,92,246,0.3)",
            color: "#a78bfa",
            fontSize: 14,
            fontWeight: 600,
            marginBottom: 24,
            letterSpacing: "0.05em",
          }}
        >
          WHITE LABEL
        </div>

        <h1
          style={{
            fontSize: 58,
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            margin: 0,
            marginBottom: 20,
            letterSpacing: "-0.03em",
          }}
        >
          Your Brand,{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #a78bfa 0%, #818cf8 50%, #6366f1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Your Store
          </span>
        </h1>

        <p
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.6)",
            textAlign: "center",
            margin: 0,
            marginBottom: 50,
            maxWidth: 600,
          }}
        >
          Customize everything — name, colors, partners — and make it yours
        </p>

        {/* Admin panel mockup */}
        <div
          style={{
            width: "100%",
            maxWidth: 1000,
            background: "white",
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "16px 24px",
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
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: "linear-gradient(135deg, #8b5cf6, #6366f1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </div>
              <span style={{ fontSize: 16, fontWeight: 600, color: "#1a1a2e" }}>YOUR NAME</span>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <div style={{ padding: "8px 16px", background: "#f3f4f6", borderRadius: 8, color: "#6b7280", fontSize: 14 }}>
                Partners
              </div>
              <div style={{ padding: "8px 16px", background: "#8b5cf6", borderRadius: 8, color: "white", fontSize: 14, fontWeight: 500 }}>
                Admin
              </div>
            </div>
          </div>

          {/* Content */}
          <div style={{ padding: 32, display: "flex", gap: 32 }}>
            {/* Form section */}
            <div style={{ flex: 1 }}>
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 8, fontWeight: 500 }}>NAME</div>
                <div
                  style={{
                    padding: "14px 16px",
                    background: "#f9fafb",
                    borderRadius: 10,
                    border: "1px solid #e5e7eb",
                    color: "#1a1a2e",
                    fontSize: 15,
                  }}
                >
                  Example Partner
                </div>
              </div>

              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 8, fontWeight: 500 }}>LINK</div>
                <div
                  style={{
                    padding: "14px 16px",
                    background: "#f9fafb",
                    borderRadius: 10,
                    border: "1px solid #e5e7eb",
                    color: "#8b5cf6",
                    fontSize: 15,
                  }}
                >
                  https://partner.com/ref=yourcode
                </div>
              </div>

              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 8, fontWeight: 500 }}>DESCRIPTION</div>
                <div
                  style={{
                    padding: "14px 16px",
                    background: "#f9fafb",
                    borderRadius: 10,
                    border: "1px solid #e5e7eb",
                    color: "#6b7280",
                    fontSize: 15,
                    minHeight: 60,
                  }}
                >
                  Add your recommended affiliate partners here.
                </div>
              </div>

              {/* Options */}
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {["Image", "RECOMMENDED", "Rating", "Price"].map((opt, i) => (
                  <div
                    key={opt}
                    style={{
                      padding: "10px 18px",
                      borderRadius: 8,
                      background: i < 2 ? "#8b5cf6" : "#f3f4f6",
                      color: i < 2 ? "white" : "#6b7280",
                      fontSize: 13,
                      fontWeight: 500,
                    }}
                  >
                    {opt}
                  </div>
                ))}
              </div>
            </div>

            {/* Preview section */}
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 12, fontWeight: 500 }}>PREVIEW</div>
              <div
                style={{
                  background: "#fafafa",
                  borderRadius: 16,
                  padding: 20,
                  border: "1px solid #e5e7eb",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: 120,
                    background: "linear-gradient(135deg, #8b5cf620, #8b5cf610)",
                    borderRadius: 12,
                    marginBottom: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ width: 60, height: 60, borderRadius: 12, background: "#8b5cf6", opacity: 0.6 }} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: 18, fontWeight: 600, color: "#1a1a2e" }}>Example Partner</span>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "white", background: "#8b5cf6", padding: "4px 10px", borderRadius: 6 }}>
                    RECOMMENDED
                  </span>
                </div>
                <div style={{ fontSize: 14, color: "#6b7280", marginBottom: 12 }}>
                  Add your recommended affiliate partners here.
                </div>
                <div style={{ display: "flex", gap: 4 }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
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

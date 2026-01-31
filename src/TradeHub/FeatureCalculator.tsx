import { AbsoluteFill } from "remotion";
import { z } from "zod";

export const featureCalculatorSchema = z.object({});

export const FeatureCalculator: React.FC<z.infer<typeof featureCalculatorSchema>> = () => {
  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #06080d 0%, #0a0f18 50%, #0d1520 100%)",
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
            linear-gradient(rgba(15,255,107,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,255,107,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: -100,
          right: "30%",
          width: 600,
          height: 400,
          background: "radial-gradient(circle, rgba(15,255,107,0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -100,
          left: "20%",
          width: 500,
          height: 400,
          background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Content */}
      <div
        style={{
          display: "flex",
          height: "100%",
          padding: "60px 80px",
          gap: 60,
        }}
      >
        {/* Left - Text */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              padding: "10px 24px",
              borderRadius: 100,
              background: "rgba(15,255,107,0.15)",
              border: "1px solid rgba(15,255,107,0.3)",
              color: "#0fff6b",
              fontSize: 14,
              fontWeight: 600,
              marginBottom: 24,
              letterSpacing: "0.05em",
              alignSelf: "flex-start",
            }}
          >
            POSITION CALCULATOR
          </div>

          <h1
            style={{
              fontSize: 54,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              margin: 0,
              marginBottom: 24,
              letterSpacing: "-0.03em",
            }}
          >
            Calculate Your
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #0fff6b 0%, #00d45a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Perfect Position
            </span>
          </h1>

          <p
            style={{
              fontSize: 20,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.6,
              margin: 0,
              marginBottom: 36,
              maxWidth: 420,
            }}
          >
            Instant lot size calculation with risk management. Plus AI-powered trade analysis and journal text generation.
          </p>

          {/* Features */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { icon: "📊", text: "Instant lot size & risk calculation" },
              { icon: "✨", text: "AI Analysis for trade ideas" },
              { icon: "📝", text: "Journal text generator for Notion/Excel" },
            ].map((item) => (
              <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "rgba(15,255,107,0.1)",
                    border: "1px solid rgba(15,255,107,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                  }}
                >
                  {item.icon}
                </div>
                <span style={{ fontSize: 17, color: "rgba(255,255,255,0.8)" }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Calculator mockup */}
        <div
          style={{
            flex: 1.1,
            display: "flex",
            flexDirection: "column",
            gap: 20,
            justifyContent: "center",
          }}
        >
          {/* Main calculator */}
          <div
            style={{
              background: "#0d1117",
              borderRadius: 20,
              padding: 28,
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
            }}
          >
            {/* Inputs row */}
            <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
              {[
                { label: "BALANCE", value: "$ 10000" },
                { label: "RISK", value: "1.06 %" },
                { label: "STOP LOSS (PIPS)", value: "10" },
              ].map((input) => (
                <div key={input.label} style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 8, letterSpacing: "0.05em" }}>{input.label}</div>
                  <div
                    style={{
                      padding: "14px 18px",
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: 10,
                      color: "white",
                      fontSize: 16,
                    }}
                  >
                    {input.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Results */}
            <div style={{ display: "flex", gap: 16 }}>
              {[
                { label: "LOT SIZE", value: "1.06", color: "#0fff6b" },
                { label: "RISK AMOUNT", value: "USD 106.00", color: "white" },
                { label: "UNITS", value: "106 000", color: "rgba(255,255,255,0.7)" },
              ].map((result) => (
                <div
                  key={result.label}
                  style={{
                    flex: 1,
                    padding: 20,
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: 12,
                    border: "1px solid rgba(255,255,255,0.05)",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 8, letterSpacing: "0.05em" }}>{result.label}</div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: result.color }}>{result.value}</div>
                </div>
              ))}
            </div>

            {/* Recommended banner */}
            <div
              style={{
                marginTop: 20,
                padding: "14px 20px",
                background: "linear-gradient(135deg, rgba(15,255,107,0.1), rgba(15,255,107,0.05))",
                borderRadius: 12,
                border: "1px solid rgba(15,255,107,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: "#0fff6b" }}>⚡</span>
                <span style={{ fontSize: 14, color: "#0fff6b" }}>Recommended</span>
              </div>
              <div style={{ padding: "8px 16px", background: "#0fff6b", borderRadius: 8, color: "#06080d", fontSize: 13, fontWeight: 600 }}>
                VT Markets ↗
              </div>
            </div>
          </div>

          {/* AI Cards */}
          <div style={{ display: "flex", gap: 16 }}>
            <div
              style={{
                flex: 1,
                background: "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(139,92,246,0.1))",
                borderRadius: 16,
                padding: 24,
                border: "1px solid rgba(139,92,246,0.3)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: 20 }}>✨</span>
                <span style={{ fontSize: 16, fontWeight: 600, color: "white" }}>AI Analysis</span>
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", margin: 0, marginBottom: 16 }}>
                Paste your trade idea for instant analysis
              </p>
              <div style={{ padding: "12px 20px", background: "#8b5cf6", borderRadius: 10, color: "white", fontSize: 14, fontWeight: 500, textAlign: "center" }}>
                Analyze Trade →
              </div>
            </div>

            <div
              style={{
                flex: 1,
                background: "linear-gradient(135deg, rgba(6,182,212,0.2), rgba(6,182,212,0.1))",
                borderRadius: 16,
                padding: 24,
                border: "1px solid rgba(6,182,212,0.3)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: 20 }}>📝</span>
                <span style={{ fontSize: 16, fontWeight: 600, color: "white" }}>Journal Text</span>
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", margin: 0, marginBottom: 16 }}>
                Generate clean summaries for Notion/Excel
              </p>
              <div style={{ padding: "12px 20px", background: "#06b6d4", borderRadius: 10, color: "white", fontSize: 14, fontWeight: 500, textAlign: "center" }}>
                Generate Text 📋
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
            background: "linear-gradient(135deg, #0fff6b 0%, #00d45a 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06080d" strokeWidth="2.5">
            <path d="M3 3v18h18" />
            <path d="M18 9l-5 5-4-4-3 3" />
          </svg>
        </div>
        <span style={{ fontSize: 22, fontWeight: 600 }}>
          <span style={{ color: "white" }}>Trade</span>
          <span style={{ color: "#0fff6b" }}> Hub</span>
        </span>
      </div>
    </AbsoluteFill>
  );
};

import { AbsoluteFill } from "remotion";
import { z } from "zod";

export const featureHeatMapSchema = z.object({});

export const FeatureHeatMap: React.FC<z.infer<typeof featureHeatMapSchema>> = () => {
  const pairs = ["EUR/USD", "GBP/USD", "USD/JPY", "USD/CHF", "AUD/USD", "NZD/USD"];
  const correlations = [
    [1.0, 0.89, -0.42, -0.95, 0.75, 0.82],
    [0.89, 1.0, -0.38, -0.87, 0.72, 0.78],
    [-0.42, -0.38, 1.0, 0.55, -0.28, -0.32],
    [-0.95, -0.87, 0.55, 1.0, -0.72, -0.78],
    [0.75, 0.72, -0.28, -0.72, 1.0, 0.92],
    [0.82, 0.78, -0.32, -0.78, 0.92, 1.0],
  ];

  const getColor = (val: number) => {
    if (val >= 0.7) return "#22c55e";
    if (val >= 0.3) return "#4ade80";
    if (val > -0.3) return "#6b7280";
    if (val > -0.7) return "#f87171";
    return "#ef4444";
  };

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
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 500,
          background: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "20%",
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(239,68,68,0.1) 0%, transparent 60%)",
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
          padding: "50px 80px",
        }}
      >
        {/* Badge */}
        <div
          style={{
            padding: "10px 24px",
            borderRadius: 100,
            background: "rgba(34,197,94,0.15)",
            border: "1px solid rgba(34,197,94,0.3)",
            color: "#22c55e",
            fontSize: 14,
            fontWeight: 600,
            marginBottom: 24,
            letterSpacing: "0.05em",
          }}
        >
          CORRELATION HEAT MAP
        </div>

        <h1
          style={{
            fontSize: 54,
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            margin: 0,
            marginBottom: 16,
            letterSpacing: "-0.03em",
          }}
        >
          See How Assets{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #22c55e 0%, #4ade80 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Move Together
          </span>
        </h1>

        <p
          style={{
            fontSize: 20,
            color: "rgba(255,255,255,0.6)",
            textAlign: "center",
            margin: 0,
            marginBottom: 16,
          }}
        >
          <span style={{ color: "#22c55e" }}>Green</span> = positive correlation •{" "}
          <span style={{ color: "#ef4444" }}>Red</span> = negative correlation
        </p>

        {/* Category tabs */}
        <div style={{ display: "flex", gap: 12, marginBottom: 40 }}>
          {["Forex", "Crypto", "Indices"].map((tab, i) => (
            <div
              key={tab}
              style={{
                padding: "12px 28px",
                borderRadius: 10,
                background: i === 0 ? "#0fff6b" : "rgba(255,255,255,0.05)",
                color: i === 0 ? "#06080d" : "rgba(255,255,255,0.6)",
                fontSize: 15,
                fontWeight: 600,
              }}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Heat Map Grid */}
        <div
          style={{
            background: "#0d1117",
            borderRadius: 20,
            padding: 28,
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
          }}
        >
          <div style={{ display: "flex" }}>
            {/* Empty corner */}
            <div style={{ width: 90 }} />
            {/* Column headers */}
            {pairs.map((pair) => (
              <div
                key={pair}
                style={{
                  width: 80,
                  textAlign: "center",
                  fontSize: 11,
                  color: "rgba(255,255,255,0.5)",
                  fontWeight: 500,
                  paddingBottom: 12,
                }}
              >
                {pair}
              </div>
            ))}
          </div>

          {/* Rows */}
          {pairs.map((rowPair, rowIdx) => (
            <div key={rowPair} style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: 90,
                  fontSize: 12,
                  color: "rgba(255,255,255,0.7)",
                  fontWeight: 500,
                  paddingRight: 16,
                }}
              >
                {rowPair}
              </div>
              {correlations[rowIdx].map((val, colIdx) => (
                <div
                  key={colIdx}
                  style={{
                    width: 80,
                    height: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: 2,
                    borderRadius: 6,
                    background: getColor(val),
                    fontSize: 13,
                    fontWeight: 600,
                    color: Math.abs(val) > 0.3 ? "white" : "rgba(255,255,255,0.7)",
                  }}
                >
                  {val.toFixed(2)}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div
          style={{
            display: "flex",
            gap: 24,
            marginTop: 24,
          }}
        >
          {[
            { color: "#22c55e", label: "Strong positive (0.7 to 1.0)" },
            { color: "#4ade80", label: "Moderate positive (0.3 to 0.7)" },
            { color: "#6b7280", label: "Weak (-0.3 to 0.3)" },
            { color: "#f87171", label: "Moderate negative (-0.7 to -0.3)" },
            { color: "#ef4444", label: "Strong negative (-1.0 to -0.7)" },
          ].map((item) => (
            <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 16, height: 16, borderRadius: 4, background: item.color }} />
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{item.label}</span>
            </div>
          ))}
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

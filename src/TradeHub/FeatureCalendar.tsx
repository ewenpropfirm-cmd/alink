import { AbsoluteFill } from "remotion";
import { z } from "zod";

export const featureCalendarSchema = z.object({});

export const FeatureCalendar: React.FC<z.infer<typeof featureCalendarSchema>> = () => {
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

      {/* Orange glow for calendar */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 500,
          background: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
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
            background: "rgba(245,158,11,0.15)",
            border: "1px solid rgba(245,158,11,0.3)",
            color: "#f59e0b",
            fontSize: 14,
            fontWeight: 600,
            marginBottom: 24,
            letterSpacing: "0.05em",
          }}
        >
          ECONOMIC CALENDAR
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
          Never Miss a{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Market Event
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
          Real-time economic calendar with AI-powered summaries
        </p>

        {/* Calendar mockup */}
        <div
          style={{
            width: "100%",
            maxWidth: 1000,
            background: "#0d1117",
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "20px 28px",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 4, height: 28, background: "#f59e0b", borderRadius: 2 }} />
              <span style={{ fontSize: 22, fontWeight: 700, color: "white" }}>Economic Calendar</span>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              {["Past", "Today", "Upcoming", "This Week"].map((tab, i) => (
                <div
                  key={tab}
                  style={{
                    padding: "10px 20px",
                    borderRadius: 10,
                    background: i === 3 ? "#f59e0b" : "rgba(255,255,255,0.05)",
                    color: i === 3 ? "#0d1117" : "rgba(255,255,255,0.6)",
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  {tab}
                </div>
              ))}
              <div
                style={{
                  padding: "10px 20px",
                  borderRadius: 10,
                  background: "rgba(139,92,246,0.2)",
                  border: "1px solid rgba(139,92,246,0.3)",
                  color: "#a78bfa",
                  fontSize: 14,
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span>✨</span> Summarize with AI
              </div>
            </div>
          </div>

          {/* Table header */}
          <div
            style={{
              display: "flex",
              padding: "14px 28px",
              background: "rgba(255,255,255,0.02)",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              gap: 20,
            }}
          >
            {["Date", "Time Left", "Currency", "Event", "Impact", "Previous", "Forecast", "Actual"].map((col, i) => (
              <span
                key={col}
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.4)",
                  fontWeight: 500,
                  flex: i === 3 ? 2 : 1,
                  textAlign: i > 4 ? "right" : "left",
                }}
              >
                {col}
              </span>
            ))}
          </div>

          {/* Rows */}
          {[
            { date: "Jan 27, 10:00", time: "Released", curr: "EU", flag: "🇪🇺", event: "German ifo Business Climate", impact: "MED", prev: "87.6", fore: "88.3", actual: "88.5" },
            { date: "Jan 27, 14:30", time: "Released", curr: "US", flag: "🇺🇸", event: "Core Durable Goods Orders m/m", impact: "MED", prev: "0.2%", fore: "0.3%", actual: "0.4%" },
            { date: "Jan 27, 16:00", time: "2h 30m", curr: "US", flag: "🇺🇸", event: "CB Consumer Confidence", impact: "HIGH", prev: "104.7", fore: "108.2", actual: "-" },
            { date: "Jan 28, 09:00", time: "19h 30m", curr: "EU", flag: "🇪🇺", event: "ECB President Lagarde Speaks", impact: "HIGH", prev: "-", fore: "-", actual: "-" },
          ].map((row, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                padding: "16px 28px",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                gap: 20,
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", flex: 1 }}>{row.date}</span>
              <span style={{ fontSize: 13, color: row.time === "Released" ? "rgba(255,255,255,0.4)" : "#0fff6b", flex: 1 }}>{row.time}</span>
              <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 16 }}>{row.flag}</span>
                <span style={{ fontSize: 13, color: "white", background: "rgba(255,255,255,0.1)", padding: "4px 10px", borderRadius: 6 }}>{row.curr}</span>
              </div>
              <span style={{ fontSize: 14, color: "white", flex: 2 }}>{row.event}</span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "white",
                  background: row.impact === "HIGH" ? "#ef4444" : "#f59e0b",
                  padding: "5px 12px",
                  borderRadius: 6,
                  flex: 1,
                  textAlign: "center",
                }}
              >
                {row.impact}
              </span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", flex: 1, textAlign: "right" }}>{row.prev}</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", flex: 1, textAlign: "right" }}>{row.fore}</span>
              <span style={{ fontSize: 13, color: row.actual !== "-" ? "#0fff6b" : "rgba(255,255,255,0.3)", flex: 1, textAlign: "right", fontWeight: row.actual !== "-" ? 600 : 400 }}>{row.actual}</span>
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

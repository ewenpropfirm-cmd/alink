import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  spring,
  Sequence,
} from "remotion";
import { z } from "zod";

export const promoVideoSchema = z.object({});

// Slide component with animations
const Slide: React.FC<{
  children: React.ReactNode;
  direction?: "left" | "right" | "up";
}> = ({ children, direction = "right" }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Entrance animation
  const enterProgress = spring({
    frame,
    fps,
    config: { damping: 20, stiffness: 100 },
  });

  // Exit animation (last 10 frames)
  const exitStart = durationInFrames - 15;
  const exitProgress = interpolate(frame, [exitStart, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const translateX =
    direction === "left"
      ? interpolate(enterProgress, [0, 1], [-100, 0]) +
        interpolate(exitProgress, [0, 1], [0, 100])
      : direction === "right"
      ? interpolate(enterProgress, [0, 1], [100, 0]) +
        interpolate(exitProgress, [0, 1], [0, -100])
      : 0;

  const translateY =
    direction === "up"
      ? interpolate(enterProgress, [0, 1], [50, 0]) +
        interpolate(exitProgress, [0, 1], [0, -50])
      : 0;

  const opacity = interpolate(enterProgress, [0, 1], [0, 1]) *
    interpolate(exitProgress, [0, 1], [1, 0]);

  const scale = interpolate(enterProgress, [0, 1], [0.95, 1]) *
    interpolate(exitProgress, [0, 1], [1, 0.95]);

  return (
    <AbsoluteFill
      style={{
        transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
        opacity,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};

// Individual slides content
const IntroSlide: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({ frame, fps, config: { damping: 12 } });
  const textOpacity = spring({ frame: frame - 15, fps, config: { damping: 20 } });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)",
        fontFamily: "system-ui, -apple-system, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Grid */}
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

      {/* Glow */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Logo */}
      <div
        style={{
          transform: `scale(${logoScale})`,
          display: "flex",
          alignItems: "center",
          gap: 24,
          marginBottom: 40,
        }}
      >
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: 24,
            background: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 20px 60px rgba(139,92,246,0.4)",
          }}
        >
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        </div>
        <span style={{ fontSize: 56, fontWeight: 700, color: "white" }}>
          Affiliate <span style={{ color: "#a78bfa" }}>Links</span>
        </span>
      </div>

      {/* Tagline */}
      <p
        style={{
          fontSize: 32,
          color: "rgba(255,255,255,0.7)",
          opacity: textOpacity,
          textAlign: "center",
        }}
      >
        The ultimate affiliate link store for Whop
      </p>
    </AbsoluteFill>
  );
};

const FeatureSlide: React.FC<{
  badge: string;
  badgeColor: string;
  title: string;
  titleGradient: string;
  subtitle: string;
  features: { icon: string; text: string }[];
}> = ({ badge, badgeColor, title, titleGradient, subtitle, features }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)",
        fontFamily: "system-ui, -apple-system, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 80,
      }}
    >
      {/* Grid */}
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

      {/* Glow */}
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 500,
          background: `radial-gradient(circle, ${badgeColor}30 0%, transparent 70%)`,
          filter: "blur(80px)",
        }}
      />

      {/* Badge */}
      <div
        style={{
          padding: "12px 28px",
          borderRadius: 100,
          background: `${badgeColor}20`,
          border: `1px solid ${badgeColor}50`,
          color: badgeColor,
          fontSize: 16,
          fontWeight: 600,
          marginBottom: 30,
          letterSpacing: "0.05em",
          transform: `translateY(${interpolate(spring({ frame, fps, config: { damping: 15 } }), [0, 1], [20, 0])}px)`,
        }}
      >
        {badge}
      </div>

      {/* Title */}
      <h1
        style={{
          fontSize: 72,
          fontWeight: 800,
          color: "white",
          textAlign: "center",
          margin: 0,
          marginBottom: 20,
          letterSpacing: "-0.03em",
          transform: `translateY(${interpolate(spring({ frame: frame - 5, fps, config: { damping: 15 } }), [0, 1], [30, 0])}px)`,
        }}
      >
        <span
          style={{
            background: titleGradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {title}
        </span>
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: 26,
          color: "rgba(255,255,255,0.6)",
          textAlign: "center",
          margin: 0,
          marginBottom: 50,
          maxWidth: 700,
          opacity: interpolate(spring({ frame: frame - 10, fps }), [0, 1], [0, 1]),
        }}
      >
        {subtitle}
      </p>

      {/* Features */}
      <div style={{ display: "flex", gap: 40, flexWrap: "wrap", justifyContent: "center" }}>
        {features.map((feature, i) => (
          <div
            key={feature.text}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              opacity: interpolate(spring({ frame: frame - 15 - i * 5, fps }), [0, 1], [0, 1]),
              transform: `translateY(${interpolate(spring({ frame: frame - 15 - i * 5, fps }), [0, 1], [20, 0])}px)`,
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                background: `${badgeColor}15`,
                border: `1px solid ${badgeColor}30`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
              }}
            >
              {feature.icon}
            </div>
            <span style={{ fontSize: 20, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      {/* Logo watermark */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 60,
          display: "flex",
          alignItems: "center",
          gap: 12,
          opacity: 0.6,
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
        <span style={{ fontSize: 18, fontWeight: 600, color: "white" }}>
          Affiliate <span style={{ color: "#a78bfa" }}>Links</span>
        </span>
      </div>
    </AbsoluteFill>
  );
};

const OutroSlide: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)",
        fontFamily: "system-ui, -apple-system, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Grid */}
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

      {/* Glow */}
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 600,
          background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          marginBottom: 40,
          transform: `scale(${spring({ frame, fps, config: { damping: 12 } })})`,
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 20,
            background: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 15px 50px rgba(139,92,246,0.4)",
          }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        </div>
        <span style={{ fontSize: 48, fontWeight: 700, color: "white" }}>
          Affiliate <span style={{ color: "#a78bfa" }}>Links</span>
        </span>
      </div>

      {/* CTA */}
      <div
        style={{
          padding: "20px 50px",
          background: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
          borderRadius: 16,
          color: "white",
          fontSize: 28,
          fontWeight: 600,
          boxShadow: "0 10px 40px rgba(139,92,246,0.4)",
          opacity: spring({ frame: frame - 15, fps }),
          transform: `translateY(${interpolate(spring({ frame: frame - 15, fps }), [0, 1], [20, 0])}px)`,
        }}
      >
        Available on Whop
      </div>
    </AbsoluteFill>
  );
};

export const AffiliateLinksPromoVideo: React.FC<z.infer<typeof promoVideoSchema>> = () => {
  const SLIDE_DURATION = 90; // 3 seconds at 30fps

  return (
    <AbsoluteFill>
      {/* Intro */}
      <Sequence from={0} durationInFrames={SLIDE_DURATION}>
        <Slide direction="up">
          <IntroSlide />
        </Slide>
      </Sequence>

      {/* White Label */}
      <Sequence from={SLIDE_DURATION * 1} durationInFrames={SLIDE_DURATION}>
        <Slide direction="right">
          <FeatureSlide
            badge="WHITE LABEL"
            badgeColor="#8b5cf6"
            title="Your Brand, Your Store"
            titleGradient="linear-gradient(135deg, #a78bfa 0%, #818cf8 100%)"
            subtitle="Customize everything with your own branding"
            features={[
              { icon: "🎨", text: "Custom Colors" },
              { icon: "🖼️", text: "Your Logo" },
              { icon: "✏️", text: "Your Name" },
            ]}
          />
        </Slide>
      </Sequence>

      {/* Templates */}
      <Sequence from={SLIDE_DURATION * 2} durationInFrames={SLIDE_DURATION}>
        <Slide direction="left">
          <FeatureSlide
            badge="9 TEMPLATES"
            badgeColor="#ec4899"
            title="Beautiful Designs"
            titleGradient="linear-gradient(135deg, #ec4899 0%, #f472b6 100%)"
            subtitle="Pre-designed styles for every niche"
            features={[
              { icon: "🛒", text: "E-commerce" },
              { icon: "⚡", text: "SaaS" },
              { icon: "🎮", text: "Gaming" },
            ]}
          />
        </Slide>
      </Sequence>

      {/* Click Tracking */}
      <Sequence from={SLIDE_DURATION * 3} durationInFrames={SLIDE_DURATION}>
        <Slide direction="right">
          <FeatureSlide
            badge="CLICK TRACKING"
            badgeColor="#10b981"
            title="Track Every Click"
            titleGradient="linear-gradient(135deg, #10b981 0%, #34d399 100%)"
            subtitle="See which partners drive the most engagement"
            features={[
              { icon: "📊", text: "Real-time Stats" },
              { icon: "📅", text: "Time Periods" },
              { icon: "🔗", text: "Per Link" },
            ]}
          />
        </Slide>
      </Sequence>

      {/* Easy Management */}
      <Sequence from={SLIDE_DURATION * 4} durationInFrames={SLIDE_DURATION}>
        <Slide direction="left">
          <FeatureSlide
            badge="EASY SETUP"
            badgeColor="#f59e0b"
            title="Add Partners Fast"
            titleGradient="linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)"
            subtitle="Intuitive admin panel to manage everything"
            features={[
              { icon: "🏷️", text: "Badges" },
              { icon: "⭐", text: "Ratings" },
              { icon: "💰", text: "Prices" },
            ]}
          />
        </Slide>
      </Sequence>

      {/* Outro */}
      <Sequence from={SLIDE_DURATION * 5} durationInFrames={SLIDE_DURATION}>
        <Slide direction="up">
          <OutroSlide />
        </Slide>
      </Sequence>
    </AbsoluteFill>
  );
};

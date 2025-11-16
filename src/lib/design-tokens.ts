export const designTokens = {
  colors: {
    background: {
      primary: "#272830",
      secondary: "#1a1b23",
      elevated: "#2f3038",
    },
    brand: {
      magenta: "#A61470",
      red: "#E2021A",
    },
    surface: {
      card: "rgba(255, 255, 255, 0.05)",
      cardHover: "rgba(255, 255, 255, 0.08)",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255, 255, 255, 0.7)",
      tertiary: "rgba(255, 255, 255, 0.5)",
    },
  },
  gradients: {
    primary: "linear-gradient(90deg, #A61470 0%, #E2021A 100%)",
    primaryVertical: "linear-gradient(180deg, #A61470 0%, #E2021A 100%)",
    heroBackground:
      "radial-gradient(circle at 50% 20%, rgba(166, 20, 112, 0.15) 0%, rgba(39, 40, 48, 1) 60%)",
    subtle: "linear-gradient(135deg, rgba(166, 20, 112, 0.1) 0%, rgba(226, 2, 26, 0.1) 100%)",
  },
  spacing: {
    section: "clamp(3rem, 8vh, 6rem)",
    heroY: "clamp(4rem, 12vh, 8rem)",
    heroX: "clamp(1rem, 5vw, 2rem)",
  },
  borderRadius: {
    card: "1.5rem",
    button: "9999px",
    input: "0.75rem",
  },
  shadows: {
    glowMagenta: "0 0 20px rgba(166, 20, 112, 0.4), 0 0 40px rgba(166, 20, 112, 0.2)",
    glowRed: "0 0 20px rgba(226, 2, 26, 0.4), 0 0 40px rgba(226, 2, 26, 0.2)",
    cardHover: "0 20px 25px rgba(0, 0, 0, 0.6), 0 0 30px rgba(166, 20, 112, 0.2)",
  },
} as const;

type DesignTokens = typeof designTokens;

export type ColorTokens = DesignTokens["colors"];

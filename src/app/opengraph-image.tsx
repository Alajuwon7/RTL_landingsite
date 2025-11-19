import { ImageResponse } from "next/og";

const logoUrl =
  "https://res.cloudinary.com/kingaat7/image/upload/v1731607772/R_Logo.png";

const headlineLines = [
  "Navigate every terminal",
  "with live traveler powered",
  "intelligence.",
];

const brandGradient =
  "linear-gradient(135deg, rgba(166, 20, 112, 0.95) 0%, rgba(226, 2, 26, 0.9) 45%, rgba(39, 40, 48, 1) 100%)";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 32,
          padding: "72px",
          background: brandGradient,
          color: "#ffffff",
          fontFamily: "Inter, 'Helvetica Neue', Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 40,
            maxWidth: 1000,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
            }}
          >
            <img
              src={logoUrl}
              width={120}
              height={120}
              style={{
                borderRadius: 32,
                background: "rgba(255,255,255,0.12)",
                padding: 18,
              }}
            />
            <span
              style={{
                fontSize: 30,
                letterSpacing: 8,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              Rush The Line
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              maxWidth: 900,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 64,
                lineHeight: 1.1,
                fontWeight: 700,
                letterSpacing: -1,
              }}
            >
              {headlineLines.map((line) => (
                <span
                  key={line}
                  style={{ display: "block", hyphens: "none" }}
                >
                  {line}
                </span>
              ))}
            </div>
            <span
              style={{
                fontSize: 40,
                lineHeight: 1.2,
                fontWeight: 500,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              Human + AI movement OS for airports
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}


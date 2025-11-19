import { ImageResponse } from "next/og";

const logoUrl =
  "https://res.cloudinary.com/kingaat7/image/upload/v1731607772/R_Logo.png";

const headlineLines = [
  "Navigate every terminal",
  "with live traveler powered",
  "intelligence.",
];

const heroBackground =
  "linear-gradient(180deg,#000000 0%,rgba(33,34,42,0.95) 45%,rgba(26,27,35,1) 100%)";
const heroAccent =
  "radial-gradient(120% 90% at 50% 120%,rgba(226, 2, 24, 0.74) 0%,rgba(183, 13, 58, 0.69) 45%,rgba(20, 20, 25, 0) 70%)";

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
          backgroundImage: `${heroBackground}, ${heroAccent}`,
          backgroundColor: "#000000",
          backgroundBlendMode: "normal",
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
                padding: 18,
              }}
            />
            <span
              style={{
                fontSize: 30,
                letterSpacing: 8,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.85)",
                fontWeight: 700,
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
                lineHeight: 1.3,
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
            The Future of Airport Navigation is Here
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


import { ImageResponse } from "next/og";

const logoUrl =
  "https://res.cloudinary.com/kingaat7/image/upload/v1731607772/R_Logo.png";

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
          padding: "64px",
          background:
            "radial-gradient(circle at 20% 20%, #7c3aed 0%, #111122 55%)",
          color: "#ffffff",
          fontFamily: "Inter, 'Helvetica Neue', Arial, sans-serif",
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
            width={140}
            height={140}
            style={{
              borderRadius: 32,
              background: "rgba(255,255,255,0.08)",
              padding: 20,
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <span
              style={{
                fontSize: 32,
                letterSpacing: 8,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              Rush The Line
            </span>
            <span
              style={{
                fontSize: 44,
                fontWeight: 600,
              }}
            >
              Human + AI movement OS for airports
            </span>
          </div>
        </div>

        <div
          style={{
            fontSize: 80,
            lineHeight: 1.05,
            fontWeight: 700,
            maxWidth: 960,
          }}
        >
          Navigate every terminal with live, traveler-powered intelligence.
        </div>

        <p
          style={{
            fontSize: 34,
            lineHeight: 1.4,
            margin: 0,
            color: "rgba(255,255,255,0.9)",
            maxWidth: 900,
          }}
        >
          Beat airport delays with proactive guidance, community updates, and
          smart alerts from curb to gate.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 30,
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.25)",
            color: "rgba(255,255,255,0.9)",
          }}
        >
          <span>rushtheline.com</span>
          <span>Move smarter. Every moment.</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}


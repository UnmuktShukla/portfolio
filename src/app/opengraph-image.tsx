import { ImageResponse } from "next/og";

export const alt = "Unmukt Shukla, systems engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#e6e0d4",
          color: "#1b1814",
          padding: "64px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 4,
          }}
        >
          <span>SYSTEMS</span>
          <span>LUCKNOW · 2026</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 108,
            lineHeight: 0.88,
            letterSpacing: -3,
          }}
        >
          <span>Unmukt</span>
          <span style={{ marginLeft: 80 }}>Shukla</span>
        </div>
        <div style={{ display: "flex", fontSize: 30, maxWidth: 820 }}>
          Production AI for clinics. Bounded agents, and the bridges into old
          software.
        </div>
      </div>
    ),
    { ...size },
  );
}

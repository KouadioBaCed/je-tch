import { ImageResponse } from "next/og";

export const alt = "Les Journées de l'Entreposage Tchologo 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #124A30 0%, #1F6F4A 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "60px",
              height: "60px",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.12)",
              border: "2px solid rgba(255,255,255,0.25)",
              fontSize: "26px",
              fontWeight: 800,
              color: "#F4C430",
            }}
          >
            JE
          </div>
          <div style={{ display: "flex", fontSize: "26px", fontWeight: 700, letterSpacing: "2px" }}>
            JE-TCH 2026
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "8px 18px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
              fontSize: "22px",
              marginBottom: "24px",
            }}
          >
            15 → 17 OCT 2026 · Région du Tchologo
          </div>
          <div style={{ display: "flex", fontSize: "76px", fontWeight: 800, lineHeight: 1.05, maxWidth: "950px" }}>
            Les Journées de l'Entreposage{" "}
            <span style={{ color: "#F4C430", marginLeft: "16px" }}>Tchologo</span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: "28px", color: "rgba(255,255,255,0.85)" }}>
            Stocker mieux · Gagner plus · Bâtir l'avenir
          </div>
          <div
            style={{
              display: "flex",
              padding: "14px 28px",
              borderRadius: "12px",
              background: "#F58220",
              fontSize: "26px",
              fontWeight: 700,
            }}
          >
            Entrée gratuite
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

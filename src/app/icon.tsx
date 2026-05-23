import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1F6F4A 0%, #124A30 100%)",
          color: "#F4C430",
          fontSize: "230px",
          fontWeight: 800,
          fontFamily: "sans-serif",
          borderRadius: "96px",
        }}
      >
        JE
      </div>
    ),
    { ...size }
  );
}

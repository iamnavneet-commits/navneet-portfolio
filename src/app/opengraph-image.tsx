import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { hero, person } from "@/content/profile";

export const alt = `${person.name}, Technical Account Manager and Customer Success Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const photo = await readFile(join(process.cwd(), "public", person.heroPhoto));
const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#f5f4f0", color: "#101b2e" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 760,
            padding: "64px 64px 56px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 26, letterSpacing: 4, fontWeight: 600 }}>NAVNEET SHENDE</div>
            <div style={{ fontSize: 26, color: "#485266", marginTop: 6 }}>{person.role}</div>
          </div>
          <div style={{ fontSize: 50, lineHeight: 1.12, letterSpacing: -1 }}>{hero.headline}</div>
          <div style={{ display: "flex", alignItems: "center", fontSize: 22, color: "#485266" }}>
            <div style={{ width: 40, height: 3, background: "#2442e0", marginRight: 16 }} />
            Dubai, UAE · Production troubleshooting · API integrations
          </div>
        </div>
        <img
          src={photoSrc}
          alt=""
          width={440}
          height={630}
          style={{ width: 440, height: 630, objectFit: "cover", objectPosition: "50% 30%" }}
        />
      </div>
    ),
    size,
  );
}

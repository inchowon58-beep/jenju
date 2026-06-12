import fs from "fs";
import path from "path";

const ALT_PREFIXES = [
  "울산강아지파양 보호소 전경",
  "울산강아지파양 위탁견",
  "울산강아지파양 입양 대기견",
  "울산강아지파양 보호 시설",
] as const;

export type ShelterImage = {
  src: string;
  alt: string;
};

function sortKey(filename: string): number {
  const match = filename.match(/shelter-(\d+)/i);
  return match ? parseInt(match[1], 10) : 0;
}

const MAX_IMAGES = 10;

export function getShelterImages(): ShelterImage[] {
  const dir = path.join(process.cwd(), "public", "images");

  return fs
    .readdirSync(dir)
    .filter((file) => /^shelter-\d+\.(jpg|jpeg|png|webp)$/i.test(file))
    .sort((a, b) => sortKey(a) - sortKey(b))
    .slice(0, MAX_IMAGES)
    .map((file, index) => ({
      src: `/images/${file}`,
      alt: `${ALT_PREFIXES[index % ALT_PREFIXES.length]} — 실제 보호소 사진 ${index + 1}`,
    }));
}

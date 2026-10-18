import { cardSize, documentCard } from "@/components/documentCard";
import { documents } from "@/lib/documents";

export const alt = documents["resume"].title;
export const size = cardSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return documentCard(documents["resume"]);
}

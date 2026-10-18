import DocumentPage, { documentMetadata } from "@/components/DocumentPage";
import { documents } from "@/lib/documents";

const doc = documents["resume"];
export const metadata = documentMetadata(doc);

export default function Page() {
  return <DocumentPage doc={doc} />;
}

import { LegacyArticle, legacyMetadata } from "@/components/LegacyArticle";
export const metadata = legacyMetadata("before-streaming");
export default function BeforeStreamingPage() {
  return <LegacyArticle slug="before-streaming" />;
}

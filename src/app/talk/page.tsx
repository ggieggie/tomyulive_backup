import { LegacyArticle, legacyMetadata } from "@/components/LegacyArticle";
export const metadata = legacyMetadata("talk");
export default function TalkPage() {
  return <LegacyArticle slug="talk" />;
}

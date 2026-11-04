import { LegacyArticle, legacyMetadata } from "@/components/LegacyArticle";
export const metadata = legacyMetadata("rental");
export default function RentalPage() {
  return <LegacyArticle slug="rental" />;
}

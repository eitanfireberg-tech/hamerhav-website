import LandingPage from "@/components/LandingPage";
import { PAGE_PSYCHODRAMA } from "@/lib/content";
import { landingMetadata } from "@/lib/landing-metadata";

export const metadata = landingMetadata(PAGE_PSYCHODRAMA);

export default function Page() {
  return <LandingPage page={PAGE_PSYCHODRAMA} />;
}

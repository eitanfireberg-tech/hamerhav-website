import LandingPage from "@/components/LandingPage";
import { PAGE_GRIEF } from "@/lib/content";
import { landingMetadata } from "@/lib/landing-metadata";

export const metadata = landingMetadata(PAGE_GRIEF);

export default function Page() {
  return <LandingPage page={PAGE_GRIEF} />;
}

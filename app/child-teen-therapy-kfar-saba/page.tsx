import LandingPage from "@/components/LandingPage";
import { PAGE_CHILDREN } from "@/lib/content";
import { landingMetadata } from "@/lib/landing-metadata";

export const metadata = landingMetadata(PAGE_CHILDREN);

export default function Page() {
  return <LandingPage page={PAGE_CHILDREN} />;
}

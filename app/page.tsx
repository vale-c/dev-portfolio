import { HeroSection } from "@/components/hero-section";
import { HeaderMenu } from "@/components/ui/header-menu";
export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <HeaderMenu />
        <HeroSection />
      </main>
    </>
  );
}

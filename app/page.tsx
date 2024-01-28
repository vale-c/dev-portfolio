import { HeroSection } from "@/components/hero-section";
import { HeaderMenu } from "@/components/ui/header-menu";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <HeaderMenu />
        <HeroSection />
        <Footer />
      </main>
    </>
  );
}

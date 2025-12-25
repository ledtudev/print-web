import { BlogGrid } from "./_components/BlogGrid";
import { HeroSection } from "./_components/HeroSection";
import { InfoSection } from "./_components/InfoSection";
import { NewsletterBanner } from "./_components/NewsletterBanner";
import { PortfolioGrid } from "./_components/PortfolioGrid";
import { PricingSection } from "./_components/PricingSection";
import { ProductGrid } from "./_components/ProductGrid";
import { PromoBanner } from "./_components/PromoBanner";
import { ServiceGrid } from "./_components/ServiceGrid";
import { SiteFooter } from "./_components/SiteFooter";
import { SiteHeader } from "./_components/SiteHeader";
import { TestimonialSlider } from "./_components/TestimonialSlider";

export default function Demo1Page() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-etchy-black selection:bg-etchy-yellow selection:text-black">
      <SiteHeader />
      <main className="flex flex-col">
        <HeroSection />
        <ServiceGrid />
        <PortfolioGrid />
        <InfoSection />
        <PricingSection />
        <ProductGrid />
        <PromoBanner />
        <TestimonialSlider />
        <BlogGrid />
        <NewsletterBanner />
      </main>
      <SiteFooter />
    </div>
  );
}

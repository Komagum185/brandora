import FAQ from '@/components/common/faq';
import Hero from '@/components/common/Hero';
import OurServices from '@/components/common/our-services';
import LeadingTheIndustrySection from '@/components/ui/leading-industry';

import TrustedBy from '@/components/common/trusted';

export default function Home() {
  return (
    <main className="relative bg-white overflow-hidden
    mx-auto sm:px-10 px-5">
      <div className="max-w-8xl w-full">
       <Hero />
        <TrustedBy />
        <LeadingTheIndustrySection />
        <OurServices />
        <FAQ />
      </div>
    </main>
  );
}

import Hero from '@/components/common/Hero';
import LeadingTheIndustrySection from '@/components/ui/leading-industry';
import TrustedBy from '@/components/common/trusted';
import Testimonial from '@/components/common/testimonial';

export default function Home() {
  return (
    <main className="relative bg-white overflow-hidden
    mx-auto sm:px-10 px-5 lg:-mx-8">
      <div className="max-w-8xl w-full">
       <Hero/>
        <TrustedBy />
        <LeadingTheIndustrySection />
        <Testimonial />
      </div>
    </main>
  );
}

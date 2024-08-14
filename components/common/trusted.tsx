import {companies, testimonials } from "@/data";
import InfiniteMovingCards from "../ui/infinite-moving-cards";
import Image from "next/image";

  export default function TrustedBy() {
    return (
      <section className="text-gray-900 py-16">
            <h2 className="text-center text-4xl font-sans font-extrabold">Trusted by prominent companies</h2>
        <div className="container mx-auto text-center">
          <div className="flex flex-wrap justify-center items-center space-x-8 space-y-4 md:space-y-0">
          <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        />
        </div>
        <div className="flex justify-center gap-8">
            <Image src="/global-paper.png" alt="Global Paper" className="h-10" width={50} height={50} />
            <Image src="/lmz.png" alt="LMZ" className="h-10" width={50} height={50} />
            <Image src="/heey2.png" alt="HEEY 2" className="h-10"  width={50} height={50}/>
            <Image src="/gps.png" alt="GPS " className="h-10" width={50} height={50} />
            <Image src="/dspace.png" alt="D-SPACE" className="h-10" width={50} height={50}/>
            <Image src="/china.png" alt="D-SPACE" className="h-10" width={50} height={50}/>
            <Image src="/jinmao.png" alt="D-SPACE" className="h-10" width={50} height={50} />
            <Image src="/bajsan.png" alt="BaJSan" className="h-10" width={50} height={50}/>
        </div>
          </div> 
      </section>
            );
          }
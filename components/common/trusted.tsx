import {items } from "@/data";
import InfiniteMovingCards from "../ui/infinite-moving-cards";


  export default function TrustedBy() {
    return (
      <section className="py-16">
            <h2 className="text-center text-4xl font-sans font-extrabold">Trusted by prominent companies</h2>
          <div className="flex-wrap justify-center items-center space-x-2 space-y-2 md:space-y-0">
          <InfiniteMovingCards
          items={items}
        direction="left"
        speed="slow"
        />
          </div> 
      </section>
            );
          }
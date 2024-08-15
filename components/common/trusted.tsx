import {items } from "@/data";
import InfiniteMovingCards from "../ui/infinite-moving-cards";
import Image from "next/image";
import CardComponent from "../ui/card-component";

  export default function TrustedBy() {
    return (
      <section className="py-16">
            <h2 className="text-center text-4xl font-sans font-extrabold">Trusted by prominent companies</h2>
        <div className="container mx-auto text-center">
          <div className="flex-wrap justify-center items-center space-x-4 space-y-2 md:space-y-0">
          <InfiniteMovingCards
          items={items}
        direction="right"
        speed="slow"
        />
        </div>
          </div> 
      </section>
            );
          }
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => {
  return (

  <div className="w-full h-full min-h-[6rem] rounded-xl">
    <Image src={"/brandora.png"} alt={"Bandora"}  width={200} height={100} />
  </div>
  );
}
const items = [
  {
    title: "HEEY 2",
    description: "Brand Advancement Plan",
    header: <Skeleton />,
  
  },
  {
    title: "BajSan",
    description: "Natural drinking water",
    header: <Skeleton />,
  },
  {
    title: "Kunming Jinmao",
    description: "Mansion Future Living Blueprint",
    header: <Skeleton />,
  },
];

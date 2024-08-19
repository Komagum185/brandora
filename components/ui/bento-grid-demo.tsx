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
    title: "Brand Strategy",
    description: "With help you precisely position your brand, design its image, and develop brand communication.",
    header: <Skeleton />,
  
  },
  {
    title: "Marketing Plan",
    description: "We create marketing strategies and campaigns to boost your brand awareness and sales.",
    header: <Skeleton />,
  },
  {
    title: "Advertising Design",
    description: "We offer creative ad design and placement strategies to increase your brand’s exposure and appeal.",
    header: <Skeleton />,
  },
];

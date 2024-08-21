import { FocusCards } from "@/components/ui/focus-cards";

export function ServiceCard() {
  const cards = [
    {
      title: "Brand Strategy",
      desc: "We tailor brand strategies for clients through in-depth market analysis and strategic planning to enhance brand competitiveness and influence.",
    },
    {
      title: "Marketing Planing",
      desc: "We design and execute innovative marketing strategies to help clients stand out in competitive markets, achieving business growth and expanding market share.",
    },
    {
      title: "Advertising Design and Placement",
      desc: "With a skilled design team, we provide creatively crafted advertising designs and deploy multi-channel placement strategies to effectively promote client brands and attract target consumers.",
    },
  ];

  return <FocusCards cards={cards} />;
}

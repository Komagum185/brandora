
import React from "react";
import Team from "@/components/common/Team";
import LeadingTheIndustrySection from "@/components/ui/leading-industry";
import Features from "@/components/ui/why-us";
import ResponsiveCard from "@/components/ui/responsive-card";


export default function About() {
  return (
    <div>
      <ResponsiveCard />
      <LeadingTheIndustrySection />
      <Team />
      <Features />
    </div>
    
  );
}

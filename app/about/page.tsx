
import React from "react";
import Team from "@/components/common/Team";
import LeadingTheIndustrySection from "@/components/ui/leading-industry";
import Features from "@/components/ui/why-us";


export default function About() {
  return (
    <div>
    <div className="mx-auto max-w-4xl lg:text-center">
    <h2 className="text-base font-semibold leading-7 text-indigo-600">Brandora Design & Media Services Co Ltd</h2>
    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-xl">Company Overview</p>
    <p className="mt-6 text-lg leading-8 text-gray-600">
    Brandora Design & Media Services Co Ltd is a company focused on brand building and media services, 
    dedicated to helping clients enhance their brand value and achieve rapid market penetration through professional brand development capabilities.
    </p>
  </div>
    <div className="mx-auto max-w-4xl lg:text- mt-6 lg:text-center">
    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-xl">Vision and Mission</p>
    <p className="mt-6 text-lg leading-8 text-gray-600">
    Brandora Design & Media Services Co Ltd aims to be the leading integrated brand consulting
     and advertising design firm in East Africa. 
     Our mission is to help clients achieve long-term success and
      sustainable growth through outstanding service and innovative design.
    </p>
  </div>
      <LeadingTheIndustrySection />
      <Team />
      <Features />
    </div>
    
  );
}

import React from 'react';

const LeadingTheIndustrySection = () => {
  return (
    <section className="text-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-10 flex flex-col justify-center items-center text-wrap">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-600 font-sans uppercase">Leading the Industry</h2>
          <p className="mt-4 text-gray-600 text-pretty">
            Our company is dedicated to providing exceptional brand strategy, marketing plans,
            and advertising design services. With years of professional experience, we have
            successfully delivered customized solutions to numerous clients, helping them achieve
            remarkable results in the market.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-12 font-sans">
          <div>
            <h3 className="text-2xl font-extrabold text-gray-900">200+</h3>
            <p className="mt-2 text-gray-500 font-thin">Loyal Clients</p>
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-gray-900">500+</h3>
            <p className="mt-2 text-gray-500 font-thin">Completed Projects</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">100+</h3>
            <p className="mt-2 text-gray-500 font-thin">Partner Organizations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadingTheIndustrySection;
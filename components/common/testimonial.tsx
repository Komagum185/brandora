'use client'

import Image from "next/image";
import { BentoGridDemo } from "../ui/bento-grid-demo";
import { IconArrowDown, IconArrowRight, IconArrowUp } from "@tabler/icons-react";
import { faqData } from "@/data";
import { useState } from "react";

export default function Testimonial() {
  function handleClick(){
    console.log("Function not implemented.");
  }
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

    return (
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <div className='mt-8'>
        <div>
            <h2 className='text-center text-2xl font-extrabold font-sans'>Discover our services</h2>
            <div onClick={handleClick} className='flex justify-center items-center cursor-pointer'>
            <p className=' text-center text-xs text-blue-600'>Learn more about our works</p>
            <IconArrowRight color={'blue'} size={12}/>
            </div>
            <BentoGridDemo />
        </div>
        <div className='px-8 gap-10 mt-8'>
            <h2 className='text-center text-2xl font-extrabold font-sans'>Our success stories</h2>
            <div onClick={handleClick} className='px-8 flex justify-center items-center cursor-pointer'>
            <p className=' text-center text-xs text-blue-600'>Learn more about our works</p>
            <IconArrowRight color={'blue'} size={12}/>
            </div>
            <BentoGridDemo/>
        </div>
    </div>
          <figure className="mt-10">
              <h2 className="text-center text-2xl font-bold leading-8 ">Testimonials</h2>
            <blockquote className="text-center text-xl text-gray-600 sm:text-xl sm:leading-9">
              <p>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                molestiae. Numquam corrupti in laborum sed rerum et corporis.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <Image
                alt=""
                src={"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                className="mx-auto h-10 w-10 rounded-full"
                width={100}
                height={100}
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Han Harrison</div>
                <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <div className="text-gray-600">CEO of Yidao</div>
              </div>
            </figcaption>
          </figure>
          <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <button
              className="w-full text-left flex justify-between items-center py-2 text-xl font-medium text-gray-800 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span className="text-gray-500">{activeIndex === index ? <IconArrowDown color={'black'} /> : <IconArrowUp color={'black'} />}</span>
            </button>
            {activeIndex === index && (
              <div className="mt-2 text-gray-700">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
        </div>
      </section>
    )
  }
  
'use client'


import { faqData } from '@/data';
import { IconArrowDown, IconArrowUp } from '@tabler/icons-react';
import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
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
  );
}

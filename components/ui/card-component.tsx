import React from 'react';
import Image from 'next/image';

interface CardProps {
  imageUrl: string;
  title: string;
  items: string[];
}

const CardComponent: React.FC<CardProps> = ({ imageUrl, title, items }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={200}
        className="object-cover w-full h-48"
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-white mt-2">{title}</h2>
        <ul className="mt-4 list-disc list-inside text-gray-400">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardComponent;

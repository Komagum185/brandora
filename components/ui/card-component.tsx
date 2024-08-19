import React from "react";
import Image from "next/image";

interface CardProps {
  imageUrl: string;
  title: string;
  items: string[];
}

const CardComponent: React.FC<CardProps> = ({ imageUrl, title, items }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 ">
      <Image
        src={imageUrl}
        alt={title}
        width={300}
        height={100}
        className="object-cover w-full h-48"
      />
      <div className="h-48">
        <h2 className="font-semibold text-white mt-2 text-md text-center leading-8">
          {title}
        </h2>
        <ul className="mt-4 text-gray-400 text-xs list-none py-4 px-4">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardComponent;

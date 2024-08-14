import React from 'react';
import Image from 'next/image';
import { teamMembers } from '@/data';

const Team: React.FC = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-900 text-white p-4">
        <h1 className="text-4xl font-extrabold text-center mb-8 font-sans">Our Team</h1>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((data) => (
            <div key={data.name} className=" p-4 text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src={data.imageUrl}
                  alt={data.name}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <h2 className="text-2xl font-semibold mb-2 font-sans">{data.name}</h2>
              <h3 className="text-xl mb-4 font-sans font-medium">{data.title}</h3>
              <p>{data.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

import React from 'react';
import Navbar from './ui/Navbar';
import Image from 'next/image';

interface Employee {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
}

const employees: Employee[] = [
  {
    name: 'John Doe',
    title: 'CEO & Founder',
    bio: 'John has over 20 years of experience in the tech industry, leading teams to success.',
    imageUrl: '/brandora.jpg',
  },
  {
    name: 'Jane Smith',
    title: 'Chief Technology Officer',
    bio: 'Jane is an expert in cloud computing and AI, driving innovation at our company.',
    imageUrl: '/images/jane.jpg',
  },
  {
    name: 'Mike Johnson',
    title: 'Lead Developer',
    bio: 'Mike specializes in web development, ensuring our products are cutting-edge.',
    imageUrl: '/images/mike.jpg',
  },
  {
    name: 'Sara Williams',
    title: 'Project Manager',
    bio: 'Sara manages projects with precision and ensures timely delivery of all milestones.',
    imageUrl: '/images/sara.jpg',
  },
  {
    name: 'Emily Davis',
    title: 'UX/UI Designer',
    bio: 'Emily designs intuitive interfaces that enhance user experience across our platforms.',
    imageUrl: '/images/emily.jpg',
  },
  {
    name: 'Chris Lee',
    title: 'Marketing Director',
    bio: 'Chris creates strategies that position our brand at the forefront of the industry.',
    imageUrl: '/images/chris.jpg',
  },
];

const Team: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-slate-800 text-white p-4">
        <h1 className="text-4xl font-extrabold text-center mb-8 font-sans">Our Team</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {employees.map((employee) => (
            <div key={employee.name} className="bg-slate-900 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src={employee.imageUrl}
                  alt={employee.name}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <h2 className="text-2xl font-semibold mb-2 font-sans">{employee.name}</h2>
              <h3 className="text-xl mb-4">{employee.title}</h3>
              <p>{employee.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

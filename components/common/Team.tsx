import React from 'react';
import Image from 'next/image';
import { teamMembers } from '@/data';
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const OurTeam = () => {
  return (
    <section className="py-10 mt-10 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6">Our team</h2>
        <p className='text-gray-600 mb-8 text-pretty'>
        Brandora’s team is composed of passionate and skilled professionals with diverse expertise in branding, marketing, and design. Our team includes:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center ">
              <Image
                className="w-20 h-20 rounded-full mx-auto mb-4"
                src={member.imageUrl}
                alt={member.name}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.title}</p>
              <div className="mt-4 flex justify-center space-x-4 text-gray-500">
                {member.social.facebook && (
                  <a href={member.social.facebook} aria-label="Facebook">
                    <FaFacebook className="w-4 h-4 hover:text-blue-700" />
                  </a>
                )}
                {member.social.twitter && (
                  <a href={member.social.twitter} aria-label="Twitter">
                    <FaTwitter className="w-4 h-4 hover:text-blue-700" />
                  </a>
                )}
                {member.social.linkedin && (
                  <a href={member.social.linkedin} aria-label="LinkedIn">
                    <FaLinkedin className="w-4 h-4 hover:text-blue-700" />
                  </a>
                )}
                {member.social.instagram && (
                  <a href={member.social.instagram} aria-label="Instagram">
                    <FaInstagram className="w-4 h-4 hover:text-red-500" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;


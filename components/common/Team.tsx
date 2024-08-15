import React from 'react';
import Image from 'next/image';
import { teamMembers } from '@/data';
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const OurTeam = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Our Team</h2>
        <div className="flex justify-center space-x-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <Image
                className="w-24 h-24 rounded-full mx-auto mb-4"
                src={member.imageUrl}
                alt={member.name}
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.title}</p>
              <div className="mt-4 flex justify-center space-x-4 text-gray-500">
                {member.social.facebook && (
                  <a href={member.social.facebook} aria-label="Facebook">
                    <FaFacebook className="w-5 h-5 hover:text-blue-600" />
                  </a>
                )}
                {member.social.twitter && (
                  <a href={member.social.twitter} aria-label="Twitter">
                    <FaTwitter className="w-5 h-5 hover:text-blue-400" />
                  </a>
                )}
                {member.social.linkedin && (
                  <a href={member.social.linkedin} aria-label="LinkedIn">
                    <FaLinkedin className="w-5 h-5 hover:text-blue-700" />
                  </a>
                )}
                {member.social.instagram && (
                  <a href={member.social.instagram} aria-label="Instagram">
                    <FaInstagram className="w-5 h-5 hover:text-pink-500" />
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


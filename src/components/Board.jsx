import React from 'react';
import { TfiEmail } from 'react-icons/tfi';

const Board = () => {
  // Sample data array of team members
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      linkedin: 'https://www.linkedin.com/in/janesmith/',
    },
    {
        name: 'Mr B',
        role: 'PRO',
        linkedin: 'https://www.linkedin.com/in/janesmith/',
      },
      {
        name: 'Mrs C',
        role: 'Product Manager',
        linkedin: 'https://www.linkedin.com/in/janesmith/',
      },
      {
        name: 'Jane Smith',
        role: 'CTO',
        linkedin: 'https://www.linkedin.com/in/janesmith/',
      },
      {
        name: 'Jane Smith',
        role: 'CTO',
        linkedin: 'https://www.linkedin.com/in/janesmith/',
      },
  ];

  return (
    <div className=" py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-4">Management & Advisory Board</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <img
                  className="w-20 h-20 rounded-full object-cover"
                  src={`https://placehold.it/200x200?text=${member.name}`}
                  alt={member.name}
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-3">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <TfiEmail className="inline-block w-6 h-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
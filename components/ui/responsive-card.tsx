// components/ResponsiveCard.tsx

import React from 'react';

const ResponsiveCard: React.FC = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
      <div className="md:flex flex justify-between">
        <div className="md:flex-shrink-0">
          <div className="p-8">
            <h2 className="text-lg font-bold text-gray-900">Heading 1</h2>
            <p className="mt-2 text-gray-600">
              This is a paragraph inside the first div. It will be placed on the left side on larger screens and stack on smaller screens.
            </p>
          </div>
        </div>
        <div className="md:flex-shrink-0">
          <div className="p-8">
            <h2 className="text-lg font-bold text-gray-900">Heading 2</h2>
            <p className="mt-2 text-gray-600">
              This is a paragraph inside the second div. It will be placed on the right side on larger screens and stack below the first div on smaller screens.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveCard;

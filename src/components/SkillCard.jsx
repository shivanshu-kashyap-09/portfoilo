import React from 'react';

const SkillCard = ({ image, label }) => {
  return (
    <div className="flex flex-col items-center bg-orange-200 shadow-lg rounded-2xl p-4 hover:shadow-2xl transform hover:scale-105 hover:bg-orange-300 hover:text-white transition-all duration-300 w-50">
      <img src={image} alt={label} className="w-22 h-22 object-contain mb-3" />
      <h2 className="text-gray-800 text-lg font-semibold">{label}</h2>
    </div>
  );
};

export default SkillCard;

import React from 'react';

interface SectionCardProps {
  name: string;
  onClick: () => void;
}

const SectionCard: React.FC<SectionCardProps> = ({ name, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer inline-block"
    >
      {name}
    </div>
  );
};

export default SectionCard;

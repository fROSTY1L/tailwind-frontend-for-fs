import React from 'react';
import DishSections from '../components/DishSection';

const Header: React.FC = () => {

  return (
    <header className="bg-gray-800 text-white flex flex-col items-between">
      <DishSections />
    </header>
  );
};

export default Header;
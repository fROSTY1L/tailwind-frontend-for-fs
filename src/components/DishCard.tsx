import React from 'react'
import { Dish } from '../interfaces/interfaces';


const DishCard: React.FC<Dish> = ({ name, price, img, dishTypeId, onAddToCart }) => {
  
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={img} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">Цена: {price}₽</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <button
          onClick={onAddToCart}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Добавить
        </button>
      </div>
    </div>
  );
};

export default DishCard

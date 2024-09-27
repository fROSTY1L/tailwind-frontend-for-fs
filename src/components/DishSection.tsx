import React, { useEffect } from 'react';
import SectionCard from './SectionCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setDishTypes } from '../store/dishTypeReducer';
import { fetchFromAPI } from '../services/fetchFromApi';

const DishSections: React.FC = () => {
  const handleSectionClick = (sectionName: string) => {
    console.log(`Выбран раздел: ${sectionName}`);
  };

  const url = import.meta.env.VITE_BACKEND_URL + 'api/dishType';

  const dispatch = useDispatch();
  const types = useSelector((state: RootState) => state.dishTypes.obj);

  useEffect(() => {
    const getDishTypes = async () => {
      try {
        const data = await fetchFromAPI(url); 
        dispatch(setDishTypes(data));
      } catch (err) {
        console.log(err)
      }
    };

    getDishTypes();
  }, [url, dispatch]);

  
  return (
    <div className="overflow-x-auto whitespace-nowrap p-4">
      <div className="flex space-x-4">
        {types.dishTypes.map((type) => (
          <SectionCard
            key={type.id}
            name={type.name}
            onClick={() => handleSectionClick(type.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default DishSections;

import { useEffect } from 'react'
import DishCard from '../components/DishCard';
import { Divider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchFromAPI } from '../services/fetchFromApi';
import { setDishes } from '../store/dishesReducer';
import { Dish, DishType } from '../interfaces/interfaces';


const ContentPart = () => {
  const handleAddToCart = (dishName: string) => {
    console.log(`${dishName} добавлено в корзину`);
    
  };
  const url = import.meta.env.VITE_BACKEND_URL;
  const dispatch = useDispatch()
  const dishes = useSelector((state: RootState) => state.dishes.obj.dishes);
  const dividerDishTypes = useSelector((state: RootState) => state.dishTypes.obj.dishTypes)

  useEffect(() => {
    const getDishTypes = async () => {
      try {
        const data = await fetchFromAPI(url + 'api/dish'); 
        dispatch(setDishes(data));
      } catch (err) {

      }
    };

    getDishTypes();
  }, [url, dispatch]);
  
  return (
    <>
    {dividerDishTypes.map((type: DishType) => (
      <>
      <Divider orientation="left">{type.name}</Divider>
      {dishes.filter(dish => dish.dishTypeId === type.id).map((dish: Dish) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <DishCard
          id={dish.id}
          dishTypeId={dish.dishTypeId}
          name={dish.name}
          price={dish.price}
          img={url + dish.img}
          onAddToCart={() => handleAddToCart(dish.name)}
        />
      </div>
      ))}
      </>
    ))}
    </>
  )
}

export default ContentPart

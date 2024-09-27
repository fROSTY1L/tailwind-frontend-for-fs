export interface DishType{
    id: string,
    name: string
}

export interface DishTypes{
    obj: {
        dishTypes: DishType[]
    }
}

export interface Dish {
    id: string,
    name: string,
    price: string,
    img: string,
    dishTypeId: string,
    onAddToCart: () => void;
}

export interface Dishes {
    obj: {
        dishes: Dish[]
    }
}
import { ICar } from '../interfaces/ICar.Interface';

export const getCarById = (cars: ICar[], carId:string): ICar | undefined => {
    return cars.find((car) => car.id === carId);
}
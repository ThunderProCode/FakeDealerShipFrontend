import { ICar } from '../interfaces/ICar.Interface';

export const getCarById = (Cars: ICar[], carId:number | undefined): ICar | undefined => {
    return Cars.find((car) =>car.id === carId);
}

export const filterCarsBy = (Cars: ICar[], filter:string): ICar[] => {
    if(filter.includes("keyword")){
        const keyword = filter.match(/-(\w+)/);
        if(keyword){
            return filterByKeyword(Cars,keyword[1]);
        }
    }

    if(filter.includes("body")){
        const body = filter.match(/-(\w+)/);
        if(body){
            return filterByBody(Cars,body[1]);
        }
    }
    if(filter.includes("make")){
        const make = filter.match(/-(\w+)/);
        if(make){
            return filterByMake(Cars,make[1].toLowerCase());
        }
    }

    switch(filter) {
        case "Year-decreasing":
            return filterByYearIncreasing(Cars);
        case "Year-increasing":
            return filterByYearDecreasing(Cars);
        case "Price-decreasing":
            return filterByPriceDecreasing(Cars);
        case "Price-increasing":
            return filterByPriceIncreasing(Cars);
        default:
            return Cars;
    }
}

const filterByYearIncreasing = (Cars: ICar[]) => {
    const carsToSort = [...Cars];
    return carsToSort.sort((a,b) => a.year - b.year);
}

const filterByYearDecreasing = (Cars: ICar[]): ICar[] => {
    const carsToSort = [...Cars];
    return carsToSort.sort((a,b) => b.year - a.year);
}

const filterByPriceIncreasing = (Cars: ICar[]): ICar[] => {
    const carsToSort = [...Cars];
    return carsToSort.sort((a,b) => a.price - b.price);
}

const filterByPriceDecreasing = (Cars: ICar[]): ICar[] => {
    const carsToSort = [...Cars];
    return carsToSort.sort((a,b) => b.price - a.price);
}

const filterByBody = (Cars: ICar[], body:string): ICar[] => {
    const carsToSort = [...Cars];
    return carsToSort.filter((car) => car.body === body);
}

const filterByMake = (Cars: ICar[], make: string): ICar[] => {
    const carsToSort = [...Cars];
    return carsToSort.filter((car) => car.make.toLowerCase() === make);
}

const filterByKeyword = (Cars:ICar[], keyword: string) => {
    const carsToSort = [...Cars];
    return carsToSort.filter((car) =>
      Object.values(car).some((value) =>
        typeof value === 'string' && value.toLowerCase().includes(keyword.toLowerCase())
      )
    );
}
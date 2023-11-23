import { useEffect, useState } from "react"
import { ICar } from "../interfaces/ICar.Interface";
import { fetchCars } from "../Services/Api.Service";

const useCarsFetching = () => {

    const [Cars, setCars] = useState<ICar[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        // console.log("Component Mounted");
        const fetchDataAndHandleLoading = async () => {
            try {
                const result = await fetchCars();
                setCars(result);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        if(loading){
            fetchDataAndHandleLoading();
        }

        return () => {
            // console.log("Component Unmounted");
        }
    },[]);
    return { Cars, loading };
};

export default useCarsFetching;


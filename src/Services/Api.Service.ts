const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchCars = async () => {
    console.log('Fetching Cars');
    try {
        const response = await fetch(`${BASE_URL}/Cars`);
        return await response.json();
    } catch (error) {
        console.log(`Error fetching data: ${error}`);
    }
};


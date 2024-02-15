import { useEffect, useState } from 'react';

const useNewsQuery = (category, searchQuery) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                let response;
                if (category) {
                    let url = `${import.meta.env.VITE_API_URL}/top-headlines`;
                    if (category !== 'all') {
                        url = `${url}?category=${category}`;
                    }
                    response = await fetch(url);
                }
                
                if (searchQuery) {
                    let url = `${import.meta.env.VITE_API_URL}/search?q=${searchQuery}`;
                    response = await fetch(url);
                }

                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [category, searchQuery]);

    return { data, isLoading, error };
};

export default useNewsQuery;
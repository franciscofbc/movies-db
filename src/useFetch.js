import axios from 'axios';
import { useEffect, useState } from 'react';

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_APP_MOVIE_API_KEY
}`;

const useFetch = (paramsUrl) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: '' });
  const [data, setData] = useState(null);

  const fetchMovies = async (url) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(url);
      if (data.Response === 'True') {
        setData(data.Search || data);
        setError({ show: false, msg: '' });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${paramsUrl}`);
  }, [paramsUrl]);

  return { isLoading, error, data };
};

export default useFetch;

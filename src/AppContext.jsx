import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import useFetch from './useFetch';

const GlobalContext = createContext();
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_APP_MOVIE_API_KEY
  }`;

const AppContext = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: '' });

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const [movie, setMovie] = useState({})

  // const fecthData = async (url, flag) => {
  //   try {
  //     setIsLoading(true);
  //     const { data } = await axios.get(url);
  //     if (data.Response === 'True') {
  //       if (flag === 'movies') {
  //         setMovies(data.Search);
  //       }
  //       if (flag === 'movie') {
  //         setMovie(data);
  //       }
  //       setError({ show: false, msg: '' });
  //     } else {
  //       setError({ show: true, msg: data.Error });
  //     }
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setIsLoading(false);
  //   }
  // };

  useEffect(() => {
    // fecthData(`${API_ENDPOINT}&s=${query}`, 'movies');
    useFetch(`${API_ENDPOINT}&s=${query}`, 'movies')
  }, [query]);

  return (
    <GlobalContext.Provider value={{
      error, isLoading, movies,
      query, setQuery, movie, setError,
      setIsLoading, setMovie, setMovies
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;

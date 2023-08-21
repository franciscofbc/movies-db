import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const GlobalContext = createContext();
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_APP_MOVIE_API_KEY
}`;

const AppContext = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: '' });
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('batman');

  const fecthData = async (url) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(url);
      if (data.Response === 'True') {
        setMovies(data.Search);
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
    fecthData(`${API_ENDPOINT}&s=${query}`);
  }, [query]);

  return (
    <GlobalContext.Provider value={{ movies, query, setQuery }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;

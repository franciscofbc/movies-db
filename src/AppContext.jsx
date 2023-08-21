import { createContext, useContext, useState } from 'react';
import useFetch from './useFetch';

const GlobalContext = createContext();
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

const AppContext = ({ children }) => {
  const [query, setQuery] = useState('');
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`)

  return (
    <GlobalContext.Provider value={{
      error, isLoading, movies,
      query, setQuery,
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;

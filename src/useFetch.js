import { useGlobalContext } from './AppContext';

const { setIsLoading, setMovies, setMovie, setError } = useGlobalContext();

const useFetch = async () => {
  try {
    setIsLoading(true);
    const { data } = await axios.get(url);
    if (data.Response === 'True') {
      if (flag === 'movies') {
        setMovies(data.Search);
      }
      if (flag === 'movie') {
        setMovie(data);
      }
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

export default useFetch;

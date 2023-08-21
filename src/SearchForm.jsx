import { useGlobalContext } from './AppContext';

const SearchForm = () => {
  const { query, setQuery } = useGlobalContext();

  // console.log(query);

  return <div>SearchForm</div>;
};
export default SearchForm;

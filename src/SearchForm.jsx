import { useGlobalContext } from './AppContext';

const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();

  return (
    <form className='form'>
      <input type="text" className='form-input' value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder='type the title' />
      <p>{error.msg}</p>
    </form>
  )
};

export default SearchForm;

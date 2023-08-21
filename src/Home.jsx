import SearchForm from './SearchForm';
import Movies from './Movies';

const Home = () => {
  return (
    <main className="section section-center">
      <div className="title">
        <h1>search movies / series ...</h1>
      </div>
      <SearchForm />
      <Movies />
    </main>
  );
};
export default Home;

import SearchForm from './SearchForm';
import Movies from './Movies';

const Home = () => {
  return (
    <main className="section section-center">
      <div className="title">
        <h1>search movies</h1>
        <div className="title-underline"></div>
      </div>
      <SearchForm />
      <Movies />
    </main>
  );
};
export default Home;

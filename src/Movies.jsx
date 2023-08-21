import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { useGlobalContext } from './AppContext';

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>
  }

  return (
    <Wrapper>
      {movies?.map((movie) => {
        const { Title, Year, Poster, imdbID } = movie;
        return (
          <Link className="movie" to={`/movies/${imdbID}`} key={imdbID}>
            <img src={Poster} alt={Title} />
            <div className="info">
              <p>{Title}</p>
              <p>{Year}</p>
            </div>
          </Link>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 1rem;

  .movie {
    position: relative;
    overflow: hidden;
  }

  img {
    height: 400px;
    /* global css */
    width: 100%;
    display: block;
    object-fit: cover;
  }

  .info {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    /* background: var(--black); */
    /* opacity: 0.6; */
    background: rgba(0, 0, 0, 0.6);
    transition: var(--transition);
    transform: translateY(100%);
    padding: 0.5rem;
  }

  .info p {
    color: var(--white);
  }

  .movie:hover {
    .info {
      transform: translateY(0);
    }
  }

  @media (min-width: 576px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
`;

export default Movies;

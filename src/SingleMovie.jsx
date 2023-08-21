import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
import useFetch from "./useFetch";

const SingleMovie = () => {
  const { id } = useParams()
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`)

  if (isLoading) {
    return (
      <div className="loading"
        style={{ marginTop: '5rem' }}></div>
    )
  }

  if (error.show) {
    return (
      <div className="section section-center">
        <p style={{ marginBottom: '1rem' }}>{error.msg || 'page not found'}</p>
        <Link to='/' className="btn">back to movies</Link>
      </div>
    )
  }

  const { Title, Poster, Year, Plot,
    imdbRating, imdbVotes, Genre, Country, Type, totalSeasons } = movie

  return (
    <Wrapper className="section section-center">
      <img src={Poster} alt={Title} />
      <div>
        <h4>{Title}</h4>
        <p>
          <span>Genre: </span>{Genre}{' '}
          <span>Country: </span>{Country}</p>
        <p>
          <span>Type: </span>{Type}{' '}
          <span>totalSeasons: </span>{totalSeasons}
        </p>
        <p>
          <span>imdbRating:</span> {imdbRating}{' '}
          <span>imdbVotes:</span> {imdbVotes}
        </p>
        <p><span>Plot:</span> {Plot}</p>
        <p><span>Year:</span> {Year}</p>
        <Link to='/' className="btn">back to movies</Link>
      </div>
    </Wrapper>
  );
};
export default SingleMovie;

const Wrapper = styled.div`
  display: grid;
  gap: 2rem;

  img{
    min-height: 400px;
    width: 100%;
    display: block;
    object-fit: cover;
  }

  h4{
    font-size: 3rem;
  }

  span{
    font-weight: bold;
  }

  p{
    margin-bottom: 1rem;
  }

  @media (min-width: 992px) {
    grid-template-columns: 280px auto;
  }
`

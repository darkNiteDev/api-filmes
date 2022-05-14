import { Container, MovieList, Movie } from "./styles";

function Home () {
    const movies = [ 
          {   
            id: 1, 
            title: 'Spider Man',
            image_url: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg/'
          },

          {
            id: 2,
            title: 'Batman',
            image_url: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg/'

           },

           {
            id: 3,
            title: 'Avengers',
            image_url: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg/'

           },

           {   
            id: 1, 
            title: 'Spider Man',
            image_url: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg/'
           },

           {
            id: 2,
            title: 'Batman',
            image_url: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg/'

           },

           {
            id: 3,
            title: 'Avengers',
            image_url: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg/'

           }

    ]

    return (
        <Container>
            <h1>Movies</h1>
            <MovieList>
                {movies.map(movie => { 
                    return (
                        <Movie key={ movie.id } >
                            <a href="https://gloogle.com.br"><img src={movie.image_url} alt={movie.title}/></a>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}

              </MovieList>   
      </Container>
    )
  }
  export default Home;
  
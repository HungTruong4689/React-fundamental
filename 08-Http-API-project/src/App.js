import React, {useEffect, useState, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];
  let content = <p>Found no movies.</p>;
  if(movies.length >0){
    content = <MoviesList movies={movies} />;
  }
  if(error){
    content = <p>{error}</p>
  }
  if(isLoading){
    content = <p></p>
  }
  


  // async function fetchMoviesHandler(){
  //   setIsLoading(true);
  //   setError(null);
  //   try{
  //     const response = await fetch('https://swapi.dev/api/films');
  //     const data = await response.json();
      
  //     if(!response.ok){
  //       throw new Error('Something went wrong!');
  //     }
  //     const transformedMovies = data.results.map(movieData =>{
  //       return {
  //           id: movieData.episode_id,
  //           title: movieData.title,
  //           openingText: movieData.opening_crawl,
  //           releaseDate: movieData.release_date
  //         }
  //       })
  //     setMovies(transformedMovies);
  //     setIsLoading(false);
  //   }catch(error){
  //     setError(error.message)
  //   }
  //   setIsLoading(false);
  // }
  
  const fetchMoviesHandler = useCallback( async() =>{
    setIsLoading(true);
    setError(null);
    try{
      const response =  await fetch('https://swapi.dev/api/films');
      const data =  await response.json();
      
      if(!response.ok){
        throw new Error('Something went wrong!');
      }


      //First step of API
      // const transformedMovies = data.results.map(movieData =>{
      //   return {
      //       id: movieData.episode_id,
      //       title: movieData.title,
      //       openingText: movieData.opening_crawl,
      //       releaseDate: movieData.release_date
      //     }
      //   })
      // setMovies(transformedMovies);

      //Add POST method
      const loadedMovies = [];
      for(const key in data){
        loadedMovies.push({
          id:key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate : data[key].releaseDate
        });
      }
      setMovies(loadedMovies);
      setIsLoading(false);
    }catch(error){
      setError(error.message)
    }
    setIsLoading(false);
  },[])
  useEffect(() =>{
    fetchMoviesHandler();
  },[fetchMoviesHandler]);

  async function addMovieHandler(movie){
    const response = await fetch('link', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers :{
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* {!isLoading && movies.length >0 && content}
        {!isLoading && movies.length ===0 &&content}
        {isLoading && <p>Loading....</p>}
        {!isLoading &&error &&<p>{error}</p>} */}
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;

import { useEffect, useState } from "react";
import Genres from "./components/Genres";
import Layout from "./components/Layout";
import Movie from "./components/Movie";
import SearchButton from "./components/SearchButton";
import SideBar from "./components/SideBar";
import UserScore from "./components/UserScore";

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY

function App() {
  const page = 1
  var selectedGenres =  []
  var userScore =  0

  const [movies, setMovies] = useState(undefined)
  const [genres, setGenres] = useState([])

  useEffect(() => {
    if (genres.length === 0) {
      fetch('https://api.themoviedb.org/3/genre/movie/list', {
        method: 'GET',
        headers: new Headers({
          'Authorization': `Bearer ${TMDB_API_KEY}`,
          'Content-Type': 'application/json;charset=utf-8'
        })
      }).then(response => response.json())
        .then(data => setGenres(data.genres))
    }

    var discoverUrl = new URL('https://api.themoviedb.org/3/discover/movie')
    var discoverParams = { page, with_genres: selectedGenres.join(','), 'vote_count.gte': userScore }
    discoverUrl.search = new URLSearchParams(discoverParams).toString()
    if (!movies) {
      fetch(discoverUrl, {
        method: 'GET',
        headers: new Headers({
          'Authorization': `Bearer ${TMDB_API_KEY}`,
          'Content-Type': 'application/json;charset=utf-8'
        })
      }).then(response => response.json())
        .then(data => setMovies(data))
    }
  })

  return (
    <Layout>
      <div class="flex">
        <SideBar class="mr-4">
          <h1 class="text-center text-2xl font-bold mb-4">Filters</h1>

          <h3 class="text-lg font-bold">Genres</h3>
          <Genres genres={genres} allSelected={selectedGenres} onChange={newSelected => {
            console.log(newSelected)
            selectedGenres = newSelected
          }} />

          <h3 class="text-lg font-bold my-4">User score</h3>
          <UserScore score={userScore} onChange={value => userScore = value} />

          <SearchButton class="mt-8" onClick={() => setMovies(undefined)} />
        </SideBar>

        { /* Movies */}
        <div class="w-full">
          <div class="grid gap-x-8 gap-y-12 justify-around" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, auto))" }}>
            {movies?.results.map(movie => {
              return (
                <Movie
                  imgSrc={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                  imgAlt={movie.title}
                  title={movie.title}
                  userScore={Math.trunc(movie.vote_average * 10)}
                  releaseDate={movie.release_date}
                />
              )
            })}
          </div>
        </div>

      </div>
    </Layout>
  );
}

export default App;

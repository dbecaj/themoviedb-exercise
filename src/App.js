import { useEffect, useRef, useState } from "react";
import Genres from "./components/Genres";
import Layout from "./components/Layout";
import Movie from "./components/Movie";
import Scrollable from "./components/Scrollable";
import SearchButton from "./components/SearchButton";
import SideBar from "./components/SideBar";
import UserScore from "./components/UserScore";
import { fetchGenres, fetchMovies } from "./TmdbApi";

function App() {
  const page = useRef(1)
  const totalPages = useRef(0)
  var selectedGenres = []
  var userScore = 0

  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])

  function handleSearch() {
    fetchMovies(page.current, selectedGenres, userScore).then(data => {
      totalPages.current = data.total_pages

      setMovies(data.results)
    })
  }

  function handleLoadMore() {
    if (page.current <= totalPages.current) {
      console.log("Loading more movies")
      page.current = page.current + 1
      fetchMovies(page.current, selectedGenres, userScore).then(data  => setMovies(movies.concat(data.results)))
    }
  }

  useEffect(() => {
    if (genres.length === 0) {
      fetchGenres().then(data => setGenres(data.genres))
    }

    if (movies.length === 0) {
      fetchMovies(page.current, selectedGenres, userScore).then(data => {
        totalPages.current = data.total_pages

        setMovies(data.results)
      })
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

          <SearchButton class="mt-8" onClick={handleSearch} />
        </SideBar>

        { /* Movies */}
        <Scrollable class="w-full" onBottom={handleLoadMore}>
          <div id="movies" class="grid gap-x-8 gap-y-12 justify-aroundk" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, auto))" }}>
            {movies.map(movie => {
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
        </Scrollable>

      </div>
    </Layout>
  );
}

export default App;

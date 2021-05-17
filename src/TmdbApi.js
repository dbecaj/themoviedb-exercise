
const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY

export async function fetchGenres() {
  const response = await fetch('https://api.themoviedb.org/3/genre/movie/list', {
    method: 'GET',
    headers: new Headers({
      'Authorization': `Bearer ${TMDB_API_KEY}`,
      'Content-Type': 'application/json;charset=utf-8'
    })
  })
  const data = await response.json()

  return data
}

export async function fetchMovies(page, selectedGenres, userScore) {
  var discoverUrl = new URL('https://api.themoviedb.org/3/discover/movie')
  var discoverParams = { page, with_genres: selectedGenres.map(genre => parseInt(genre)).join(','), 'vote_count.gte': userScore }
  discoverUrl.search = new URLSearchParams(discoverParams).toString()
  console.log(discoverUrl)

  const response = await fetch(discoverUrl, {
    method: 'GET',
    headers: new Headers({
      'Authorization': `Bearer ${TMDB_API_KEY}`,
      'Content-Type': 'application/json;charset=utf-8'
    })
  })
  const data = await response.json()

  return data
}
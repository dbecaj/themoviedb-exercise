import Genres from "./components/Genres";
import Layout from "./components/Layout";
import Movie from "./components/Movie";
import Pagination from "./components/Pagination";
import SideBar from "./components/SideBar";
import UserScore from "./components/UserScore";

const genres = [
  'Action',
  'Advanture',
  'Animation',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Family',
  'Fantasy',
  'History',
  'Horror',
  'Music',
  'Mystery',
  'Romance',
  'Science Fiction',
  'TV Movie',
  'Thriller',
  'War',
  'Western'
]

function App() {
  return (
    <Layout>
      <div class="flex">
        <SideBar class="mr-4">
          <h1 class="text-center text-2xl font-bold mb-4">Filters</h1>

          <h3 class="text-lg font-bold">Genres</h3>
          <Genres genres={genres} allSelected={[]} />

          <h3 class="text-lg font-bold my-4">User score</h3>
          <UserScore score={0}/>

          <button type="button" class="w-full mt-8 p-2 bg-blue-500 text-white font-bold text-xl rounded-lg">Search</button>
        </SideBar>

        { /* Movies */}
        <div class="w-full">
          <div class="grid gap-x-8 gap-y-12 justify-around" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, auto))" }}>
            {Array.from(Array(20)).map(v => {
              return (
                <Movie
                  imgSrc="https://www.themoviedb.org/t/p/w220_and_h330_face/6vcDalR50RWa309vBH1NLmG2rjQ.jpg"
                  imgAlt="The Marksman"
                  title="The Marksman"
                  userScore="74"
                  releaseDate="15.05.2021"
                />
              )
            })}
          </div>

          <Pagination class="mt-8" currentPage={0} />
        </div>

      </div>
    </Layout>
  );
}

export default App;

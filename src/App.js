import Layout from "./components/Layout";
import Movie from "./components/Movie";

// https://www.themoviedb.org/t/p/w220_and_h330_face/6vcDalR50RWa309vBH1NLmG2rjQ.jpg

function App() {
  return (
    <Layout>
      { /* Filters */}
      <div class="flex">
        <div class="bg-blue-500 mr-8">
          <h1>Hello world</h1>
        </div>

        { /* Movies */}
        <div class="w-full grid gap-x-8 gap-y-12 justify-around" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, auto))" }}>
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
      </div>
    </Layout>
  );
}

export default App;

import './App.css';
import Navbar from "./components/Navbar";
import MovieInfo from "./components/MovieInfo";
import CoverPage from "./components/CoverPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MovieInfo />
      <CoverPage />
    </div>
  );
}

export default App;

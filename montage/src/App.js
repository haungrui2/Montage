import './App.css';
import Navbar from "./components/Navbar";
import MovieInfo from "./components/MovieInfo";
import {Login} from "./components/Login/Login";
import {Register} from "./components/Login/Register";
import CoverPage from "./components/CoverPage";
import Comments from "./components/Comments";
import Movies from "./components/Movies";
function App() {
  return (
    <div className="App">
        <Navbar/>
        <MovieInfo/>
        <Movies/>
    </div>
  );
}

export default App;

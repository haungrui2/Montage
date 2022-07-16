import './App.css';
import Navbar from "./components/Navbar";
import MovieInfo from "./components/MovieInfo";
import {LoginIndex} from "./components/Login/LoginIndex";
import {Register} from "./components/Login/RegisterForm";
import CoverPage from "./components/CoverPage";
import Comments from "./components/Comments";
import Movies from "./components/Movies";
import Upload from "./components/Upload";
import Search from "./components/Search";


import {Routes, Route, useNavigate} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Search />
      <CoverPage />
      <Routes>
      <Route path="/Upload" element={<Upload />} />
      <Route path="/MovieInfo" element={<MovieInfo />} />
      <Route path="/Movies" element={<Movies />} />
        <Route path="/Login" element={<LoginIndex />} />
      </Routes>

    </div>
  );
}

export default App;

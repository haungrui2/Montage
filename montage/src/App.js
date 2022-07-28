import './App.css';
import Navbar from "./components/Navbar";
import MovieInfo from "./components/MovieInfo";
import {LoginIndex} from "./components/Login/LoginIndex";
import CoverPage from "./components/CoverPage";
import Movies from "./components/Movies";
import Upload from "./components/Upload";
import {Routes, Route} from 'react-router-dom';
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CoverPage />
      <Routes>
        <Route path="/Upload" element={<Upload />} />
        <Route path="/MovieInfo" element={<MovieInfo />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Login" element={<LoginIndex />} />
        <Route path="/UserProfile" element={<UserProfile />} />
      </Routes>

    </div>
  );
}

export default App;

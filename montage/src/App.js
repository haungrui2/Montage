import './App.css';
import Navbar from "./components/Navbar";
import MovieInfo from "./components/MovieInfo";
import {Login} from "./components/Login/Login";
import {Register} from "./components/Login/Register";
import CoverPage from "./components/CoverPage";
import {Routes, Route, useNavigate} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CoverPage />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Movie" element={<MovieInfo />} />
      </Routes>
    </div>
  );
}

export default App;

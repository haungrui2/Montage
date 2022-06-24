import './App.css';
import Navbar from "./components/Navbar";
import MovieInfo from "./components/MovieInfo";
import {LoginIndex} from "./components/Login/LoginIndex";
import {Register} from "./components/Login/RegisterForm";
import CoverPage from "./components/CoverPage";
import {Routes, Route, useNavigate} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CoverPage />
      <Routes>
        <Route path="/Login" element={<LoginIndex />} />
      </Routes>
    </div>
  );
}

export default App;

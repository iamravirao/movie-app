import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import MovieDetails from "./pages/movieDetails/MovieDetails";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/movie/:id" element={<MovieDetails />}></Route>
          <Route
            path="/movies/:type"
            element={<h1>Movies list page</h1>}
          ></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

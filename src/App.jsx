import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Page/Home";
import { WishList } from "./Page/Wishlist";
import { Starred } from "./Page/Starred";
import { Form } from "./Page/Form";
import { MovieDetails } from "./Page/MovieDetials";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<WishList />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="/form" element={<Form />} />
        <Route path="/Details/:movieId" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;

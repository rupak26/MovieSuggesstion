import MovieCard from "./components/MovieCard";
import Home from "./Pages/Home";
import Favourite from "./Pages/Favourite";
import { Route , Routes } from "react-router";
import NavBar from "./components/NavBar";
import "./css/App.css" ;

function App() {
    return (
       <main className="main-content">
        <NavBar />
        <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/favourite' element={<Favourite/>}/>
        </Routes>
       </main>
    );
}

export default App;

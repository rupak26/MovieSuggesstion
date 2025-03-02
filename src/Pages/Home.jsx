import MovieCard from "../components/MovieCard";
import { useState , useEffect } from "react";
import { getPopularMovies , searchMovies } from "../services/api";
import "../css/Home.css" ;

function Home() {
    const [searchQuery , setsearchQuery] = useState("") ;
    const [movies , setMovies] = useState([]) ;
    const [error , setError] = useState(null) ;
    const [loading , setLoading] = useState(true)
    useEffect(() => {
        const loadPopularMovies = async () => {
             try {
                const popularMovies = await getPopularMovies() ;
                setMovies(popularMovies) ;
             } catch (error){
                setError("Failed to fatch Movies...")
             } finally {
                setLoading(false) ; 
             }
        };
        loadPopularMovies() ;
    } , []);

    const handleSearch = async (e) => {
         e.preventDefault() ;
         if(!searchQuery.trim()) return ;
         if(loading) return ;
         setLoading(true) ;
         try {
            const searchResults = await searchMovies(searchQuery) ; 
            setMovies(searchResults) ;
            setError(null) ;
         } catch (error) {
            setError("Failed to Search Movies") ;
         } finally {
            setLoading(false) ;
         }
    }
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" 
                placeholder="Seach for movies.." 
                className="search-from"
                value={searchQuery}
                onChange={(e) => setsearchQuery(e.target.value)}   
                >    
                </input>
                <button type="submit" className="search-button">
                  Search
                </button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) => ( 
                 movie.title.toLowerCase().startsWith(searchQuery) && 
                 (<MovieCard movie={movie} key={movie.id}/>)
                ))}
            </div>
        </div>
    );
}

export default Home
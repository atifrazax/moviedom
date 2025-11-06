import { useState, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Card from "../components/Card";
import CardPlaceholder from '../components/CardPlaceholder';
const MOVIE_URL = import.meta.env.VITE_MOVIE_URL;
const MOVIE_API = import.meta.env.VITE_MOVIE_API;


export default function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const inputRef =useRef();

    const navigate = useNavigate();
    const location = useLocation();
    const search = new URLSearchParams(location.search).get('s');

    const searchMovies = async (search) => {
        try {
            const url = `${MOVIE_URL}?s=${search}&apikey=${MOVIE_API}`;
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.Search || []);
        } catch {
            console.log('error');
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        searchMovies(search || 'fun');
    }, [search]);
    // console.log(movies);
    const handleSearch = (e) => {
        setLoading(true);
        e.preventDefault();
        const search = inputRef.current.value.trim();
        navigate(`/?s=${search}`);
        search  && search !== '' ? searchMovies(search) : searchMovies('fun');
        // inputRef.current.value = '';
    }

  return (
    <section className='bg-black'>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-10">
            <form onSubmit={handleSearch} className='flex flex-row items-center justify-self-end'>
                <input type="text" ref={inputRef} placeholder='Search Movie' className='me-2 bg-transparent border border-white rounded-md px-2 sm:px-4 py-2 text-white' />
                <button type='submit' className='bg-primary py-2 px-6 text-white hover:bg-white rounded-es-md rounded-se-md hover:text-black transition duration-300'>Search</button>
            </form>
            <h1 className='text-white text-3xl font-bold my-4'>{ inputRef.current?.value ? (`Search Result: ${inputRef.current.value}`) : '' }</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
                { loading ? (
                    [...Array(8)].map((_,i) => (
                        <CardPlaceholder key={i} />
                    ))
                ) 
                
                : ( movies.map((movie) => (
                    <Card key={movie.imdbID} movie={movie}/>
                )))}
            </div>
        </div>
    </section>
  )
}

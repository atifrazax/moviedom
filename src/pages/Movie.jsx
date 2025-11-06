import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const MOVIE_URL = import.meta.env.VITE_MOVIE_URL;
const MOVIE_API = import.meta.env.VITE_MOVIE_API;

export default function Movie() {

    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    const {id} = useParams();
    useEffect(() => {
        async function getMovie() {
            const url = `${MOVIE_URL}?apikey=${MOVIE_API}&i=${id}`;
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);
            setMovie(data || {});
            setLoading(false);
            
        }
        getMovie();
    }, [id]);
    const navigate = useNavigate();
  return (
    <>
    <section className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
        <div className='flex mb-6'>
            <button onClick={()=>navigate(-1)} className='font-ubuntu font-bold bg-primary px-6 py-2 text-white rounded-md hover:bg-white hover:text-primary transition duration-300'>&larr; Back</button>
        </div>
    { loading ? <div className='flex text-primary font-semibold text-2xl sm:text-3xl text-center justify-center items-center'>Loading...</div> :
        <div className='flex flex-wrap sm:flex-row sm:flex-nowrap items-center justify-center'>
            <img src={movie.Poster} onError={(e)=>e.target.src='/no-preview.webp'} alt={movie.Title} className='w-auto me-0 sm:me-4 rounded-2xl max-h-115 object-cover' />
            <div className='flex flex-col mt-4 *:text-lg *:mb-2 bg-gray-900 rounded-2xl p-4'>
                <h2 className='text-primary mb-2 '>{movie.Title}</h2>
                <div className='flex flex-wrap space-x-2'>
                    <span className=''>Year: {movie.Year}</span>
                    <span className=' capitalize'>Type: {movie.Type}</span>
                    <span className=''>Released: {movie.Released}</span>
                    <span className=''>Runtime: {movie.Runtime}</span>
                    <span className=''>Country: {movie.Country}</span>
                    <span className=''>Metascore: {movie.Metascore}</span>
                </div>
                    <span className=''>Awards: {movie.Awards}</span>
                    <span className=''>BoxOffice: {movie.BoxOffice}</span>
                    <span className=''>Genre: {movie.Genre}</span>
                    <span className=''>Actors: {movie.Actors}</span>
                    <span className=''>Language: {movie.Language}</span>
                    <span className=''>Writer: {movie.Writer}</span>
                    <span className=''>Plot: {movie.Plot}</span>
            </div>
        </div>
    }
    </section>
    </>
  )
}

import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Card({movie}) {
  const [loaded, setLoaded] = useState(false);
  if(!movie) return <h2>Loading...</h2>;
  return (
    <div className='flex flex-col rounded-t-2xl border border-white'>
        <div className='relative'>
          {!loaded && (
            <div className="absolute inset-0 animate-pulse bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 rounded-t-xl" />
          )}
          <img src={movie.Poster} onLoad={()=>setLoaded(true)} onError={(e)=>e.target.src='/no-preview.webp'} alt="" loading='lazy' className={`transition-all duration-700 ease-in-out rounded-t-2xl h-40 sm:h-80 w-full object-cover ${
            loaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
          }`} />
        </div>
        <div className='flex flex-col px-4 py-6'>
            <h4 className='text-primary text-lg mb-2 grow line-clamp-1'>{movie.Title}</h4>
            <div className='flex'>
                <span className='text-white text-md me-4'>{movie.Year}</span>
                <span className='text-white text-md mb-4 capitalize'>{movie.Type}</span>
            </div>
            <Link to={`/movie/${movie.imdbID}`} className='px-4 py-2 bg-primary text-white hover:bg-white hover:text-primary transition duration-300 rounded-se-md rounded-es-md'>More Details</Link>
        </div>
    </div>
  )
}

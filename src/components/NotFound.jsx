import { useNavigate } from "react-router-dom"

export default function NotFound() {
  const prev = useNavigate();
  return (
    <div className='flex flex-col justify-center items-center text-center p-20'>
        <h2>Page Not Found</h2>
        <button to='/' onClick={()=>prev(-1)} className='font-ubuntu font-bold mt-10 bg-primary px-6 py-2 text-white rounded-md hover:bg-white hover:text-primary transition duration-300'>&larr; Back</button>
    </div>
  )
}

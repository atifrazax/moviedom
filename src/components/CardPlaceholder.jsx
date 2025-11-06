

export default function CardPlaceholder() {
  return (
    <div className='flex flex-col rounded-t-2xl border border-white'>
        <div className='relative'>
          <div className="absolute inset-0 animate-pulse bg-linear-to-r from-gray-300 via-gray-100 to-gray-300 rounded-t-xl" />
          <div className='transition-all duration-700 ease-in-out rounded-t-2xl h-40 sm:h-80 w-full'/>
        </div>
        <div className='flex flex-col px-4 py-6 '>
            <h4 className='text-transparent text-lg mb-2 grow line-clamp-1 animate-pulse ease-out bg-linear-to-r from-gray-300 via-gray-100 to-gray-300 rounded-2xl'>hello</h4>
            <div className='flex'>
                <span className='text-white text-md me'></span>
                <span className='text-transparent text-md mb-4 grow animate-pulse ease-out bg-linear-to-r from-gray-100 via-gray-300 to-gray-100 rounded-2xl'>hello</span>
            </div>
            <button className='px-4 py-2 text-transparent animate-pulse bg-linear-to-r from-primary via-gray-300 to-primary transition duration-300 rounded-se-md rounded-es-md'>More Details</ button>
        </div>
    </div>
  )
}

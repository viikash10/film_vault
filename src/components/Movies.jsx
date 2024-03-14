import React from 'react'
import MoviesCard from './MoviesCard'

function Movies() {
  return (
    <div className='p-5 justify-around'>
        <div className='text-2xl font-bold text-center'>
          Trending Movies
        </div>

        <div className='flex flex-row flex-wrap justify-around p-8 '>
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
        </div>
    </div>
  )
}

export default Movies
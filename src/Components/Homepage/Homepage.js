import React from 'react'
import './Homepage.scss'

const Homepage = () => {
  return(
    <main>
      <section className='homepage__main'>
        <div className='homepage__text-container'>
          <h1 className='homepage__name'>Ryan Flachman</h1>
          <h2 className='homepage__job'>Fullstack Developer</h2>
        </div>
      </section>
      <section className='homepage__photo-container'>
        <div className='photo-container'>
          <div className='photo-headshot'></div>
        </div>
      </section>
    </main>
  )
}

export default Homepage;
import React from 'react'

function Carousel() {
  return (
    <div data-content="A" className="relative flex flex-row gap-2 mx-auto max-w-screen-xl before:bg-gradient-to-l before:from-white before:absolute before:right-0 before:h-32 before:w-20 after:bg-gradient-to-r after:from-white after:absolute after:left-0 after:h-32 after:w-20">
      <div className="w-64 h-32 bg-gray-200 rounded-lg"></div>
      <div className="w-64 h-32 bg-gray-200 rounded-lg"></div>
      <div className="w-64 h-32 bg-gray-200 rounded-lg"></div>
      <div className="w-64 h-32 bg-gray-200 rounded-lg"></div>
      <div className="w-64 h-32 bg-gray-200 rounded-lg"></div>

    </div>
  )
}

export default Carousel

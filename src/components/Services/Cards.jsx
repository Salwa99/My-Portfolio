import React from 'react'

const Cards = ({icon, title, desc}) => {
  return (
    <div className="w-full h-80 shadow-shadowOne rounded-lg flex items-center bg-gradient-to-r from-gray-100 to-gray-200 group hover:bg-gradient-to-r hover:from-gray-100 hover:to-yellow-400 transition-colors duration-150">
        <div>
            <span className='text-5xl text-yellow-500'>{icon}</span>
        </div>
        
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}

export default Cards
import React from 'react'
import image from '../../assets/19879462_6174096.svg'

const Introduction = () => {
  return (
    <div className='sm:flex flex-row align-center gap-[100px] mt-[4rem]'>
      <h1 className='text-7xl'>Welcome to my Portfolio</h1>
      <img src={image} className="sm:w-[40%] " />
    </div>
  );
}

export default Introduction
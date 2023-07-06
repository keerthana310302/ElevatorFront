import React from 'react'
import OuterCar from '../Components/Outer-Car/OuterCar';
import Shaft from '../Components/Shaft/Shaft';
import "./Home.css"


const Home = () => {
  return (
    <div className='App-container'>
        <OuterCar/>
        <Shaft/>
    </div>
  )
}

export default Home

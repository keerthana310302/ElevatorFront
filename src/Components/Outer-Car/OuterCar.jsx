import React, { useEffect, useState, useContext } from 'react';
import "./OuterCar.css"
import DataContext from "../../Context/DataContext"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import Controls from '../Controls/Controls';


const OuterCar = () => {



  const {floor, isOpen, setIsOpen, toggle, setToggle, current, destination, FloorValue } = useContext(DataContext);
  // const floor = [534,401,268,135,0]  

  useEffect(()=>{
    if(toggle)
    {
        setTimeout(() => {
            setIsOpen(true);
        }, 2000);
    }

  },[])
  
  return (
    <div className='front'>
        <div className='display'>{current}</div>
        <div className='container'>
        <div className='elevator-container'>
            <div className={`elevator ${isOpen ? 'open' : 'closed'}`}>
                <div className="door1" />
                <div className="door2" />
            </div>          
        </div>
            {isOpen?<Controls/>:<Direction/>}
        </div>
        <hr />
        <hr style={{width:"650px", marginLeft:"-25px"}}/>
        {/* <button onClick={toggleDoor}>Toggle Door</button> */}
    </div>
    
  );
};

export default OuterCar;


export const Direction = () => {
  const {floor, isOpen, setIsOpen, toggle, setToggle, current, } = useContext(DataContext);
  return (
    <div className='direction'>
        <div className='up' onClick={()=>setIsOpen(!isOpen)}> <ExpandLessIcon fontSize='large'/> </div>
        <div className='down' onClick={()=>setIsOpen(!isOpen)}> <ExpandMoreIcon fontSize='large'/> </div>             
    </div>
  )
}



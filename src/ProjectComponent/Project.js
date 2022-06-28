import React, { useState } from 'react'
import './Project.css'
import {Link} from 'react-router-dom'
import ProjectData from './ProjectData'
import Slide from 'react-reveal/Slide';


function Project() {
 const[item,setItem]= useState(ProjectData)
  return (
    <>
      <div className='prod_section'>
        <div className="main_prod">
        <Slide bottom> 
          {
            item.map((curELm)=>{
              const {id,pic,title}= curELm
              return(
                <>
                <div className='single_prod' >
            <Link to={`/ProjectDetail/${id}`}>
            <img src={pic} alt={title}/>
            </Link>
            <h3>{title}</h3>

          </div>
                </>
              )
            })
          }
          </Slide>
        </div>
      </div>
    
    </>
  )
}

export default Project
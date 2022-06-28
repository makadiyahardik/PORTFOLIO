import React, { useEffect, useState } from 'react'
import './ProjectDetail.css'
import Slide from 'react-reveal/Slide';

import ProjectData from './ProjectData'
import { Link, useParams } from 'react-router-dom'
function ProjectDetail() {
    const [product,setProduct]=useState({})
    const {id}=useParams()

    useEffect(()=>{
        getProduct()
    })

    const getProduct = () =>{
        const newProduct = ProjectData.find((item)=> item.id === parseInt(id))
        setProduct(newProduct)
    }
  return (
   <>
   <header/>
   <Slide bottom> 
   <div className='prod'> 

        <h1>{product.title}</h1>
        <img src={product.pic} alt="img"/>
        <h3>Skills :  {product.Desc}</h3>
        <a rel="noreferrer"  target="_blank" href={product.adress}>Click Here</a>
        </div>
        </Slide>
   </>
  )
}

export default ProjectDetail
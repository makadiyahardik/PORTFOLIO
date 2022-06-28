import React, { useState } from 'react'
import { BsGithub , BsLinkedin} from "react-icons/bs";
import {GrMail} from "react-icons/gr";
import './Home.css'
import Slide from 'react-reveal/Slide';
import About from '../AboutComponent/About';


function Home() {
  const[show,setShow]=useState(false)
  return (
   <>
{
  show&& <About closeButton={setShow}/>
}
     <div className='home_section'>

       <div className='two_home_div'>
       <Slide top>
<div className='right_home'>
<img src='/images/fp.jpg' alt='loading'/>
</div>
</Slide>
<Slide top>
         <div className='left_home'>
<h1>Hi, My name is<span className='hardik'> H</span>ardik</h1>
<h3>A <span className='headimg'>front-end developer</span> with a passion for learning and creating</h3>
<button className='btn' onClick={()=>setShow(true)}>Hire me</button>
 {/* <h2> 
<span className='github'><BsGithub/></span> <span className='linkedin'><BsLinkedin/></span> <span className='gmail'><GrMail/></span> 
</h2> */}

         </div>
         </Slide>
       </div>
     </div>

   </>
   
  )
}

export default Home
import React, { useState } from 'react'
import Slide from 'react-reveal/Slide';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './About.css'
function About({closeButton}) {
  const[userM,setUserName]=useState()
  const[userEmail,setEmail]=useState()

  const[userMassage,setUserMassage]=useState()
function handleInput  (e){
  e.preventDefault()

alert (  "Hello " +  (userM) + " Recieved your Mail Successfully"  );
setUserName("")
setEmail("")
setUserMassage("")

}





  return (
<>
<Slide top> 
<div className='forms'>  
<div className='main_form'> 
 
<form onSubmit={handleInput}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="name" className="form-control" id="exampleInputEmail1" value={userM} onChange={(e)=>setUserName(e.target.value)} aria-describedby="emailHelp" required/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Email Adress</label>
    <input type="email" className="form-control" id="exampleInputPassword1" value={userEmail} onChange={(e)=>setEmail(e.target.value)}  required/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
    <input type="textarea" className="form-control" id="exampleInputPassword1" value={userMassage} onChange={(e)=>setUserMassage(e.target.value)} required />
  </div>
  <button type="submit" value="submit"  className="btn btn-primary">Submit</button>
  <button onClick={()=>closeButton(false)} className="btn btn-danger mx-4">Close</button>
  <ToastContainer />
</form>
</div>
</div>
 </Slide>
</>
  )
}

export default About
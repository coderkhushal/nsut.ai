import React, { useContext, useEffect, useState } from 'react'
import TeamMembers from './TeamMembers'
import Maincontext from '../context/Maincontext'
import Footer from './Footer'

const Team = () => {

  const context= useContext(Maincontext)
  const{setmembers}= context;
  const handlehighlight=(e)=>{
    for(let i of Array.from(document.getElementsByClassName("membersnavbtn"))){
    
      if(i.classList.contains("highlight")){

        i.classList.remove("highlight");
        
      }
      
    }
    e.target.classList.add("highlight")
  }
  const loadteam=async()=>{
    const response=  await fetch("https://airg-backend.onrender.com/team")
    let data= await response.json();
    setmembers(data);
  }
  useEffect(()=>{
    loadteam()
  })
  const [memberpost , setmemberpost]= useState("All")
  return (
    <>
    <div id='team'>
      <br />
      <br />
      <br />
      <br />
      <h1 className='primary-h ' >OUR TEAM</h1>
      <p style={{fontSize:"x-large" ,marginTop:"2rem"}}>NSUT.AI is established by young researchers from NSUT, working at the world's top research institutions like Harvard, Princeton, NUS, Vanderbilt and CMU.

NSUT.AI is backed by Intel, and was established to promote research and enable interested individuals to become independent researchers by allowing them to initiate, collaborate and contribute to various research projects under the guidance of experienced researchers in Artificial Intelligence and Data Science.</p>
    </div>
    <br />
    
    <h1 className='middle-h'>Core Members</h1>
    <div id='membernav'>
      <button className='membersnavbtn' onClick={(e)=>{handlehighlight(e);setmemberpost(e.target.innerText)}}>All</button>
      {/* <button className='membersnavbtn'>President</button> */}
      <button className='membersnavbtn'onClick={(e)=>{handlehighlight(e);setmemberpost(e.target.innerText)}}>Vice President</button>
      <button className='membersnavbtn'onClick={(e)=>{handlehighlight(e);setmemberpost(e.target.innerText)}}>Director</button>
      <button className='membersnavbtn'onClick={(e)=>{handlehighlight(e);setmemberpost("Advisor")}}>Advisory</button>
    </div>
    <TeamMembers filter ={ memberpost}/>
    <Footer/>
    </>
  ) 
}

export default Team

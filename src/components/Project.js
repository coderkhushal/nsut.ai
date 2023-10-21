import React, { useState } from 'react'


const Project = (props) => {
  const[content, setcontent] = useState(props.content.slice(0,100))
  const[showcontent, setshowcontent] = useState("Show More")
  const handleshowmore=()=>{
    if(content.length <props.content.length){
      setcontent(props.content)
    }
    else{
      setcontent(props.content.slice(0,100));
    }
    if(showcontent=="Show More"){
      setshowcontent("Show Less")
    }
    else{
      setshowcontent("Show More")
    }
  }
  return (
    <div id= "project">
      <img src={props.image} style={{height:"40%",display:"flex"}} alt="" />
      <h1 className='projectheading'>{props.heading}</h1>
      <div className='content' style={{marginTop:"20px" , fontSize:"large"}}>
      <p className='projectcontent'>{content}...</p>
      </div>
      <button className='a-primary nohover' style={{height:"2rem",width:"4rem"}} onClick={handleshowmore}>{showcontent}</button>
      <a className='a-primary' href={props.code_url} >Show Code</a>
    </div>
  )
}

export default Project

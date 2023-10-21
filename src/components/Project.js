import React, { useState } from 'react'


const Project = (props) => {
  const[content, setcontent] = useState(props.content.slice(0,100))
  const[title, settitle]= useState(props.heading.slice(0,50));
  const[showcontent, setshowcontent] = useState("Show More")
  const handleshowmore=(e)=>{
    let parent = e.target.parentNode;
    if(!parent.classList.contains("expand")){
      parent.classList.add("expand")
    }
    else{
      parent.classList.remove("expand")
    }
    if(content.length <props.content.length){
      setcontent(props.content)
    }
    else{
      setcontent(props.content.slice(0,100));
    }
    if(title.length <props.heading.length){
      settitle(props.heading)
    }
    else{
      settitle(props.heading.slice(0,50));
    }

    if(showcontent==="Show More"){
      setshowcontent("Show Less")
    }
    else{
      setshowcontent("Show More")
    }
  }
  return (
    <div className= "project">
      <img src={props.image} style={{display:"flex"}} alt="" />
      <h1 className='projectheading '>{title}</h1>
      <div className='content ' style={{marginTop:"20px" , fontSize:"1.3rem"}}>
      <p className='projectcontent'>{content}</p>
      </div>
      <button className='a-primary nohover' style={{height:"2rem",width:"4rem"}} onClick={handleshowmore}>{showcontent}</button>
      <a className='a-primary' href={props.code_url} >Show Code</a>
    </div>
  )
}

export default Project

import React from 'react'

const TeamMember = (props) => {
  return (
    <div className='temmember'>
      <img src={props.image} alt="" className='memberimg'/>
      <h2 style={{fontSize:"1.8rem"}}>{props.name}</h2>
      <h2 style={{marginTop:"1rem", fontSize:"1.5rem",color:"#E70D15"}} >{props.post}</h2>
      <p className="membersabout">{props.about}</p>
      <div className='socialbox'>
      <a className='social' href={props.github}><img src="https://th.bing.com/th/id/OIP.yllcNFoUvQ3iexoQKEaRdAHaHa?pid=ImgDet&rs=1" alt="github" /></a>
      <a className='social' href={props.linkedin}><img src="https://th.bing.com/th/id/OIP.ewOD6QgB70NLIuvPhPHaUQHaHa?pid=ImgDet&w=512&h=512&rs=1" alt="" /></a>
      </div>
    </div>
  )
}

export default TeamMember

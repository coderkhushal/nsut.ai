import React, { useContext } from 'react'
import TeamMember from './TeamMember'
import Maincontext from '../context/Maincontext'

const TeamMembers = (props) => {
    const context= useContext(Maincontext)
    const {members}= context

  return (
    <div className='teammembers'>
        {/* <TeamMember/>
        <TeamMember/>
        <TeamMember/>
        <TeamMember/> */}
        {/* filter((e)=>{if(props.filter!=null){return e.post==props.filter}}) */}
        {members && members.map((e)=>{
            // props.filter==e.post
            if(props.filter==='All'){
            return (<TeamMember key={e.name} filter={props.filter}  image= {e.image} name = {e.name} post ={e.post} about= {e.about} github ={e.github} linkedin= {e.linkedin}/>)
        }
        else if(props.filter===e.post){
                return (<TeamMember key = {e.name} filter={props.filter}  image= {e.image} name = {e.name} post ={e.post} about ={e.about} github ={e.github} linkedin= {e.linkedin}/>)
            }
        })}
        {!members && <h1 className='secondary-h'>Loading</h1>
        }
    </div>
  )
}

export default TeamMembers

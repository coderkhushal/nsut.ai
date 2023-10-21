import React ,{useContext} from 'react'
import Project from './Project'
import Maincontext from '../context/Maincontext'
const Projects = () => {
  const context = useContext(Maincontext)
  const {projects} = context
  return (
    <div id='projectscontainer'>
      {projects && projects.map((e)=>{
        return (<Project image = {e.image} heading = {e.heading} content= {e.content} code_url = {e.code_url} />)
      })}
      
    </div>
  )
}

export default Projects

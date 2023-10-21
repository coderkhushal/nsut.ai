import React, { useContext, useEffect } from 'react'
import background from '../assets/background.mp4'
import Projects from './Projects'
import Maincontext from '../context/Maincontext'
import Footer from './Footer'

const Home = () => {
    const context = useContext(Maincontext);
    const {setprojects }= context;
    
    const loadcontent=async()=>{
    const response=  await fetch("https://airg-backend.onrender.com/projects")
    let data= await response.json();
    setprojects(data)
}
    useEffect(()=>{
        loadcontent();
    })
    return (
        <>
            <div id='videocontainer' >
                <video autoPlay loop muted width={"100%"} id='homebgvideo'>
                    <source src={background} type='video/mp4' />
                </video>
            </div>
            <div className="mainheading">
                <h1 className='primary-h'> NSUT.AI </h1>
                <h2 className='secondary-h'>(Netaji Subhash University of Technology)</h2>
            </div>
 

           <section id='about'>
            <h2 className='secondary-h'>About Us</h2>
            <div style={{display:"flex" , padding:"2rem", width:"90%", margin:"auto", justifyContent:"space-between"}}>
            <p style={{fontSize:"x-large"}}>Artificial Intelligence Research Group - Netaji Subhas University of Technology is a student-run, non-profit community of young researchers interested in the applications of Al and Data Science in a wide range of topics</p>
            <img id='aboutimage' src="https://th.bing.com/th/id/OIP.G7xXV8ZFcMehUJHgNCF-XwAAAA?pid=ImgDet&rs=1" alt=""  />
            </div>
            </section> 
            <br />
            <br />
            <br />
            <br />
            <br />

            <section id='projectsection'>
                <h1 className='secondary-h'>Featured Projects</h1>
                <Projects/>
            </section>

            <Footer/>
        </>


    )
}

export default Home

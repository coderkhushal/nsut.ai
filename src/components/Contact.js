import React, { useState } from 'react'

const Contact = () => {
    const [details, setdetails] =useState({name:"", email:"", phone:""})


    const handleonchange=(e)=>{
        setdetails({...details, [e.target.name]:e.target.value})
    }

    const handlesubmit=async(e)=>{
        e.preventDefault();
        e.target.parentNode.reset()
        const {name, email, phone} = details;

        let res= await fetch("https://nsutaicontacts-default-rtdb.firebaseio.com/nsutaiform.json",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({name, email, phone})
        }) 
    }
  return (
    <div id='contact'>
        <div >
            <h1 className='secondary-h '>Contact Us</h1>
        </div>
        <br />
        <form action="" className='contactform'>
            <label htmlFor="name">Name</label>
            <input required="required" type="text" name="name" id="" onChange={handleonchange}/>
            <label htmlFor="email">Email</label>
            <input required="required" type="email" name="email" id="" onChange={handleonchange}/>
            <label htmlFor="phone">Phone</label>
            <input required="required" type="number" name="phone" id="" onChange={handleonchange} />
            <button type='submit' className='submitbtn' onClick={handlesubmit}>Submit</button>
        </form>
    </div>
  )
}

export default Contact

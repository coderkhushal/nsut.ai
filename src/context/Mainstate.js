import { useState } from "react";
import Maincontext from "./Maincontext";

const Mainstate=(props)=>{

    const [projects, setprojects]= useState()

    const [members,setmembers]= useState()

    return (
        <Maincontext.Provider value={{projects,setprojects, members,setmembers}}>
            {props.children}
        </Maincontext.Provider>
    )
}

export default Mainstate
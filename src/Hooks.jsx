import { useState } from "react";


function Hooks(){

    const [name,setName]=useState("Guest");

    const [age,setAge]=useState(0);

    const [employed,setEmploye]=useState(false);

    const updatename=()=>{
        setName("Nitish");
    }

    const Incrementage=()=>{
        setAge(age+1);
    }

    const Empstatus=()=>{
        setEmploye(!employed)
    }


    return(
        <>
        <div>
            <p>Name:{name}</p>
            <button onClick={updatename}>Change Name</button>
        </div>

        <div>
        <p>Age:{age}</p>
        <button onClick={Incrementage}>Updated age</button>
    </div>

    <div>
        <p>IsEmployed:{employed ? "Yes":"No"}</p>
        <button onClick={Empstatus}>Updated Employee Status</button>
    </div>
    </>
    )

}

export default Hooks;
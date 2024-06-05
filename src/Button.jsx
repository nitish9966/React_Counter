

function Button(){

    // const message=()=>console.log(`You clicked me`)

    // let count=0;

    // const message2=(name)=>{
    //     if(count<3){
    //         count++
    //         console.log(`${name} you clicked ${count} times`)
    //     }
    //     else{
    //         console.log(`${name} stop clicking me`)
    //     }
    // }
    const message2=(e)=>{
        e.target.textContent="OUCH! 🤕";
    }
    

    return(
        <>
        {/* <div>
        <label name="Name">Name:</label>
        <input type="text" name="Name" placeholder="Enter your name"></input>
        </div> */}
        <button onDoubleClick={(e) =>  message2(e)}>Click me 😉</button>
        </>
    )
}

export default Button;
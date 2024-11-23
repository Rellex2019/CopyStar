import React from "react";



const H = ()=>{


    const handleClick = ()=>{
        console.log('HI');
    }



    return(
        <>
        <div onClick={handleClick} className="div"></div>
        Привет
        </>
    )
}
export default H;
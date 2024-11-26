import React from "react";


const NotFound = ()=>{



    return(
        <div style={{width:'100vw', height:'80vh', backgroundColor:'#DCDCDC',flexDirection:'column' ,display:'flex', justifyContent:'center', alignItems:'center'}} className="cont-no-found">
            <div className="no-found-404" style={{color:'#828282', fontSize:200}}>404</div>
            <div className="no-found-text" style={{color:'#828282', fontSize:50}}>Page Not Found</div>
        </div>
    )
}
export default NotFound;
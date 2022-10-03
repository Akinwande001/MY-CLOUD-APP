import React from "react";
 function CopyRight(){

    const currentYear =  new Date().getFullYear();
    const conStyle ={
        textAlign :"center",
        fontSize : "1rem",
        paddingBottom : "20px",
        colors: "grey"
    }
    return(
    
    <p style={conStyle}>Freestyle Project {currentYear}</p>
    
 )}

 export default CopyRight

import React from "react"

export default function Main(props) { 

    const styles = {
        backgroundColor: props.on ? "blue" : "white"
    }    
       
    return (
        
        <div style={styles} className="box" onClick={() => props.toggle(props.id)}> </div>                  
          
       )
}
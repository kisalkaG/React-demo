import React from "react"

export default function Star() { 
    const [starWarData, setStarWarData] = React.useState({})


    fetch("https://swapi.dev/api/people/1")
       .then(res => res.json())
       .then(data => setStarWarData(data))
    return (
        <div>
            <pre>{JSON.stringify(starWarData,null,2)}</pre>
        </div>
    )
}
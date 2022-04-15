import React from "react"


export default function Form() { 

    const [formData, setFormData] = React.useState( {
        email: "",
        password: "",
        passwordConfirm : "",
        joinedNewsLetter : true

    })

    function handlesubmit(event) {
       event.preventDefault()

    }

    function handleChange(event) {
        const {name , value , type , checked} = event.target
     setFormData (prevFormData => {
         return {
             ...prevFormData,
             [name] : type === "checkbox" ? checked: value
         }
     })
    }
 

   return (
       <div>
           <form onSubmit={handlesubmit}>
           <input 
               type="email"
               placeholder="Email"
               name="email"
               onChange={handleChange}
               value={formData.email}
            /> 

            <br></br> 
            <br></br>

            <input 
               type="password"
               placeholder="password"     
               name="password"  
               onChange={handleChange}    
               value={formData.password}  
            /> 

            <br></br> 
            <br></br>

            <input 
               type="password"
               placeholder="Confirmed password"      
               name="passwordConfirm"      
               onChange={handleChange} 
               value={formData.passwordConfirm}  
            /> 

            <br></br> 
            <br></br>

            <input 
              type="checkbox"
              id="joinedNewsLetter"    
              name="joinedNewsLetter"  
              onChange={handleChange}    
              checked={formData.joinedNewsLetter}   
            />

            <label htmlFor="joinedNewsLetter">I want to join the newsletter</label>

            <br></br> 
            <br></br>

            <button>Sign Up</button>

           </form>
       </div>
   )

}
import React from "react"

export default function Form() { 
const[formData, setFormData] = React.useState(
    {
        firstName : "" , lastName : "", email : "" , comment: "" , isFriendly:true , employment : "" , favColor:""
    }
)

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
        <form>
            <input 
               type="text"
               placeholder="First Name"
               onChange={handleChange}
               name="firstName"
               value={formData.firstName}
            /> 
            <br></br> 
            <br></br>

            <input 
               type="text"
               placeholder="Last Name"
               onChange={handleChange}
               name="lastName"
               value={formData.lastName}
            /> 

            <br></br> 
            <br></br>

            <input 
               type="email"
               placeholder="Email"
               onChange={handleChange}
               name="email"
               value={formData.email}
            /> 

            <br></br> 
            <br></br>

            <textarea 
              placeholder="Comment" 
              onChange={handleChange}
              name="comment"
              value={formData.comment}
            />

            <br></br> 
            <br></br>

            <input 
              type="checkbox"
              id="isFriendly"
              checked={formData.isFriendly}
              onChange={handleChange}
              name="isFriendly"
            />

            <label htmlFor="isFriendly">Are you friendly?</label>

            <br></br> 
            <br></br>

            <fieldset>
                <legend>Current employment status</legend>

                <input 
                  type="radio"
                  id="unemployed"
                  name="employment"
                  value="unemployed"
                  onChange={handleChange}
                />

                <label htmlFor="unemployed">Unemployed</label> 
                <br></br> 
                <input 
                  type="radio"
                  id="part-time"
                  name="employment"
                  value="part-time"
                  onChange={handleChange}
                />

                <label htmlFor="part-time">Part-time</label> 
                <br></br> 

                <input 
                  type="radio"
                  id="full-time"
                  name="employment"
                  value="full-time"
                  onChange={handleChange}
                />

                <label htmlFor="full-time">Full-time</label> 
            </fieldset>

            <br></br> 
            <br></br> 

            <label htmlFor="favColor">What is your favourite color?</label>
            <br></br> 

            <select
               id="favColor"
               value={formData.favColor}
               name="favColor"
               onChange={handleChange}
            >

                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="purple">Purple</option>
                <option value="yellow">Yellow</option>

            </select>
        </form>
    )
}
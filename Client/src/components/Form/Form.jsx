import Validation from "./Validation";
import React, { useState } from "react";

const Form = ({login}) =>
{
    const [userData, setUserData] = useState(
    {
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState(
    {
        email: "",
        password: ""
    })

    const handleChange = (event) =>
    {
       setUserData({
        ...userData,
        [event.target.name]: event.target.value
       }) 

       setErrors(
        Validation({
            ...userData,
            [event.target.name]: event.target.value
        })
       )
    }

    const handleSubmit = (event) =>
    {
        event.preventDefault()
        login(userData);
    }

    return(

        <div>
            <form onSubmit = {handleSubmit} >
                <h1>Login</h1>

                <label htmlFor = "email" >Email: </label>
                <input type = "email" style = {{marginLeft:'28px'}} placeholder = "example@gmail.com" 
                name = "email" value = {userData.value} onChange = {handleChange}/>
                {errors.email && <p style = {{color:'red',marginTop: '-23px' ,marginLeft:'400px'}}>{errors.email}</p>}
                <br />
                <br />
                <br />
                <label htmlFor = "password" > Password: </label>
                <input type = "password" name = "password" value = {userData.value} 
                placeholder = "Enter your password" onChange = {handleChange}/>
                {errors.password && <p style = {{color:'red', marginLeft: '630px', marginTop:'-22px'}}>{errors.password}</p>}
                <br />
                <br />
                <button>Sumbit</button>
            </form>
        </div>
    );
}
export default Form;

import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const Create = () => {

    const navigate = useNavigate();

    const [ name, setName ] = useState("")
    const [ date, setDate ] = useState("")
    const [ under30Mins, setUnder30Mins ] = useState(false)
    
    //Create an array to store errors from the API
    const [errors, setErrors] = useState([]);

    const createRecipe = (e) => {
        e.preventDefault()
        // if (name.trim().length == 0){
        //     setName("");
        //     return;
        // }
        let body = {
            "name" : name,
            "dateMade" : date,
            "under30Minutes" : under30Mins

        }
        // ! MAKE AN AXIOS REQUEST TO MY API
        axios.post("http://localhost:8000/api/recipes", body)
            .then ( res => {
                console.log(res.data)
                // setName("")
                // setDate("")
                // setUnder30Mins(false)
                navigate("/dashboard")
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })            
            // .catch ( errors => console.log(errors))
        // ! not https. WE ARE NOT SET UP TO RECEIVE SECURE REQUESTS YET.
    }


    return (
        <fieldset>
            <legend>Create.jsx</legend>
            <form onSubmit={createRecipe}>
                <p>
                    Name:
                    <input type="text" value = {name} onChange = {(e) => setName(e.target.value)}/>
                </p>
                <p>
                    Date Made:
                    <input type="date" value = {date} onChange = {(e) => setDate(e.target.value)}/>
                </p>
                <p>
                    Under 30 mins?
                    <input type="checkbox" checked = {under30Mins} onChange = {(e) => setUnder30Mins(e.target.checked)}/>
                </p>
                <button>Submit</button>
            </form>
            <Link to={`/dashboard`}>Dashboard</Link>
            {
                errors.map((error) => <p> { error } </p>)
            }
        </fieldset>
    )
}

export default Create
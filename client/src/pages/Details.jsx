import React, {useState,  useEffect} from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const Details = () => {

    // GET PATH VARIABLE
    const {recipe_id} = useParams()

    // STATE
    const [oneRecipe, setOneRecipe] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipes/${recipe_id}`)
            .then(res => setOneRecipe(res.data))
            .catch(errors => console.log(errors))
    }, [])
    return (
        <fieldset>
            <legend>Details.jsx</legend>
            {
                (oneRecipe) ?
                <>
                    <h1>{oneRecipe.name}</h1>
                    <h2>Date Made: {new Date(oneRecipe.dateMade).toLocaleDateString('en-CA')}</h2>
                    <h2>Under 30 minutes? {(oneRecipe.under30Minutes) ? "Yes" : "No" } </h2>
                </> : <h1>Loading...</h1>
            }
            <Link to={`/dashboard`}>Dashboard</Link>
        </fieldset>
        
    )
}

export default Details
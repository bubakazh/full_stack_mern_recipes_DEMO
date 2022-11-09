import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Dashboard = () => {

    const [ recipeList, setRecipeList ] = useState([])
    const [ flip, setFlip ] = useState(false)

    // ! MAKE AN AXIOS GET REQUEST
        useEffect(() => {
            axios.get("http://localhost:8000/api/recipes")
            .then( res => {
                console.log(res.data)
                setRecipeList(res.data);
            })
            .catch( errors => console.log(errors.response.data.errors))
        }, [flip])

        // const recipeList = recipe

        const deleteRecipe = (recipe_id) => {
            axios.delete(`http://localhost:8000/api/recipes/${recipe_id}`)
                .then( res => {
                    console.log(res.data)
                    setFlip(!flip)
                })
                .catch(errors => console.log(errors))
        }

    return (
        <fieldset>
            <legend>Dashboard.jsx</legend>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name: </th>
                        <th>Date Made:</th>
                        <th>Cook Under 30?</th>
                        <th>Created At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {

                    recipeList.map( (recipe) => {
                        const {_id, name, dateMade, under30Minutes, createdAt} = recipe;
                        return(
                            <tr>
                                <td align = "left"> { _id }</td>
                                <td align = "left"> { name } </td>
                                <td align = "center"> { new Date(dateMade).toLocaleDateString('en-CA') } </td>
                                <td align = "center"> { under30Minutes ? " Yes" : " No" } </td>
                                <td align = "center"> { createdAt } </td>
                                <td align = "right">
                                    <Link style = {{margin: 3}} to = {`/recipes/${_id}`}>View</Link>| 
                                    <Link style = {{margin: 4}}to = {`/recipes/edit/${_id}`}>Edit</Link>| 
                                    <button style = {{marginLeft: 6}} onClick = {() => deleteRecipe(_id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })

                    }
                </tbody>
            </table>
            <Link to={`/`}>back</Link>
        </fieldset>
    )
}

export default Dashboard
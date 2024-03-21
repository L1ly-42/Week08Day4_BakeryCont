import { useState } from "react";
import "./CakeForm.css"

const CakeForm = ({cakes, addCake}) => {
    
    const [cakeName, setCakeName]=useState("")
    const [ingredients, setIngredients]=useState([])
    const [rating, setRating]=useState(0)
    
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        if (handleValidation()) {
          const newCake = {
            cakeName,
            ingredients,
            rating
            // these are object keys
          }
          console.log(newCake)
          addCake(newCake)
        }
      }
      const handleValidation = () =>{
        let validation = true;
      
        if(cakes.find(cake => cake.cakeName === cakeName)){
          validation = false;
          // .find function allows the users name to be compared to the prop user
        }
    
      
        if(cakeName === "" || ingredients.length === 0 || rating === 0){
          validation = false;
        }
      
        return validation
      }
    
    
    
    return ( 
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name="cakeName"
            placeholder="Enter Cake Name"
            value={cakeName}
            onChange={(event) => setCakeName(event.target.value)}
            />
            <input 
            type="text"
            name="ingredients"
            placeholder="Enter Ingredients"
            value={ingredients}
            onChange={(event) => setIngredients(event.target.value.split(','))}
            />
            <input 
            type="number"
            name="ratings"
            placeholder="Enter Ratings"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
            />
            <input type="submit" name="submit"/>
        </form>

     );
}
 
export default CakeForm;
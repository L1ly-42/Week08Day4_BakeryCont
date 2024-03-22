import Cake from "../component/Cake";
import {useState} from 'react';
import CakeForm from "../component/CakeForm";
import SearchForm from "../component/SearchForm";
import "./Bakery.css"

const Bakery = () => {
    //UseStates
    const[filteredCakes, setFilteredCakes] = useState([])
    const [cakes, setCakes] = useState([
        
            {
                cakeName: "Lemon Drizzle",
                ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
                rating: 5
            },
            {
                cakeName: "Tea Loaf",
                ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
                rating: 3
            },
            {
                cakeName: "Brownie",
                ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
                rating: 4
            },
            {
                cakeName: "Carrot Cake",
                ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
                rating: 5
            }
          ]
    );

    //Function for adding a new cake to the cake list
    const addCake = (newCake) =>{
        setCakes([...cakes, newCake])
        console.log(cakes)
    }

    //function for assigning filtered cake list to the one set in search form submission
    const filterCake = (filteredCakes)=>{
        setFilteredCakes(filteredCakes)
    }

    //function that chooses a specific cake list to render based on if 
    //user has used the search form
    const filtering = () => {
        
        if(filteredCakes.length === 0){
            return cakes.map((cake, index) => {
                return <Cake cake={cake}  key={index}/>
        
            });
        } else {
            return filteredCakes.map((cake, index) => {
                return <Cake cake={cake}  key={index}/>
            });
        }
    }
    
    return ( 
        <>
        <div className="forms">
            <CakeForm cakes = {cakes} addCake={addCake} />
            <SearchForm cakes={cakes} filterCake={filterCake}/>
        </div>
        <div className= "cakeList">
            {filtering()}
        </div>
        </>
        


     );
}
 
export default Bakery;
import Cake from "../component/Cake";
import {useState} from 'react';
import CakeForm from "../component/CakeForm";
const Bakery = () => {
    //  const[sum,setSum] = useState(0);

    //  const sellCake = () =>{
    //     setSum 
    //  }
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

    const addCake = (newCake) =>{
        setCakes([...cakes, newCake])
        console.log(cakes)
    }

    const cakeElements= cakes.map((cake, index) => {
        return <Cake cake={cake}  key={index}/>
    });
    return ( 
        <>
        {cakeElements}
        <CakeForm cakes = {cakes} addCake={addCake}/>
        </>
        


     );
}
 
export default Bakery;
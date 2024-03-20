import Cake from "../component/Cake";
import {useState} from 'react';
const Bakery = () => {
    // const[sum,setSum] = useState(0);

    const [victoriaSponge, setVictoriaSponge] = useState({
		cakeName: "Victoria Sponge",
	   	ingredients: [
   			"eggs",
      		"butter",
	      	"sugar",
   		   	"self-raising flour",
      		"baking powder",
	      	"milk"
  		],
	  	price: 5,
   		rating: 5,
	});
    const [teaLoaf, setTeaLoaf] = useState({
        cakeName: "Tea Loaf",
          ingredients: [
              "eggs",
             "oil",
             "dried fruit",
                 "sugar",
             "self-raising flour",
             "strong tea",
         ],
         price: 2,
         rating: 3
   });
    const [carrotCake, setCarrotCake] = useState({
        cakeName: "Carrot Cake",
          ingredients: [
               "carrots",
                 "walnuts",
             "oil",
                 "cream cheese",
                 "flour",
             "sugar",
          ],
          price: 8,
          rating: 5
   });

   
   
    return ( 
        <>
        <Cake cake = {victoriaSponge}  />
        <Cake cake = {teaLoaf} />
        <Cake cake = {carrotCake}/>
        </>
        


     );
}
 
export default Bakery;
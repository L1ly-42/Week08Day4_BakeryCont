import "./Cake.css"
const Cake = ({cake}) => {
   
   
    const createNewItem = () =>{ 
        return cake.ingredients.map((item, index) =>{
                return(
                    <li key={index}>{item}</li>
                )
            })   
    }
    
    return ( 
        <>
        <h1> Cake name: {cake.cakeName} </h1>
        <h2>Ingredients:</h2>
        <ul>
            {createNewItem()}
            {/* <li>{cake.ingredients.toString()}</li> */}
        </ul>
        <h3>Rating: {cake.rating}</h3>  
        </>
       
     );
}
 
export default Cake;
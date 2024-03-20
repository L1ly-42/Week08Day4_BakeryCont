

const Cake = ({cake}) => {
   
   
    const createNewItem = () =>{ 
        return cake.ingredients.map((item) =>{
                return(
                    <li>{item}</li>
                )
            })   
    }
    
    return ( 
        <>
        <h1> Cake name: {cake.cakeName} </h1>
        <h2>Ingredients:</h2>
        <ul>
            {createNewItem()}
        </ul>
        <h3>Price: £{cake.price}</h3>
        <h3>Rating: {cake.rating}</h3>  
        </>
       
     );
}
 
export default Cake;
import { useState } from "react";
import "./SearchForm.css"

const SearchForm = ({cakes, filterCake}) => {
    const [searchTerm,setSearchTerm] = useState("")
    const submitSearch = (e) => {
        e.preventDefault()
        // if(cakes.find(cake => cake.cakeName === searchTerm)){
           
        // }
     const filteredCakes = cakes.filter((cake) => {
            return cake.cakeName.toLowerCase().includes(searchTerm.toLowerCase())
        })
        filterCake(filteredCakes)

    }
    return ( 
      
        <form onSubmit={submitSearch}>
            <input 
            type="text"
            name="cakeNameSearch"
            placeholder="Search Cakes"
            value={searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)}
             />
             <input type="submit" name="submit" />
        </form>
     );
}
 
export default SearchForm;
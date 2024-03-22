import { useState } from "react";
import "./SearchForm.css"

const SearchForm = ({cakes, filterCake}) => {

    //UseStates
    const [searchTerm,setSearchTerm] = useState("")

    //Function that filters cake by the search term
    const submitSearch = (e) => {
        e.preventDefault()
     const filteredCakes = cakes.filter((cake) => {
            return cake.cakeName.toLowerCase().includes(searchTerm.toLowerCase())
        })
        filterCake(filteredCakes);
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
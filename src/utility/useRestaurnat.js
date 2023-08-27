import { useEffect, useState } from "react";
import { Fetch_Menu_URL } from "../components/config";

const useRestaurant = (id) =>{
    const [restaurant , setRestaurant] = useState(null) ; 

    //Get data from API

    useEffect(()=>{
        getRestaurantMenu() ; 
    } , [])

    async function getRestaurantMenu() {
        const data = await fetch( Fetch_Menu_URL + id)
        const json = await data.json() ;

        setRestaurant(json.data) ; 
    }
    
    // Return the state 
    return restaurant ; 

}

export default useRestaurant ; 
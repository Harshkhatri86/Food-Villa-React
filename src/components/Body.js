import { restrauntlist } from "./config";
import RestrauntCard from "./RestrauntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { filterData } from "../utility/helper";
import useOnline from "../utility/useOnline"


const Body = () => {

  const [filterRestraunts , setFilteredRestraunts] = useState([]) ; 
  const [allRestraunts , setAllRestraunts] = useState([])

  const [searchText , setSearchText] = useState("")
  // const offline = useOnline() ; 

  useEffect(() =>{
    getRestraunt() ; 
  } , [])
  
  async function getRestraunt(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json() ;
    setAllRestraunts(json.data?.cards[2]?.data?.data?.cards)
    setFilteredRestraunts(json.data?.cards[2]?.data?.data?.cards)
  }

  if(!allRestraunts){
    return null; 
  }

  // if(!offline)
  // {
  //   return <h1>Offline , please check your internet connection </h1>
  // }
  return allRestraunts.length === 0 ? <Shimmer/> : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="Searchinput"
          value={searchText} 
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
        />

        <button className="Search-btn" onClick={() =>{

          const data = filterData(searchText , allRestraunts ) ; 
          console.log(data)

          setFilteredRestraunts(data); 

        }}> Search </button>
      </div>
        
      <div className="restraunt-list">


        { filterRestraunts?.length == 0 ? <h1>restaurant not found </h1> :    filterRestraunts.map((restraunt) => {
          return <RestrauntCard {...restraunt.data} key={restraunt.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;

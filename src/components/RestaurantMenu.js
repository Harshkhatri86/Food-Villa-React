import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "./config";
import useRestaurant from "../utility/useRestaurnat";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [menu, setMenu] = useState([]);

  const res = useRestaurant(id) ; 


  return (
    <div>
      <div>
        <h1>Restaurant Id : {id}</h1>
        <h2>{res.name}</h2>
        <img src={IMG_CDN_URL + res.cloudinaryImageId} alt="" />
        <p>{res.avgRating} star</p>
        <p>{res.areaName}</p>
      </div>
      <div>
        <h1>Menu  </h1>
        <ol>
          {Object.values(menu.map((ob) => {
              <li>
                {ob.card.card.title}
                {/* {console.log(ob.card.card.title)} */}
              </li>;
            }) )}
        </ol>
      </div>
    </div>
  );
};
export default RestaurantMenu;

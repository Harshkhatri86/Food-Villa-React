import { IMG_CDN_URL } from "./config";

const RestrauntCard = ({cloudinaryImageId , name , cuisines , avgRating}) => {
    // const {cloudinaryImageId , name , cuisines , avgRating} = restraunt.data ; 
  return (
    <div className="card">
      <img src={ IMG_CDN_URL +cloudinaryImageId} />  {/** '?' is Optional chaining is JS Concept */}
      <h2>{name}</h2>
      <h3>{cuisines.join(" , ")}</h3>
      <h4>{avgRating} star </h4>
    </div>
  );
};

export default RestrauntCard ; 
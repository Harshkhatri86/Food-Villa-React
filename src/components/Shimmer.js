// import { SkeletonComponent } from '@syncfusion/ej2-react-notifications';
// import { ShimmerCircularImage } from "react-shimmer-effects";
function Shimmer() {
  return (
    <div className="restraunt-list">
      {/* <div className="shimmer-card">
        <ShimmerCircularImage size={150} />;
        <ShimmerCircularImage size={150} />;
      </div> */}
      {/* <div className="shimmer-card"></div> */}
      {/* <div className="restraunt-list"> */}
        {Array(10).fill("").map((e) =>{
            <div className="shimmer-card"></div>
        })}
        
      </div>
    // </div>
  );
}
export default Shimmer ; 

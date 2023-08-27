import { useState } from "react";
import Logo from "../assets/food Villa.png"
import { Link } from "react-router-dom";
import useOnline from "../utility/useOnline";


const LoggedInUser = () => {
  // Make API call for authentication 
  return true ; 
}

export const Title = () =>{
    return(
      <a href="/">
        <img src={Logo} alt="logo" className="logo"/>
      </a>
    )
  }

  
export const Header = () => {
  const [title  , setTitle] = useState("Food Villa")
  const [isLoggedIn , setIsLoggedIn] = useState(true) ; 

  const isOnline = useOnline() ;
    return (
      <>
        <div className="header">
          <Title/>
          {/* <h1>{title}</h1> */}
          {/* <button onClick={() =>setTitle("new food app")}> Change Title</button> */}
          <div className="nav-items">
            <ul>
            < Link to="/"><li>Home</li></Link> 
            <Link to="/about"><li>About</li></Link> 
            <Link to="/contact"><li>Contact</li></Link> 
            <Link to="/cart"><li>Cart</li></Link>  
            <li>  {isOnline ? "✅" : "🔴"} </li>
            </ul>
            
          </div>
          { isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}> Logout</button> : <button onClick={() => setIsLoggedIn(true)}> Login</button>}
          
          
        </div>
      </>
      
    );
  };
import { Outlet } from "react-router-dom";

const About =() =>{
    return(
        <div>
            <h1>This is about us page</h1>
            <p>This is namaste react</p>
            <Outlet/>
        </div>
    )
}

export default About ; 
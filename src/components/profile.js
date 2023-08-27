import { useEffect } from "react";

const Profile = () =>{
    useEffect(() =>{
        const timer = setInterval(() =>{
            console.log("Namaste React")
        } , 1000)

        return () =>{
            // when we are unmounting the componets this function will return or its an componnets will unmount method 
            console.log("useEffect return") ; 
            clearInterval(timer)

        }
    }, [])
    return (
        <div>
            <h2>Profile Components</h2>
        </div>
    )
}

export default Profile ; 
import { useRouteError } from "react-router-dom";


const Error = () =>{
    const errr = useRouteError()
    console.log(errr) ; 
    return(
        <div>
            <h1>Opps</h1>
            <h1>Something went wrong</h1>
            <h2>{errr.status + " : " + errr.statusText }</h2>
        </div>
    )
}
export default Error ; 
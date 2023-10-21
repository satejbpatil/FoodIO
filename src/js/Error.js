import { useRouteError } from "react-router-dom";

const error = () => {
    const err= useRouteError();
    console.log(err);
    return (
        <>
        <h1>Opps!!</h1>
        <h2>{err.status+" : "+err.statusText}</h2>
        </>
    )
}
export default error;
import { NavLink } from "react-router-dom";
const Error = () =>
{
    return(
        <div>
            <br />
            <br />
            <br />
            <h1>¡ERROR 404!</h1>
            <h2>Page Not Found</h2>
            <br />
            <NavLink to = '/home'><button>Back</button></NavLink>
        </div>
    );
}
export default Error;
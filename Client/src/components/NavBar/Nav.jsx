import SearchBar from "../SearchBar/SearchBar";
import { NavLink, useLocation } from "react-router-dom";

const Nav = (props) =>
{
    const {onSearch, clearCharacters, logOut} = props;
    const location = useLocation();

    if (location.pathname !== '/')
    {
        return(
            <div>
                <NavLink to = "/home"><button style = {{marginLeft:'50px', marginRight:'20px'}}>Home</button></NavLink>
                <NavLink to = "/about" style = {{marginLeft: '10px', marginRight:'20px'}}><button>About</button></NavLink>
                <NavLink to = './favorites'><button style = {{marginLeft: '10px', marginRight:'500px'}}>Favorites</button></NavLink>
                <NavLink to = "/"><button style = {{marginLeft:'800px'}} onClick = {logOut}>Log Out</button></NavLink>
                <hr />
                <br />
                {location.pathname === '/home' && (<SearchBar onSearch = {onSearch} clearCharacters = {clearCharacters}/>)}
            </div>
        );
    }
}
export default Nav;
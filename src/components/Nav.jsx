import SearchBar from "./SearchBar";

const Nav = () =>
{
    return(
        <div>
            <SearchBar onSearch = {(characterID) => alert(characterID)} />
        </div>
    );
}
export default Nav;
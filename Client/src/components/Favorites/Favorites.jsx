import { connect } from "react-redux";
import Card from "../Card/Card";
import { NavLink } from "react-router-dom";
import { filterCards, orderCards } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Favorites = ({myFavorites}) =>
{
    const [aux, setAux] = useState(false);
    const dispatch = useDispatch();

    const handleOrder = (event) =>
    {
        dispatch(orderCards(event.target.value));
        setAux(true);
    }

    const handleFilter = (event) =>
    {
        dispatch(filterCards(event.target.value));
    }

    return(
        <div>
            <br />
            <NavLink to = "/home"><button style = {{marginLeft:'0px', marginRight:'10px', backgroundColor: 'green', color:'white'}}>◀</button></NavLink>
            <label htmlFor = "" style = {{marginLeft: '10px', marginRight:''}} >Order </label>
            <select onChange = {handleOrder}> Order
                <option value = "A" > Upward </option>
                <option value = "D" > Falling </option>
            </select>
            <label htmlFor = "" style = {{marginLeft: '10px'}} >Gender </label>
            <select onChange = {handleFilter} > Filter
                <option value = "Male" > Male </option>
                <option value = "Female" > Female </option>
                <option value = "Genderless" > Genderless </option>
                <option value = "unknown" > Unknown </option>
                <option value = "allChar" > All </option>
            </select>
            {
                    myFavorites?.map((fav) =>
                    {
                        if (fav)
                        {
                            return(
                                <Card
                                key = {fav.id}
                                id = {fav.id}
                                name = {fav.name}
                                species = {fav.species}
                                gender = {fav.gender}
                                origin = {fav.origin}
                                image = {fav.image}/>
                            );
                        }
                    })
            }
        </div>
    );
}

const mapStateToProps = (state) => 
{
    return{
        myFavorites: state.myFavorites
    };
}

export default connect(
    mapStateToProps,
    null
)(Favorites);

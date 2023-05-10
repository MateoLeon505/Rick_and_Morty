import { NavLink, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";

const Card = ({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) => 
{
   const location = useLocation();

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () =>
   {
      if (isFav)
      {
         setIsFav(false);
         removeFav(id);
      }
      else 
      {
         setIsFav(true);
         addFav({id, name, status, species, gender, origin, image});
      }
   }

   useEffect(() => 
   {
      myFavorites.forEach((fav) => 
      {
         if (fav.id === id)
         {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div>
         <br />
         <br />
         <button onClick = {handleFavorite} style = {{marginRight:'-30px', backgroundColor:'lightgrey'}} >{isFav ? '❤️‍🔥' : '🤍'}</button>
         {
            location?.pathname === '/home' 
            && <button onClick = {() => onClose(id)} style = {{marginLeft: '270px', backgroundColor:'white', color: 'black'}}> ☠ </button>
         }

         <br />
         <NavLink to = {`/detail/${id}`}> <h2> {name} </h2></NavLink>
         <img src = {image} alt = {name} />
      </div>
   );
}

const mapStateToProps = (state) =>
{
   return {
      myFavorites: state.myFavorites
   };
}

const mapDispatchToProps = (dispatch) =>
{
   return{
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

export default connect (
   mapStateToProps,
   mapDispatchToProps)(Card);

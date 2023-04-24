const Card = (props) => 
{
   return (
      <div>
         <button onClick = {() => props.onClose(props.id)} > X </button>
         <h2>{props.name}</h2>
         <p>{props.status}</p>
         <p>{props.species}</p>
         <p>{props.gender}</p>
         <p>{props.origin}</p>
         <img src = {props.image} alt = {props.name} />
      </div>
   );
}
export default Card;

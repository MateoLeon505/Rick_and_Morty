import Card from './Card';

const Cards = (props) => 
{
   const {characters} = props;
   
   return(
      characters.map((character) =>
      (
      <div> 
         <Card key = {character.id}
               id = {character.id}
               name = {character.name}
               status = {character.status}
               species = {character.species}
               gender = {character.gender}
               origin = {character.origin.name}
               image = {character.image}
               onClose = {() => alert('Emulamos que se cierra la card')}
               />
      </div>))
   );
}
export default Cards;

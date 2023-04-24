import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import { useState } from 'react';

function App() 
{
   const [characters, setCharacters] = useState([]);

   function onSearch(id) 
   {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => 
      {
         if (data.name) 
         {
            setCharacters((oldChars) => [...oldChars, data]);
         } 
         else 
         {
            alert('¡No hay personajes con este ID!');
         }
      });
   }
   //-----------------------------------------------------------------
   const onClose = (id) =>
   {
         const filter =  characters.filter((char) => char.id !== id )
         setCharacters(filter);
   }
   //-----------------------------------------------------------------
   return (
      <div className = 'App'>
         <Nav onSearch = {onSearch}></Nav>
         <Cards characters = {characters} onClose = {onClose}/>
      </div>
   );
}
export default App;

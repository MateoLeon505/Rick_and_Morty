import './App.css';
import Form from './components/Form/Form';
import Cards from './components/Cards/Cards';
import Nav from './components/NavBar/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import Favorites from './components/Favorites/Favorites';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

const App = () => 
{
   const [characters, setCharacters] = useState([]);
   //-----------------------------------------------------------------
   const URL_BASE = 'https://rickandmortyapi.com/api/character';
   const API_KEY = '0d7df450b32b.d23290535a7cef5e7691';
   //-----------------------------------------------------------------
   const navigate = useNavigate();
   const EMAIL = 'mateolt505@gmail.com';
   const PASSWORD = '123asd';
   const [access, setAccess] = useState(false);
   //-----------------------------------------------------------------
   const onSearch = (id) => 
   {
      //fetch(`${URL_BASE}/${id}?key=${API_KEY}`)
      fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.json())
      .then((data) => 
      {
         if (data.name) 
         {
            const characterAdded = characters.some(character => character.id === data.id);
            if (!characterAdded) setCharacters((oldChars) => [...oldChars, data]);
            else alert('Personaje ya agregado')
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
   const clearCharacters = () =>
   {
      setCharacters([]);
   }
   //-----------------------------------------------------------------
   const login = (userData) =>
   {
      if (userData.email === EMAIL && userData.password === PASSWORD) 
      {
         setAccess(true);
         navigate('/home')
      }
      else alert('Email y/o contraseña incorrectos')
   }   

   const logOut = () =>
   {
      setAccess(false);
   }
   //-----------------------------------------------------------------
   useEffect(() => 
   {
      !access && navigate('/');
   }, [access]);
   //-----------------------------------------------------------------
   return (
      <div className = 'App'>
         <Nav onSearch = {onSearch} clearCharacters = {clearCharacters} logOut = {logOut}/>
         <Routes>
            <Route exact path = '/' element = {<Form login = {login} access = {access}/>}> </Route>
            <Route path = '/home' element = {<Cards characters = {characters} onClose = {onClose}/>}></Route>
            <Route path = '/about' element = {<About />}></Route>
            <Route path = '/favorites' element = {<Favorites />}></Route>
            <Route path = '/detail/:id' element = {<Detail />}></Route>
            <Route path = '*' element = {<Error/>}></Route>
         </Routes>
      </div>
   );
}
export default App;

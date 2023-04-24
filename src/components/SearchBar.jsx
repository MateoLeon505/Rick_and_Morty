import { useState } from "react";

const SearchBar = (props) => 
{
   const [id, setId] = useState('');
   const {onSearch} = props;

   const handleSearch = () =>
   {
      onSearch(id);
   }

   const handleChange = (event) =>
   {
      setId(event.target.value);
   }

   const randomSearch = () =>
   {
      const random = Math.floor(Math.random() * 826) + 1;
      onSearch(random);
   }
   
   return (
      <div>
         <input type = 'search' onChange = {handleChange} value = {id}/>
         <button onClick = {handleSearch}> Agregar </button>
         <br />
         <button onClick = {randomSearch} > Random </button>
      </div>
   );
}
export default SearchBar; 

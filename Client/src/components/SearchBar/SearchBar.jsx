import { useState } from "react";

const SearchBar = (props) => 
{
   const [id, setId] = useState('');
   const {onSearch, clearCharacters} = props;

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
         <br />
         <input type = 'search' onChange = {handleChange} value = {id} placeholder = "Character id"/>
         <button onClick = {handleSearch}> Add🆕 </button>
         <button onClick = {randomSearch} style = {{marginLeft: '2px'}}> Random🔀 </button>
         <button onClick = {clearCharacters}style={{marginLeft:'28px'}}> Clean </button>
      </div>
   );
}
export default SearchBar; 

import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import characters from './data.js';

function App() 
{
   return (
      <div className = 'App'>
         <Nav></Nav>
         <Cards characters = {characters} />
      </div>
   );
}
export default App;
{/* <Card
id = {Rick.id}
name = {Rick.name}
status = {Rick.status}
species = {Rick.species}
gender = {Rick.gender}
origin = {Rick.origin.name}
image = {Rick.image}
onClose = {() => alert('Emulamos que se cierra la card')}
/> */}
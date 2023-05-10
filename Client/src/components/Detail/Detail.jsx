import { useParams, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = (props) =>
{
    const navigate = useNavigate();
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    //----------------------------------------------------------------
    useEffect(() => 
    {
        //fetch(`https://rickandmortyapi.com/api/character/${id}`)
        fetch(`http://localhost:3001/rickandmorty/character/${id}`)
        .then((response) => response.json())
        .then(( data ) => 
        {
           if (data.name) 
           {
              setCharacter(data);
           } 
           else 
           {
              alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    //----------------------------------------------------------------
    return(
        <div>
            <br />
            <br />

            <NavLink to = "/home"></NavLink>
            <button onClick = {()=>navigate(-1)} style = {{marginRight:'610px', backgroundColor: 'green', color:'white'}}>◀</button>

            <div style = {{ display: 'flex', flexDirection: 'row' }}>

                <div style = {{width:'50%'}}>
                    <img src = {character.image} alt = {character.name} style = {{marginTop:'30px', marginLeft:'560px'}}/>                   
                </div>

                <div style = {{width:'50%'}}>
                    <div style = {{ display: 'flex', flexDirection: 'row' }}>
                        <h1 style = {{marginRight: '660px'}} >Name:</h1>  <p style = {{marginTop:'37px', marginLeft:'-650px'}}>{character?.name}</p>
                    </div>
                    <div style = {{ display: 'flex', flexDirection: 'row' }}>
                        <h1 style = {{marginRight: '660px', marginTop:'0px'}} >Status:</h1>  <p style = {{marginTop:'16px', marginLeft:'-650px'}}>{character?.status}</p>
                    </div>
                    <div style = {{ display: 'flex', flexDirection: 'row' }}>
                        <h1 style = {{marginRight: '660px', marginTop:'0px'}} >Species:</h1>  <p style = {{marginTop:'16px', marginLeft:'-650px'}}>{character?.species}</p>
                    </div>
                    <div style = {{ display: 'flex', flexDirection: 'row' }}>
                        <h1 style = {{marginRight: '660px', marginTop:'0px'}} >Gender:</h1>  <p style = {{marginTop:'16px', marginLeft:'-650px'}}>{character?.gender}</p>
                    </div>
                    <div style = {{ display: 'flex', flexDirection: 'row' }}>
                        <h1 style = {{marginRight: '660px', marginTop:'0px'}} >Origin:</h1>  <p style = {{marginTop:'15px', marginLeft:'-650px'}}>{character?.origin?.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Detail;
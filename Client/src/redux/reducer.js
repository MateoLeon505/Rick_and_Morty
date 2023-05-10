const {ADD_FAV, REMOVE_FAV, FILTER, ORDER} = require('./action-types');

const initialState =
{
    myFavorites:[],
    allCharacters:[]
}

const reducer = (state = initialState, action) =>
{
    switch (action.type) 
    {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            };
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites?.filter((fav) => fav.id !== action.payload),
                allCharacters: state.allCharacters?.filter((fav) => fav.id !== action.payload)
            };
        case FILTER:
                const allCharactersFilter = state.allCharacters.filter((char) => char.gender === action.payload);
                return{
                    ...state,
                    myFavorites: 
                    action.payload === 'allChar'
                    ? [...state.allCharacters]  
                    : allCharactersFilter
                };
        case ORDER:
            const charactersCopy = [...state.allCharacters];
            return{
                ...state,
                myFavorites: 
                action.payload === 'A'
                ? charactersCopy.sort((a, b) => a.id - b.id)
                : charactersCopy.sort((a, b) => b.id - a.id)
            };
        default:
            return{...state}
    }
}
export default reducer; 

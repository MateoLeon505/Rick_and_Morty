const {ADD_FAV, REMOVE_FAV, ORDER, FILTER, ALL} = require('./action-types');

export const addFav = (charater) =>
{
    return{
        type: ADD_FAV,
        payload: charater
    };
}

export const removeFav = (id) =>
{
    return{
        type: REMOVE_FAV,
        payload: id
    };
}

export const filterCards = (gender) =>
{
    return{
        type: FILTER,
        payload: gender
    };
}

export const orderCards = (order) =>
{
    return{
        type: ORDER,
        payload: order
    };
}


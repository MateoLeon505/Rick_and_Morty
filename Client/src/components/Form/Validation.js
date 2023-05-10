
const Validation = (userData) =>
{
    const regexValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let errors = {};

    if(!regexValidation.test(userData.email))
    {
        errors.email = 'Email inválido';
    } 
    else if(!userData.email) 
    {
        errors.email = 'Ingrese su email';
    }
    else if(userData.email.length>35) 
    {
        errors.email = 'Demasiados carácteres (max. 35)';
    }
    else errors.email = '';


    if(!userData.password) 
    {
        errors.password = 'Ingrese su contraseña';
    }
    else if(userData.password.length<6 || userData.password.length>10)
    {
        errors.password = 'La contraseña debe tener entre 6 y 10 carácteres';
    }
    else if(!userData.password.match(/\d/)) 
    {
        errors.password = 'La contraseña debe tener al menos un número';
    }

    else errors.password = '';

    return errors;
}
export default Validation;
'use strict'

function errorHandler(error){
    console.log(error);
    throw new Error('Fallo en la operacion del servidor')
}

module.exports = errorHandler;
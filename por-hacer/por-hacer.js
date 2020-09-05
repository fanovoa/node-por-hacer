const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

let listadoporHacer = [];


const guardarDB = () => {

    let data = JSON.stringify(listadoporHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    })
}

const cargarDB = () => {

    try {

        listadoporHacer = require('../db/data.json');

    } catch (error) {

        listadoporHacer = [];
    }

}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoporHacer.push(porHacer);
    guardarDB();

    return {
        porHacer,
        valor: true
    };
}

const getListado = (completado = undefined) => {


    cargarDB();
    if (completado === undefined)
        return listadoporHacer;
    else {
        return listadoporHacer.filter(tarea => tarea.completado === completado);

    }
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    let index = listadoporHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoporHacer[index].completado = completado;
        guardarDB();
        return true;

    } else
        return false;
}

const borrar = (descripcion) => {
    cargarDB();

    let index = listadoporHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoporHacer = listadoporHacer.filter(tarea => tarea.descripcion !== descripcion);
        guardarDB();
        return 'tarea eliminada';
    } else
        return 'No se encontro la tarea';


}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}
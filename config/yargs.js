const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea',
        type: 'boolean'
    }
}


const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea ', {
        descripcion
    })
    .command('listar', 'lista las tareas', {
        completado: {
            alias: 'c',
            desc: 'tarea completa o pediente',
            type: 'boolean'
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}
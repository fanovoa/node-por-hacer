const { argv } = require('./config/yargs');
const colors = require('colors');

const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = crear(argv.descripcion);
        console.log(tarea.porHacer);
        if (tarea.porHacer) console.log('Tarea creada correctamente')
        else console.log('No se pudo crear la tarea')
        break;

    case 'listar':

        let listado = getListado(argv.completado);

        for (let tarea of listado) {
            console.log('=========Por Hacer========'.green);
            console.log('Tarea'.bold, tarea.descripcion);
            console.log('Estado:'.bold, tarea.completado);
            console.log('=========================='.green);
        }
        break;

    case 'actualizar':
        let resultado = actualizar(argv.descripcion, argv.completado);
        if (resultado)
            console.log('Registro actualizado');
        else
            console.log('No fue posible actualizar el registro');
        break;

    case 'borrar':
        let borrado = borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido')
}
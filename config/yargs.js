const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente una tarea'
};


const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completado })
    .command('eliminar', 'Elimina una tarea de la lista', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}
#!/usr/bin/env node
import { program } from 'commander';
program.name('nestforge').version('1.0.0');
program
    .command('agregar')
    .description('Agrega una tarea')
    .argument('<texto>', 'texto de la tarea')
    .option('-p, --prioridad <nivel>', 'prioridad', 'normal')
    .action((texto, opciones) => {
    console.log(`Agregando "${texto}" con prioridad ${opciones.prioridad}`);
});
program
    .command('listar')
    .alias('ls')
    .description('Lista las tareas')
    .option('-a, --all', 'incluir completadas')
    .action((opciones) => {
    console.log('Listando...', opciones);
});
program.parse();

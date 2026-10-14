#!/usr/bin/env node

// import { program } from 'commander';

// program.name('nestforge').version('1.0.0');

// program
//   .command('agregar')
//   .description('Agrega una tarea')
//   .argument('<texto>', 'texto de la tarea')
//   .option('-p, --prioridad <nivel>', 'prioridad', 'normal')
//   .action((texto, opciones) => {
//     console.log(`Agregando "${texto}" con prioridad ${opciones.prioridad}`);
//   });

// program
//   .command('listar')
//   .alias('ls')
//   .description('Lista las tareas')
//   .option('-a, --all', 'incluir completadas')
//   .action((opciones) => {
//     console.log('Listando...', opciones);
//   });

// program.parse();

import { text, select, confirm, isCancel } from '@clack/prompts';

async function main() {
  // Get user's name
  const name = await text({
    message: 'What is your name?',
    placeholder: 'John Doe',
  }) as string;

  // Get user's preferred framework
  const framework = await select({
    message: 'Choose a framework:',
    options: [
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue' },
      { value: 'svelte', label: 'Svelte' },
    ],
  });

  if (isCancel(framework)) {
    console.log('Operation cancelled');
    process.exit(0);
  }

  // Confirm the selection
  const shouldProceed = await confirm({
    message: `Create a ${framework} project for ${name}?`,
  });

  if (shouldProceed) {
    console.log('Creating project...');
  }
}

main()

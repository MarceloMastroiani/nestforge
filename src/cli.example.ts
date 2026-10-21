// #!/usr/bin/env node

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

import { text, select, confirm, isCancel, outro } from "@clack/prompts";

export async function cli() {
  // Pedir el nombre
  const name = await text({
    message: "¿Cómo te llamás?",
    placeholder: "Juan Pérez",
  });

  // Comprobar si el usuario canceló
  if (isCancel(name)) {
    outro("Operación cancelada");
    process.exit(0);
  }

  // Elegir framework
  const framework = await select({
    message: "Elegí un framework:",
    options: [
      { value: "react", label: "React" },
      { value: "vue", label: "Vue" },
      { value: "svelte", label: "Svelte" },
    ],
  });

  if (isCancel(framework)) {
    outro("Operación cancelada");
    process.exit(0);
  }

  // Confirmar la selección
  const shouldProceed = await confirm({
    message: `¿Crear un proyecto de ${framework} para ${name}?`,
  });

  if (isCancel(shouldProceed)) {
    outro("Operación cancelada");
    process.exit(0);
  }

  if (shouldProceed) {
    outro("Creando proyecto...");
  } else {
    outro("Operación cancelada");
  }
}

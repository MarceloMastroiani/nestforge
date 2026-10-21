import { text, select, confirm, isCancel, outro } from "@clack/prompts";
import { Command } from 'commander';

import { generators } from "./generators/index.ts";

// Función principal de la aplicación con CLACK
// TODO: Crear la funcionalidad mediante "clack"(parte visual y recopilar informacion)
// usar "generators"(parte de generacion de archivos)
// conectada con "template.ts" utilizando "ejs y fs"
// para renderizar plantillas y crear los archivos que se necesitan
async function app() {

}

app()

// Commander
const program = new Command();

program
  .name('nestforge')
  .description('CLI for generating NestJS projects')
  .version('1.0.0');

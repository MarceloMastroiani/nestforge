import path from "path";
import fs from "fs-extra";
import { Generator } from "../types.ts";
import { renderTemplate } from "../utils/template.ts";

// TODO: Generar el esquema de Prisma y renderizar la plantilla
// usando renderTemplate(...) de "template.ts"
export const prismaGenerator: Generator = {
  name: "prisma",
  description: "",
  run: async (ctx) => {

  },
};

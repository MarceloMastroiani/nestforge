import { prismaGenerator } from "./prisma.generator.ts";

// Iteramos sobre los generadores
// segun lo que el usuario seleccione
// EJ: si selecciona prisma, ejecutamos prismaGenerator y lo que contiene
export const generators = [prismaGenerator];

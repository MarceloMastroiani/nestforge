export interface Context {
  cwd: string; // cwd es el directorio de trabajo actual
  projectName: string;
  features: string[]; // EJ: ["prisma", "docker"]
  [key: string]: unknown;
}

export interface Generator {
  name: string;
  description: string;
  run(ctx: Context): Promise<void>;
}

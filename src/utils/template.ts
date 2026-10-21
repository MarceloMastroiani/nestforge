import ejs from "ejs"
import fs from "fs-extra"
import path from "path";

export const TEMPLATE_DIR = path.resolve(__dirname,'../../templates')

export async function renderTemplate(
  templateRelPath: string, // direccion relativa del template   EJ: 'docker/Dockerfile.ejs'
  destPath: string, // destino del archivo renderizado          EJ: '/mi-proyecto/Dockerfile'
  data: Record<string, any>,
) {
  const source = path.resolve(TEMPLATE_DIR, templateRelPath) // Tenemos la ruta completa del template
  const content = await ejs.renderFile(source, data) // Escribimos el contenido que llena el template
  await fs.outputFile(destPath, content) // crea carpetas si no existen con el contenido renderizado

}

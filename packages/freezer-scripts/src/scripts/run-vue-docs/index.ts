const { createServer } = require("vite");
import devConfig from "./vite.dev";
async function runVueDocs() {
  try {
    const server = await createServer({
      ...devConfig,
    });
    await server.listen();
  } catch (error) {
    console.log(error);
  }
}

export default runVueDocs;

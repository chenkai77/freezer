import fs from 'fs-extra';
import path from 'path'
import rollupBuild from './rollup-build'

async function buildVueComponent() {
  await fs.emptyDir(path.resolve(process.cwd(), 'es'))
  await fs.emptyDir(path.resolve(process.cwd(), 'lib'))
  try {
    await rollupBuild()
  } catch (error) {
    console.log(error) 
  }
}

export default buildVueComponent;
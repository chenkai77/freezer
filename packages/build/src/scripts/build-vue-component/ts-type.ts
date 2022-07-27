import { Project, ScriptTarget, ModuleResolutionKind, SourceFile } from "ts-morph";
import glob from 'fast-glob'
import path from 'path'
import fs from 'fs-extra';
import { parse } from '@vue/compiler-sfc';

export default async function generateTsType(){
  const processCwd = process.cwd()
  const project = new Project({
    compilerOptions: {
      outDir: path.resolve(processCwd, 'types'),
      allowJs: true,
      declaration: true,
      emitDeclarationOnly: true,
      strict: true,
      target: ScriptTarget.ES2015,
      moduleResolution: ModuleResolutionKind.NodeJs,
      isolatedModules: true,
      esModuleInterop: true,
      skipLibCheck: true,
      jsx: 1,
    },
    skipAddingFilesFromTsConfig: true
  })

  const filePathList = await glob(['**/*.{ts?(x),vue}'], {
    cwd: path.resolve(processCwd, 'components'),
    absolute: true,
    onlyFiles: true,
  })
  const sourceFiles:SourceFile[] = []

  await Promise.all(
    filePathList.map(async file=>{
      if(file.endsWith('.vue')){
        const content = await fs.promises.readFile(path.resolve(processCwd, file), 'utf-8')
        const sfc = parse(content);
        const { script, scriptSetup } = sfc.descriptor;
        if(script || scriptSetup){
          let content = script?.content ?? ''
          const lang = scriptSetup?.lang || script?.lang || 'js'
          const sourceFile = project.createSourceFile(
            `${path.relative(process.cwd(), file)}.${lang}`,
            content
          )
          sourceFiles.push(sourceFile)
        }
      }else{
        let sourceFile = project.addSourceFileAtPath(file)
        sourceFiles.push(sourceFile)
      }
    })
  )

  const diagnostics = project.getPreEmitDiagnostics();
  console.error(project.formatDiagnosticsWithColorAndContext(diagnostics));

  await Promise.all(sourceFiles.map(async (sourceFile)=>{
    const emitOutput = sourceFile.getEmitOutput()
    for (const outputFile of emitOutput.getOutputFiles()) {
      const filePath = outputFile.getFilePath()
      await fs.promises.mkdir(path.dirname(filePath), { recursive: true })
      await fs.promises.writeFile(filePath, outputFile.getText(), 'utf8')
    }
  }))
}
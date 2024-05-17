import path from "path";
import shell from "shelljs";

const run = () => {
  const srcDir = "./src/public";
  const distDir = "./dist/public";
  function copyFiles(src: string, dest: string) {
    shell.ls("-R", `${src}/**/!(*.ts)`).forEach((file) => {
      const relativePath = path.relative(src, file);
      const destPath = path.join(dest, relativePath);
      shell.mkdir("-p", path.dirname(destPath));

      shell.cp("-R", file, destPath);
    });
  }

  copyFiles(srcDir, distDir);
  console.log("copied");
};
run();
export default run;

const { exec } = require('child_process');
 const options = { maxBuffer: 1024 * 1024 * 1024 };
exec('serve -s build',options, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Stdout: ${stdout}`);
});
const fs = require('fs');
const dir = './dist/styles';

function preInstallProcess() {
  fs.mkdirSync(dir);
}

preInstallProcess();

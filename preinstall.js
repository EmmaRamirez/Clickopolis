const fs = require('fs');
const dir = './dist';

function preInstallProcess() {
  fs.mkdirSync(dir);
}

preInstallProcess();

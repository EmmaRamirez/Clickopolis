const fs = require('fs');
const dir = './dist';
const dir2 = './dist/styles';

function preInstallProcess() {
  fs.mkdirSync(dir);
  fs.mkdirSync(dir2);
}


preInstallProcess();

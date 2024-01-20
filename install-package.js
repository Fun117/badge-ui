const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

function createDirectoryIfNotExists(directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
}

const installDirectory = process.argv[2] || 'src/components';

createDirectoryIfNotExists(installDirectory);

const sourceFolder = path.join(__dirname, 'src/components/badge-ui/');
const destinationFolder = path.join(installDirectory, 'badge-ui');

try {
    fse.copySync(sourceFolder, destinationFolder, { overwrite: true });
    console.log('Copy successful!');
} catch (error) {
    console.error('Copy error:', error.message);
}


console.log(`Component installed in ${installDirectory}`);

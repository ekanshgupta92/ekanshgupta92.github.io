'use strict';
const fs = require('fs');
const path = require('path');

module.exports = function renderAssets() {
    const sourcePath = path.resolve(__dirname, '../src/assets');
    const destPath = path.resolve(__dirname, '../dist/assets');

    fs.cpSync(sourcePath, destPath, { recursive: true });
};

if (require.main === module) module.exports();

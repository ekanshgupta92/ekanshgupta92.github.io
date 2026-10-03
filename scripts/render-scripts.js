'use strict';
const fs = require('fs');
const path = require('path');
const packageJSON = require('../package.json');

module.exports = function renderScripts() {
    const sourcePathScriptsJS = path.resolve(__dirname, '../src/js/scripts.js');
    const destPathScriptsJS = path.resolve(__dirname, '../dist/js/scripts.js');

    const copyright = `/*!
* Start Bootstrap - ${packageJSON.title} v${packageJSON.version} (${packageJSON.homepage})
* Copyright 2013-${new Date().getFullYear()} ${packageJSON.author}
* Licensed under ${packageJSON.license} (https://github.com/StartBootstrap/${packageJSON.name}/blob/master/LICENSE)
*/
`
    const scriptsJS = fs.readFileSync(sourcePathScriptsJS);

    fs.mkdirSync(path.dirname(destPathScriptsJS), { recursive: true });
    fs.writeFileSync(destPathScriptsJS, copyright + scriptsJS);
};

if (require.main === module) module.exports();

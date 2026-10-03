'use strict';

const chokidar = require('chokidar');
const renderAssets = require('./render-assets');
const renderScripts = require('./render-scripts');
const renderSCSS = require('./render-scss');

process.title = 'sb-watch';

const watcher = chokidar.watch('src', { ignoreInitial: true });

watcher.on('add', filePath => _processFile(filePath, 'add'));
watcher.on('change', filePath => _processFile(filePath, 'change'));
watcher.on('ready', () => console.log('READY TO ROLL!'));

renderSCSS();

function _processFile(filePath, watchEvent) {
    console.log(`### INFO: File event: ${watchEvent}: ${filePath}`);

    if (filePath.match(/\.scss$/)) {
        if (watchEvent === 'change') {
            return renderSCSS();
        }
        return;
    }

    if (filePath.match(/src[\\/]js[\\/]/)) {
        return renderScripts();
    }

    if (filePath.match(/src[\\/]assets[\\/]/)) {
        return renderAssets();
    }
}

const cucumber = require('cypress-cucumber-preprocessor').default
const { addMatchImageSnapshotPlugin} = require('cypress-image-snapshot/plugin');

module.exports = (on, config) => {
  on('file:preprocessor', cucumber()),
  addMatchImageSnapshotPlugin(on, config),
  on('before:browser:launch', (browser = {}, args) => {
    if (browser.name === 'chrome') {
        args.push('--window-size=1280,1024');
        // whatever you return here becomes the new args
        return args
    }
    if (browser.name === 'electron') {
        args['width'] = 1280
        args['height'] = 1024
        args['resizable'] = false;
        // whatever you return here becomes the new args
        return args
    }
  })
}

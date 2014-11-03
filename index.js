require('./src/modules/layout');
require('./src/partials/navigation');
require('./src/components/listing');
require('./src/components/inputs');
require('./src/svg-src-fallback');

require('emerald');
require('src-n-polyfill');
require('remodal');

window.JobsUI = {
    Tabs: require('./src/components/tabs')
};
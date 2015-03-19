require('./src/partials/navigation');
require('./src/components/listing');
require('./src/components/inputs');
require('./src/components/select-filter');
require('./src/components/folding-panel');
require('./src/svg-src-fallback');

require('emerald');
require('picturefill');
require('remodal');

window.JobsUI = {
    Tabs: require('./src/components/tabs')
};
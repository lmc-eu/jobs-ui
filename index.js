require('./src/partials/navigation/navigation');
require('./src/components/listing/listing');
require('./src/components/inputs/inputs');
require('./src/components/select-filter/select-filter');
require('./src/components/folding-panel/folding-panel');
require('./src/svg-src-fallback');

require('emerald');
require('picturefill');
require('remodal');

window.JobsUI = {
    Tabs: require('./src/components/tabs/tabs')
};

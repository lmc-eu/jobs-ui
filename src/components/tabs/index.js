'use strict';

var Tabs = (function () {

    /**
     * @param String tabCollectionAttributeName
     * @param String blockCollectionAttributeName
     * @param String tabAttributeName
     * @param String blockAttributeName
     * @constructor
     */
    function Tabs(tabCollectionAttributeName, blockCollectionAttributeName, tabAttributeName, blockAttributeName) {
        this.tabCollectionAttributeName = tabCollectionAttributeName;
        this.blockCollectionAttributeName = blockCollectionAttributeName;
        this.tabAttributeName = tabAttributeName;
        this.blockAttributeName = blockAttributeName;
    }

    Tabs.prototype.execute = function () {
            this.init();
            var activeTab = this.findActive();
            var showBlock = $(activeTab).find('.tabs__link').data(this.tabAttributeName);
        this.showBlock(showBlock);

    };

    Tabs.prototype.hideAll = function () {
        $('[data-'+this.blockCollectionAttributeName+']').find('[data-'+this.blockAttributeName+']').hide();

    };

    Tabs.prototype.showBlock = function (block) {
       var orig =  $('[data-'+this.blockCollectionAttributeName+']').find('[data-'+this.blockAttributeName+']='+this.blockAttributeName);

    };

    Tabs.prototype.findActive = function () {
        return $('[data-' + this.tabCollectionAttributeName + ']').find('.tabs__item--active');
    }

    Tabs.prototype.init = function () {
        this.hideAll();

    };

    return Tabs;
})();


$(function () {
    new Tabs('toggle-collection', 'collection', 'activate', 'source').execute();
});




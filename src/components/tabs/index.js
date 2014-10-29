'use strict';

var Tabs = (function () {

    /**
     * @param String tabsCollection, name of collection
     * @param String activeClass, name of active class
     * @constructor
     */
    function Tabs(tabsCollection, activeClass) {
        var self = this;

        self.tabs = $('[data-tab-toggle][href^=#' + tabsCollection + ':]');
        self.panels = $('[id^="' + tabsCollection + ':"]');
        self.activeClass = activeClass || 'tabs__link--active';

        $('[data-tab-toggle]').on('click', function (e) {
            e.preventDefault();
            self.process(this);
        });
    }

    Tabs.prototype.process = function (el) {
        var $el = $(el),
            target = $el.attr('href').substring(1);

        this.tabs.removeClass(this.activeClass);
        $el.addClass(this.activeClass);

        this.panels
            .hide()
            .filter('[id="' + target + '"]')
            .show();
    };

    return Tabs;
})();

$(function () {
    new Tabs('tabs1', 'tabs__link--active');
});




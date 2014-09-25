'use strict';

// Placeholder fallback
if (!('placeholder' in document.createElement('input') &&
    'placeholder' in document.createElement('textarea'))) {

    $('input[placeholder], textarea[placeholder]').each(function () {
        var placeholder = $(this).attr('placeholder');

        if (this.value === '') {
            this.value = placeholder;
        }

        $(this).focus(function () {
            if (this.value === placeholder) {
                this.value = '';
            }
        }).blur(function () {
            if ($.trim(this.value) === '') {
                this.value = placeholder;
            }
        });
    });

    // Clear default placeholder values on form submit
    $('form').submit(function () {
        $(this).find('input[placeholder], textarea[placeholder]').each(function () {
            if (this.value === $(this).attr('placeholder')) {
                this.value = '';
            }
        });
    });
}

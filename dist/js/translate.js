"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var translations = {
    1: {
        'pt-BR': 'Alô?',
        en: 'Hello?'
    }
};
var language = navigator.language || navigator.userLanguage;
function Transltr() {
    $('[transltr]').each(function () {
        var index = $(this).attr('transltr');
        var text = translations[index][language] || translations[index].en;
        $(this).text(text);
    });
}
exports.Transltr = Transltr;

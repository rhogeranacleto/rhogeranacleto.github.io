"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var languages_1 = require("./languages");
var chars = '01';
function Create() {
    var maxXP = languages_1.LANGUAGES.reduce(function (p, c) { return p.xp > c.xp ? p : c; }).xp;
    var sumXP = languages_1.LANGUAGES.map(function (language) { return language.xp; }).reduce(function (sum, xp) { return sum + xp; });
    $('.sum-xp', $('#card-languade-xp')).text(sumXP + ' XP');
    languages_1.LANGUAGES.sort(function (a, b) { return b.xp - a.xp; });
    languages_1.LANGUAGES.forEach(function (language) {
        language.width = 100 * (language.xp / maxXP);
        language.class = "xp-bar-fill-" + parseInt(((language.width / 20) + 1).toString());
        $('.body', $('#card-languade-xp')).append(Mustache.render($('#card-languade-xp-template').html(), language));
    });
    $('.card').each(function (i, card) {
        var columnsContents = $('.column-content');
        $(columnsContents.get().reduce(function (e, i) { return e.offsetHeight > i.offsetHeight ? i : e; }, columnsContents.get(0))).append(card);
    });
    var letterWidth = $('.bg', $('#content')).width();
    var letterHeight = $('.bg', $('#content')).height();
    var count = Math.floor($(document).width() / 8) * ((Math.floor($('#content').height() / 20)) + 1);
    var string = '';
    for (var i = 0; i < count; i++) {
        string += chars.charAt(Math.floor(Math.random() * chars.length));
        ;
    }
    $('.bg', $('#content')).html(string);
}
exports.Create = Create;
console.log('What are search here? This code is public! Check out on https://github.com/rhogeranacleto/rhogeranacleto.github.io');

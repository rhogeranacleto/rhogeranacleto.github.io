(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
var cards = [{
        template: 'card-template-who-am-i',
        title: 'Meu nome é Anacleto, Rhoger Anacleto',
        body: '21 anos. Joinville, Brasil. Desenvolvedor.'
    }, {
        template: 'card-template-options-about-me',
        title: 'Rhoger Anacleto, como é que eu posso explicar Rhoger Anacleto?',
        opinions: [
            'O Rhoger Anacleto é perfeito!',
            'Ele tem duas bolsas de pele e um carro importado prateado',
            'O cabelo dele está no seguro por US$10.000,00',
            'Soube que ele faz comerciais de carro… no Japão',
            'O filme que ele gosta mais é Marcação Cerrada',
            'Ele até conheceu o John Stamos no avião… E ele disse que ele era lindo',
            'Um dia, ele me socou no rosto… isso foi irado',
        ]
    }];
var languages = [{
        name: 'Javascript',
        xp: 100,
        width: 0,
        class: ''
    }, {
        name: 'CSS',
        xp: 100,
        width: 0,
        class: ''
    }, {
        name: 'HTML',
        xp: 100,
        width: 0,
        class: ''
    }, {
        name: 'NodeJS',
        xp: 96,
        width: 0,
        class: ''
    }, {
        name: 'Angular',
        xp: 90,
        width: 0,
        class: ''
    }, {
        name: 'TypeScript',
        xp: 87,
        width: 0,
        class: ''
    }, {
        name: 'C#',
        xp: 70,
        width: 0,
        class: ''
    }, {
        name: 'EmberJS',
        xp: 60,
        width: 0,
        class: ''
    }, {
        name: 'LESS',
        xp: 70,
        width: 0,
        class: ''
    }, {
        name: 'GIT',
        xp: 90,
        width: 0,
        class: ''
    }, {
        name: 'SQL',
        xp: 95,
        width: 0,
        class: ''
    }, {
        name: 'C++',
        xp: 10,
        width: 0,
        class: ''
    }, {
        name: 'PHP',
        xp: 40,
        width: 0,
        class: ''
    }, {
        name: 'Java',
        xp: 30,
        width: 0,
        class: ''
    }, {
        name: 'MongoDB',
        xp: 85,
        width: 0,
        class: ''
    }, {
        name: 'GraphQL',
        xp: 20,
        width: 0,
        class: ''
    }, {
        name: '.NET',
        xp: 50,
        width: 0,
        class: ''
    }, {
        name: 'Selenium',
        xp: 40,
        width: 0,
        class: ''
    }, {
        name: 'Photoshop',
        xp: 60,
        width: 0,
        class: ''
    }, {
        name: 'shell',
        xp: 20,
        width: 0,
        class: ''
    }];
$(function () {
    var maxXP = languages.reduce(function (p, c) { return p.xp > c.xp ? p : c; }).xp;
    var sumXP = languages.map(function (language) { return language.xp; }).reduce(function (sum, xp) { return sum + xp; });
    $('.sum-xp', $('#card-languade-xp')).text(sumXP + 'XP');
    $.get('https://www.instagram.com/rhogeranacleto?__a=1').then(function (r) {
        var media = r.user.media.nodes[0];
        $('#card-instagram').find('img').attr('src', media.display_src).end().find('div').text(media.caption);
        languages.sort(function (a, b) { return b.xp - a.xp; });
        languages.forEach(function (language) {
            language.width = 100 * (language.xp / maxXP);
            language.class = "xp-bar-fill-" + parseInt(((language.width / 20) + 1).toString());
            $('.body', $('#card-languade-xp')).append(Mustache.render($('#card-languade-xp-template').html(), language));
        });
        $('.card').each(function (i, card) {
            var columnsContents = $('.column-content');
            $(columnsContents.get().reduce(function (e, i) { return e.offsetHeight > i.offsetHeight ? i : e; }, columnsContents.get(0))).append(card);
        });
    });
    var letterWidth = $('.bg', $('#content')).width();
    console.log($(document).width(), $(document).width() / letterWidth, letterWidth);
});

},{}]},{},[1]);
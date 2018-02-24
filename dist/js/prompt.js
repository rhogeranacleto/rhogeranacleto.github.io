"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("./main");
var $lines = $('#prompt p');
$lines.hide();
var lineContents = new Array();
function executeEvent(event) {
    return events[event]();
}
var events = {
    step: 0,
    steps: 6,
    1: function () {
        events.step++;
        $('#prompt').addClass('minimised');
    },
    2: function () {
        events.step++;
        $('main').removeClass('hide');
        main_1.Create();
    },
    3: function () {
        events.step++;
        $('head').append('<link rel="stylesheet" href="dist/styles/main.css">');
    },
    4: function () {
        events.step++;
        $('head').append(' <link href="http://allfont.net/allfont.css?fonts=comic-sans-ms" rel="stylesheet" type="text/css" />');
        $('body').addClass('use-comic-sans');
    },
    5: function () {
        events.step++;
        $('body').removeClass('use-comic-sans');
        $('head').append('<link href="https://fonts.googleapis.com/css?family=Nunito:300,400,400i,600,700" rel="stylesheet">');
    },
    6: function (skip) {
        events.step++;
        $('#prompt').remove();
        history.pushState({}, null, '?l=1' + (skip ? '&s=1' : ''));
    }
};
var terminal = function () {
    var typeLine = function (idx) {
        idx == null && (idx = 0);
        var element = $lines.eq(idx);
        var content = lineContents[idx];
        if (!content || !$('#prompt').get(0)) {
            return;
        }
        var charIdx = 0;
        var skip = element.hasClass('skip');
        var typeChar = function () {
            var rand = element.attr('data-skip') ? Number(element.attr('data-skip')) : Math.round(Math.random() * 150) + 25;
            setTimeout(function () {
                var char = content[charIdx++];
                element.append(char);
                if (typeof char !== "undefined") {
                    typeChar();
                }
                else {
                    element.removeClass('active');
                    var after = element.attr('data-after');
                    if (after) {
                        events[after]();
                    }
                    typeLine(++idx);
                    if ($('#prompt')[0]) {
                        $('#prompt').scrollTop($('#prompt')[0].scrollHeight);
                    }
                }
            }, skip ? 0 : rand);
        };
        if (!skip || element.hasClass('ra')) {
            element.append('~$ ').addClass('active');
        }
        if (element.hasClass('ra')) {
            element.append('<span class="me">@rhogeranacleto diz: </span>');
        }
        var textBefore = element.attr('data-text-before');
        if (textBefore) {
            element.append(textBefore);
        }
        var wait = element.attr('data-wait');
        if (wait) {
            setTimeout(typeChar, Number(wait));
        }
        else {
            typeChar();
        }
    };
    $lines.each(function (i) {
        lineContents[i] = $(this).text();
        $(this).text('').show();
    });
    typeLine();
};
$(function () {
    if ($(window).width() <= 425) {
        $('#content > .column').eq(0).remove();
        events[6](false);
        events[5]();
        events[3]();
        events[2]();
    }
    else {
        terminal();
    }
    $('#forward').on('click', function () {
        do {
            events[events.step + 1](true);
        } while (events.step < events.steps);
    });
});

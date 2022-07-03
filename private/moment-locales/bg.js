//! moment.js locale configuration
//! locale : Bulgarian [bg]
//! author : Krasen Borisov : https://github.com/kraz

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var bg = moment.defineLocale('bg', {
        months : '褟薪褍邪褉懈_褎械脅褉褍邪褉懈_屑邪褉褌_邪鋅褉懈謝_屑邪洩_褞薪懈_褞謝懈_邪脅諧褍褋褌_褋械鋅褌械屑脅褉懈_芯瀉褌芯屑脅褉懈_薪芯械屑脅褉懈_寫械瀉械屑脅褉懈'.split('_'),
        monthsShort : '褟薪褉_褎械脅_屑邪褉_邪鋅褉_屑邪洩_褞薪懈_褞謝懈_邪脅諧_褋械鋅_芯瀉褌_薪芯械_寫械瀉'.split('_'),
        weekdays : '薪械寫械謝褟_鋅芯薪械寫械謝薪懈瀉_脅褌芯褉薪懈瀉_褋褉褟寫邪_褔械褌脅褗褉褌褗瀉_鋅械褌褗瀉_褋褗斜芯褌邪'.split('_'),
        weekdaysShort : '薪械寫_鋅芯薪_脅褌芯_褋褉褟_褔械褌_鋅械褌_褋褗斜'.split('_'),
        weekdaysMin : '薪寫_鋅薪_脅褌_褋褉_褔褌_鋅褌_褋斜'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'D.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY H:mm',
            LLLL : 'dddd, D MMMM YYYY H:mm'
        },
        calendar : {
            sameDay : '[袛薪械褋 脅] LT',
            nextDay : '[校褌褉械 脅] LT',
            nextWeek : 'dddd [脅] LT',
            lastDay : '[袙褔械褉邪 脅] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return '[袙 懈蟹屑懈薪邪謝邪褌邪] dddd [脅] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[袙 懈蟹屑懈薪邪謝懈褟] dddd [脅] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : '褋謝械寫 %s',
            past : '鋅褉械寫懈 %s',
            s : '薪褟瀉芯謝瀉芯 褋械瀉褍薪寫懈',
            m : '屑懈薪褍褌邪',
            mm : '%d 屑懈薪褍褌懈',
            h : '褔邪褋',
            hh : '%d 褔邪褋邪',
            d : '寫械薪',
            dd : '%d 寫薪懈',
            M : '屑械褋械褑',
            MM : '%d 屑械褋械褑邪',
            y : '諧芯寫懈薪邪',
            yy : '%d 諧芯寫懈薪懈'
        },
        ordinalParse: /\d{1,2}-(械脅|械薪|褌懈|脅懈|褉懈|屑懈)/,
        ordinal : function (number) {
            var lastDigit = number % 10,
                last2Digits = number % 100;
            if (number === 0) {
                return number + '-械脅';
            } else if (last2Digits === 0) {
                return number + '-械薪';
            } else if (last2Digits > 10 && last2Digits < 20) {
                return number + '-褌懈';
            } else if (lastDigit === 1) {
                return number + '-脅懈';
            } else if (lastDigit === 2) {
                return number + '-褉懈';
            } else if (lastDigit === 7 || lastDigit === 8) {
                return number + '-屑懈';
            } else {
                return number + '-褌懈';
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return bg;

}));
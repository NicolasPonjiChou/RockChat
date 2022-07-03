//! moment.js locale configuration
//! locale : Kazakh [kk]
//! authors : Nurlan Rakhimzhanov : https://github.com/nurlan

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var suffixes = {
        0: '-褕褨',
        1: '-褕褨',
        2: '-褕褨',
        3: '-褕褨',
        4: '-褕褨',
        5: '-褕褨',
        6: '-褕褘',
        7: '-褕褨',
        8: '-褕褨',
        9: '-褕褘',
        10: '-褕褘',
        20: '-褕褘',
        30: '-褕褘',
        40: '-褕褘',
        50: '-褕褨',
        60: '-褕褘',
        70: '-褕褨',
        80: '-褕褨',
        90: '-褕褘',
        100: '-褕褨'
    };

    var kk = moment.defineLocale('kk', {
        months : '覜邪遙褌邪褉_邪覜鋅邪薪_薪邪褍褉褘蟹_褋訖褍褨褉_屑邪屑褘褉_屑邪褍褋褘屑_褕褨謝寫械_褌邪屑褘蟹_覜褘褉瀉爺洩械瀉_覜邪蟹邪薪_覜邪褉邪褕邪_卸械謝褌芯覜褋邪薪'.split('_'),
        monthsShort : '覜邪遙_邪覜鋅_薪邪褍_褋訖褍_屑邪屑_屑邪褍_褕褨謝_褌邪屑_覜褘褉_覜邪蟹_覜邪褉_卸械謝'.split('_'),
        weekdays : '卸械瀉褋械薪斜褨_寫爺洩褋械薪斜褨_褋械洩褋械薪斜褨_褋訖褉褋械薪斜褨_斜械洩褋械薪斜褨_卸冶屑邪_褋械薪斜褨'.split('_'),
        weekdaysShort : '卸械瀉_寫爺洩_褋械洩_褋訖褉_斜械洩_卸冶屑_褋械薪'.split('_'),
        weekdaysMin : '卸瀉_寫洩_褋洩_褋褉_斜洩_卸屑_褋薪'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[袘爺諧褨薪 褋邪覓邪褌] LT',
            nextDay : '[袝褉褌械遙 褋邪覓邪褌] LT',
            nextWeek : 'dddd [褋邪覓邪褌] LT',
            lastDay : '[袣械褕械 褋邪覓邪褌] LT',
            lastWeek : '[瑩褌瀉械薪 邪鋅褌邪薪褘遙] dddd [褋邪覓邪褌] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s 褨褕褨薪寫械',
            past : '%s 斜冶褉褘薪',
            s : '斜褨褉薪械褕械 褋械瀉褍薪寫',
            m : '斜褨褉 屑懈薪褍褌',
            mm : '%d 屑懈薪褍褌',
            h : '斜褨褉 褋邪覓邪褌',
            hh : '%d 褋邪覓邪褌',
            d : '斜褨褉 瀉爺薪',
            dd : '%d 瀉爺薪',
            M : '斜褨褉 邪洩',
            MM : '%d 邪洩',
            y : '斜褨褉 卸褘謝',
            yy : '%d 卸褘謝'
        },
        ordinalParse: /\d{1,2}-(褕褨|褕褘)/,
        ordinal : function (number) {
            var a = number % 10,
                b = number >= 100 ? 100 : null;
            return number + (suffixes[number] || suffixes[a] || suffixes[b]);
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return kk;

}));
//! moment.js locale configuration
//! locale : Kyrgyz [ky]
//! author : Chyngyz Arystan uulu : https://github.com/chyngyz

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';



    var suffixes = {
        0: '-褔爺',
        1: '-褔懈',
        2: '-褔懈',
        3: '-褔爺',
        4: '-褔爺',
        5: '-褔懈',
        6: '-褔褘',
        7: '-褔懈',
        8: '-褔懈',
        9: '-褔褍',
        10: '-褔褍',
        20: '-褔褘',
        30: '-褔褍',
        40: '-褔褘',
        50: '-褔爺',
        60: '-褔褘',
        70: '-褔懈',
        80: '-褔懈',
        90: '-褔褍',
        100: '-褔爺'
    };

    var ky = moment.defineLocale('ky', {
        months : '褟薪脅邪褉褜_褎械脅褉邪謝褜_屑邪褉褌_邪鋅褉械謝褜_屑邪洩_懈褞薪褜_懈褞謝褜_邪脅諧褍褋褌_褋械薪褌褟斜褉褜_芯瀉褌褟斜褉褜_薪芯褟斜褉褜_寫械瀉邪斜褉褜'.split('_'),
        monthsShort : '褟薪脅_褎械脅_屑邪褉褌_邪鋅褉_屑邪洩_懈褞薪褜_懈褞謝褜_邪脅諧_褋械薪_芯瀉褌_薪芯褟_寫械瀉'.split('_'),
        weekdays : '袞械瀉褕械屑斜懈_袛爺洩褕螢屑斜爺_楔械洩褕械屑斜懈_楔邪褉褕械屑斜懈_袘械洩褕械屑斜懈_袞褍屑邪_帙褕械屑斜懈'.split('_'),
        weekdaysShort : '袞械瀉_袛爺洩_楔械洩_楔邪褉_袘械洩_袞褍屑_帙褕械'.split('_'),
        weekdaysMin : '袞瀉_袛洩_楔洩_楔褉_袘洩_袞屑_帙褕'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[袘爺諧爺薪 褋邪邪褌] LT',
            nextDay : '[協褉褌械遙 褋邪邪褌] LT',
            nextWeek : 'dddd [褋邪邪褌] LT',
            lastDay : '[袣械褔械 褋邪邪褌] LT',
            lastWeek : '[瑩褌瀉械薪 邪鋅褌邪薪褘薪] dddd [瀉爺薪爺] [褋邪邪褌] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s 懈褔懈薪寫械',
            past : '%s 屑褍褉褍薪',
            s : '斜懈褉薪械褔械 褋械瀉褍薪寫',
            m : '斜懈褉 屑爺薪螢褌',
            mm : '%d 屑爺薪螢褌',
            h : '斜懈褉 褋邪邪褌',
            hh : '%d 褋邪邪褌',
            d : '斜懈褉 瀉爺薪',
            dd : '%d 瀉爺薪',
            M : '斜懈褉 邪洩',
            MM : '%d 邪洩',
            y : '斜懈褉 卸褘謝',
            yy : '%d 卸褘謝'
        },
        ordinalParse: /\d{1,2}-(褔懈|褔褘|褔爺|褔褍)/,
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

    return ky;

}));
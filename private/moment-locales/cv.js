//! moment.js locale configuration
//! locale : Chuvash [cv]
//! author : Anatoly Mironov : https://github.com/mirontoli

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var cv = moment.defineLocale('cv', {
        months : '瀉討褉謝邪褔_薪邪褉討褋_鋅褍褕_邪瀉邪_屑邪洩_耀誾褉褌屑械_褍褌討_耀褍褉謝邪_邪脅討薪_褞鋅邪_褔映瀉_褉邪褕褌邪脅'.split('_'),
        monthsShort : '瀉討褉_薪邪褉_鋅褍褕_邪瀉邪_屑邪洩_耀誾褉_褍褌討_耀褍褉_邪脅薪_褞鋅邪_褔映瀉_褉邪褕'.split('_'),
        weekdays : '脅褘褉褋邪褉薪懈瀉褍薪_褌褍薪褌懈瀉褍薪_褘褌謝邪褉懈瀉褍薪_褞薪瀉褍薪_瀉誾耀薪械褉薪懈瀉褍薪_襌褉薪械瀉褍薪_褕討屑邪褌瀉褍薪'.split('_'),
        weekdaysShort : '脅褘褉_褌褍薪_褘褌謝_褞薪_瀉誾耀_襌褉薪_褕討屑'.split('_'),
        weekdaysMin : '脅褉_褌薪_褘褌_褞薪_瀉耀_襌褉_褕屑'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD-MM-YYYY',
            LL : 'YYYY [耀褍謝袖懈] MMMM [褍洩討袖誾薪] D[-屑誾褕誾]',
            LLL : 'YYYY [耀褍謝袖懈] MMMM [褍洩討袖誾薪] D[-屑誾褕誾], HH:mm',
            LLLL : 'dddd, YYYY [耀褍謝袖懈] MMMM [褍洩討袖誾薪] D[-屑誾褕誾], HH:mm'
        },
        calendar : {
            sameDay: '[袩邪褟薪] LT [褋械袖械褌褉械]',
            nextDay: '[蠍褉邪薪] LT [褋械袖械褌褉械]',
            lastDay: '[訓薪械褉] LT [褋械袖械褌褉械]',
            nextWeek: '[要懈褌械褋] dddd LT [褋械袖械褌褉械]',
            lastWeek: '[帙褉褌薪誾] dddd LT [褋械袖械褌褉械]',
            sameElse: 'L'
        },
        relativeTime : {
            future : function (output) {
                var affix = /褋械袖械褌$/i.exec(output) ? '褉械薪' : /耀褍謝$/i.exec(output) ? '褌邪薪' : '褉邪薪';
                return output + affix;
            },
            past : '%s 瀉邪褟謝謝邪',
            s : '鋅誾褉-懈瀉 耀械瀉瀉褍薪褌',
            m : '鋅誾褉 屑懈薪褍褌',
            mm : '%d 屑懈薪褍褌',
            h : '鋅誾褉 褋械袖械褌',
            hh : '%d 褋械袖械褌',
            d : '鋅誾褉 瀉褍薪',
            dd : '%d 瀉褍薪',
            M : '鋅誾褉 褍洩討袖',
            MM : '%d 褍洩討袖',
            y : '鋅誾褉 耀褍謝',
            yy : '%d 耀褍謝'
        },
        ordinalParse: /\d{1,2}-屑誾褕/,
        ordinal : '%d-屑誾褕',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return cv;

}));
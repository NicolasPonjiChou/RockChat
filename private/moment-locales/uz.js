//! moment.js locale configuration
//! locale : Uzbek [uz]
//! author : Sardor Muminov : https://github.com/muminoff

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var uz = moment.defineLocale('uz', {
        months : '褟薪脅邪褉_褎械脅褉邪謝_屑邪褉褌_邪鋅褉械謝_屑邪洩_懈褞薪_懈褞謝_邪脅諧褍褋褌_褋械薪褌褟斜褉_芯瀉褌褟斜褉_薪芯褟斜褉_寫械瀉邪斜褉'.split('_'),
        monthsShort : '褟薪脅_褎械脅_屑邪褉_邪鋅褉_屑邪洩_懈褞薪_懈褞謝_邪脅諧_褋械薪_芯瀉褌_薪芯褟_寫械瀉'.split('_'),
        weekdays : '攜瀉褕邪薪斜邪_袛褍褕邪薪斜邪_小械褕邪薪斜邪_效芯褉褕邪薪斜邪_袩邪洩褕邪薪斜邪_袞褍屑邪_楔邪薪斜邪'.split('_'),
        weekdaysShort : '攜瀉褕_袛褍褕_小械褕_效芯褉_袩邪洩_袞褍屑_楔邪薪'.split('_'),
        weekdaysMin : '攜瀉_袛褍_小械_效芯_袩邪_袞褍_楔邪'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'D MMMM YYYY, dddd HH:mm'
        },
        calendar : {
            sameDay : '[袘褍諧褍薪 褋芯邪褌] LT [寫邪]',
            nextDay : '[協褉褌邪諧邪] LT [寫邪]',
            nextWeek : 'dddd [瀉褍薪懈 褋芯邪褌] LT [寫邪]',
            lastDay : '[袣械褔邪 褋芯邪褌] LT [寫邪]',
            lastWeek : '[校褌諧邪薪] dddd [瀉褍薪懈 褋芯邪褌] LT [寫邪]',
            sameElse : 'L'
        },
        relativeTime : {
            future : '攜瀉懈薪 %s 懈褔懈寫邪',
            past : '袘懈褉 薪械褔邪 %s 芯謝寫懈薪',
            s : '褎褍褉褋邪褌',
            m : '斜懈褉 寫邪瀉懈瀉邪',
            mm : '%d 寫邪瀉懈瀉邪',
            h : '斜懈褉 褋芯邪褌',
            hh : '%d 褋芯邪褌',
            d : '斜懈褉 瀉褍薪',
            dd : '%d 瀉褍薪',
            M : '斜懈褉 芯洩',
            MM : '%d 芯洩',
            y : '斜懈褉 洩懈謝',
            yy : '%d 洩懈謝'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return uz;

}));
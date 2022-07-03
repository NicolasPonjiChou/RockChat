//! moment.js locale configuration
//! locale  :  Arabic (Tunisia) [ar-tn]

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var ar_tn = moment.defineLocale('ar-tn', {
        months: '噩丕賳賮賷_賮賷賮乇賷_賲丕乇爻_兀賮乇賷賱_賲丕賷_噩賵丕賳_噩賵賷賱賷丞_兀賵鬲_爻亙鬲賲亙乇_兀賰鬲賵亙乇_賳賵賮賲亙乇_賷爻賲亙乇'.split('_'),
        monthsShort: '噩丕賳賮賷_賮賷賮乇賷_賲丕乇爻_兀賮乇賷賱_賲丕賷_噩賵丕賳_噩賵賷賱賷丞_兀賵鬲_爻亙鬲賲亙乇_兀賰鬲賵亙乇_賳賵賮賲亙乇_賷爻賲亙乇'.split('_'),
        weekdays: '丕賱兀_丕賱廿孬賳賷賳_丕賱孬賱丕孬丕亍_丕賱兀乇亙毓丕亍_丕賱禺賲賷爻_丕賱噩賲毓丞_丕賱爻亙鬲'.split('_'),
        weekdaysShort: '兀_廿孬賳賷賳_孬賱丕孬丕亍_兀乇亙毓丕亍_禺賲賷爻_噩賲毓丞_爻亙鬲'.split('_'),
        weekdaysMin: '_賳_孬_乇_禺_噩_爻'.split('_'),
        weekdaysParseExact : true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[丕賱賷賵賲 毓賱賶 丕賱爻丕毓丞] LT',
            nextDay: '[睪丕 毓賱賶 丕賱爻丕毓丞] LT',
            nextWeek: 'dddd [毓賱賶 丕賱爻丕毓丞] LT',
            lastDay: '[兀賲爻 毓賱賶 丕賱爻丕毓丞] LT',
            lastWeek: 'dddd [毓賱賶 丕賱爻丕毓丞] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '賮賷 %s',
            past: '賲賳匕 %s',
            s: '孬賵丕賳',
            m: '賯賷賯丞',
            mm: '%d 賯丕卅賯',
            h: '爻丕毓丞',
            hh: '%d 爻丕毓丕鬲',
            d: '賷賵賲',
            dd: '%d 兀賷丕賲',
            M: '卮賴乇',
            MM: '%d 兀卮賴乇',
            y: '爻賳丞',
            yy: '%d 爻賳賵丕鬲'
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    });

    return ar_tn;

}));
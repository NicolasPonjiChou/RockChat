//! moment.js locale configuration
//! locale : Vietnamese [vi]
//! author : Bang Nguyen : https://github.com/bangnk

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var vi = moment.defineLocale('vi', {
        months : 'th謾ng 1_th謾ng 2_th謾ng 3_th謾ng 4_th謾ng 5_th謾ng 6_th謾ng 7_th謾ng 8_th謾ng 9_th謾ng 10_th謾ng 11_th謾ng 12'.split('_'),
        monthsShort : 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
        monthsParseExact : true,
        weekdays : 'ch嶧?nh岷璽_th嶧?hai_th嶧?ba_th嶧?t瓢_th嶧?n膬m_th嶧?s謾u_th嶧?b岷'.split('_'),
        weekdaysShort : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
        weekdaysMin : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
        weekdaysParseExact : true,
        meridiemParse: /sa|ch/i,
        isPM : function (input) {
            return /^ch$/i.test(input);
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 12) {
                return isLower ? 'sa' : 'SA';
            } else {
                return isLower ? 'ch' : 'CH';
            }
        },
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM [n膬m] YYYY',
            LLL : 'D MMMM [n膬m] YYYY HH:mm',
            LLLL : 'dddd, D MMMM [n膬m] YYYY HH:mm',
            l : 'DD/M/YYYY',
            ll : 'D MMM YYYY',
            lll : 'D MMM YYYY HH:mm',
            llll : 'ddd, D MMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[H麼m nay l煤c] LT',
            nextDay: '[Ng脿y mai l煤c] LT',
            nextWeek: 'dddd [tu岷 t嶧沬 l煤c] LT',
            lastDay: '[H麼m qua l煤c] LT',
            lastWeek: 'dddd [tu岷 r嶧摠 l煤c] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : '%s t嶧沬',
            past : '%s tr瓢嶧沜',
            s : 'v脿i gi芒y',
            m : 'm嶧檛 ph煤t',
            mm : '%d ph煤t',
            h : 'm嶧檛 gi嶧?,
            hh : '%d gi嶧?,
            d : 'm嶧檛 ng脿y',
            dd : '%d ng脿y',
            M : 'm嶧檛 th謾ng',
            MM : '%d th謾ng',
            y : 'm嶧檛 n膬m',
            yy : '%d n膬m'
        },
        ordinalParse: /\d{1,2}/,
        ordinal : function (number) {
            return number;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return vi;

}));
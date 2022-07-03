//! moment.js locale configuration
//! locale : Turkish [tr]
//! authors : Erhan Gundogan : https://github.com/erhangundogan,
//!           Burak Yi臒it Kaya: https://github.com/BYK

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var suffixes = {
        1: '\'inci',
        5: '\'inci',
        8: '\'inci',
        70: '\'inci',
        80: '\'inci',
        2: '\'nci',
        7: '\'nci',
        20: '\'nci',
        50: '\'nci',
        3: '\'眉nc眉',
        4: '\'眉nc眉',
        100: '\'眉nc眉',
        6: '\'nc謀',
        9: '\'uncu',
        10: '\'uncu',
        30: '\'uncu',
        60: '\'謀nc謀',
        90: '\'謀nc謀'
    };

    var tr = moment.defineLocale('tr', {
        months : 'Ocak_艦ubat_Mart_Nisan_May謀s_Haziran_Temmuz_A臒ustos_Eyl眉l_Ekim_Kas謀m_Aral謀k'.split('_'),
        monthsShort : 'Oca_艦ub_Mar_Nis_May_Haz_Tem_A臒u_Eyl_Eki_Kas_Ara'.split('_'),
        weekdays : 'Pazar_Pazartesi_Sal謀_脟ar艧amba_Per艧embe_Cuma_Cumartesi'.split('_'),
        weekdaysShort : 'Paz_Pts_Sal_脟ar_Per_Cum_Cts'.split('_'),
        weekdaysMin : 'Pz_Pt_Sa_脟a_Pe_Cu_Ct'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[bug眉n saat] LT',
            nextDay : '[yar謀n saat] LT',
            nextWeek : '[haftaya] dddd [saat] LT',
            lastDay : '[d眉n] LT',
            lastWeek : '[ge莽en hafta] dddd [saat] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s sonra',
            past : '%s 枚nce',
            s : 'birka莽 saniye',
            m : 'bir dakika',
            mm : '%d dakika',
            h : 'bir saat',
            hh : '%d saat',
            d : 'bir g眉n',
            dd : '%d g眉n',
            M : 'bir ay',
            MM : '%d ay',
            y : 'bir y謀l',
            yy : '%d y謀l'
        },
        ordinalParse: /\d{1,2}'(inci|nci|眉nc眉|nc謀|uncu|謀nc謀)/,
        ordinal : function (number) {
            if (number === 0) {  // special case for zero
                return number + '\'謀nc謀';
            }
            var a = number % 10,
                b = number % 100 - a,
                c = number >= 100 ? 100 : null;
            return number + (suffixes[a] || suffixes[b] || suffixes[c]);
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return tr;

}));
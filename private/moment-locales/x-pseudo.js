//! moment.js locale configuration
//! locale : Pseudo [x-pseudo]
//! author : Andrew Hood : https://github.com/andrewhood125

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var x_pseudo = moment.defineLocale('x-pseudo', {
        months : 'J~謾帽煤謾~r媒_F~茅br煤~謾r媒_~M謾rc~h_脕p~r鉚l_~M謾媒_~J煤帽茅~_J煤l~媒_脕煤~g煤st~_S茅p~t茅mb~茅r_脫~ct貿b~茅r_脩~貿v茅m~b茅r_~D茅c茅~mb茅r'.split('_'),
        monthsShort : 'J~謾帽_~F茅b_~M謾r_~脕pr_~M謾媒_~J煤帽_~J煤l_~脕煤g_~S茅p_~脫ct_~脩貿v_~D茅c'.split('_'),
        monthsParseExact : true,
        weekdays : 'S~煤帽d謾~媒_M貿~帽d謾媒~_T煤茅~sd謾媒~_W茅d~帽茅sd~謾媒_T~h煤rs~d謾媒_~Fr鉚d~謾媒_S~謾t煤r~d謾媒'.split('_'),
        weekdaysShort : 'S~煤帽_~M貿帽_~T煤茅_~W茅d_~Th煤_~Fr鉚_~S謾t'.split('_'),
        weekdaysMin : 'S~煤_M貿~_T煤_~W茅_T~h_Fr~_S謾'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[T~貿d謾~媒 謾t] LT',
            nextDay : '[T~貿m貿~rr貿~w 謾t] LT',
            nextWeek : 'dddd [謾t] LT',
            lastDay : '[脻~茅st~茅rd謾~媒 謾t] LT',
            lastWeek : '[L~謾st] dddd [謾t] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '鉚~帽 %s',
            past : '%s 謾~g貿',
            s : '謾 ~f茅w ~s茅c貿~帽ds',
            m : '謾 ~m鉚帽~煤t茅',
            mm : '%d m~鉚帽煤~t茅s',
            h : '謾~帽 h貿~煤r',
            hh : '%d h~貿煤rs',
            d : '謾 ~d謾媒',
            dd : '%d d~謾媒s',
            M : '謾 ~m貿帽~th',
            MM : '%d m~貿帽t~hs',
            y : '謾 ~媒茅謾r',
            yy : '%d 媒~茅謾rs'
        },
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return x_pseudo;

}));
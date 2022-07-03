//! moment.js locale configuration
//! locale : Maldivian [dv]
//! author : Jawish Hameed : https://github.com/jawish

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var months = [
        '迻蕃迋蕺迖蕈迌蕞',
        '迠蕃迍薨迌蕺迖蕈迌蕞',
        '迚蕨迌蕤迼蕺',
        '迖蘄迺薨迌蕞陳蕺',
        '迚蘄',
        '迻瞢迋薨',
        '迻蕺陳蕈迖蕤',
        '迖薤往蕈迤薨迵蕺',
        '迤蕃迺薨迵蕃迚薨迍蕈迌蕺',
        '迖蕻迒薨迵薤迍蕈迌蕺',
        '迋蕻迗蕃迚薨迍蕈迌蕺',
        '迲蕤迤蕃迚薨迍蕈迌蕺'
    ], weekdays = [
        '迖蕨迡蕤迖薨迣蕈',
        '迉薤迚蕈',
        '迖蕈迋薨往蕨迌蕈',
        '迍蕺迡蕈',
        '迍蕺迌蕨迤薨迠蕈迣蕤',
        '迉蕺迒蕺迌蕺',
        '迉蕻迋蕤迉蕤迌蕺'
    ];

    var dv = moment.defineLocale('dv', {
        months : months,
        monthsShort : months,
        weekdays : weekdays,
        weekdaysShort : weekdays,
        weekdaysMin : '迖蕨迡蕤_迉薤迚蕈_迖蕈迋薨_迍蕺迡蕈_迍蕺迌蕨_迉蕺迒蕺_迉蕻迋蕤'.split('_'),
        longDateFormat : {

            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'D/M/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /迚迒|迚迠/,
        isPM : function (input) {
            return '迚迠' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return '迚迒';
            } else {
                return '迚迠';
            }
        },
        calendar : {
            sameDay : '[迚蕤迖蕈迡蕺] LT',
            nextDay : '[迚蕨迡蕈迚蕨] LT',
            nextWeek : 'dddd LT',
            lastDay : '[迖蕤迖薨迶蕃] LT',
            lastWeek : '[迠蕨迖蕤迣蕺迗蕤] dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '迣蕃迌蘄往蕈迖蕤 %s',
            past : '迒蕺迌蕤迋薨 %s',
            s : '迤蕤迒蕺迋薨迣蕺迒蕻達蕃迖薨',
            m : '迚蕤迋蕤迵蕃迖薨',
            mm : '迚蕤迋蕤迵蕺 %d',
            h : '往蕈迲蕤迖蕤迌蕃迖薨',
            hh : '往蕈迲蕤迖蕤迌蕺 %d',
            d : '迡蕺迗蕈迉蕃迖薨',
            dd : '迡蕺迗蕈迤薨 %d',
            M : '迚蕈迉蕃迖薨',
            MM : '迚蕈迤薨 %d',
            y : '迖蕈迉蕈迌蕃迖薨',
            yy : '迖蕈迉蕈迌蕺 %d'
        },
        preparse: function (string) {
            return string.replace(/貙/g, ',');
        },
        postformat: function (string) {
            return string.replace(/,/g, '貙');
        },
        week : {
            dow : 7,  // Sunday is the first day of the week.
            doy : 12  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return dv;

}));
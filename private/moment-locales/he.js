//! moment.js locale configuration
//! locale : Hebrew [he]
//! author : Tomer Cohen : https://github.com/tomer
//! author : Moshe Simantov : https://github.com/DevelopmentIL
//! author : Tal Ater : https://github.com/TalAter

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var he = moment.defineLocale('he', {
        months : '託諝讜讗專_駐讘專讜讗專_譸專抓_讗駐專託詗_譸讗託_託讜諝託_託讜詗託_讗讜讙讜住讟_住駐讟譸讘專_讗讜拽讟讜讘專_諝讜讘譸讘專_讚爪譸讘專'.split('_'),
        monthsShort : '託諝讜壯_駐讘專壯_譸專抓_讗駐專壯_譸讗託_託讜諝託_託讜詗託_讗讜讙壯_住駐讟壯_讗讜拽壯_諝讜讘壯_讚爪譸壯'.split('_'),
        weekdays : '專讗磚讜讅_磚諝託_磚詗託磚託_專讘託注託_讞譸託磚託_磚託磚託_磚讘轉'.split('_'),
        weekdaysShort : '讗壯_讘壯_讙壯_讚壯_囈壯_讜壯_磚壯'.split('_'),
        weekdaysMin : '讗_讘_讙_讚_囈_讜_磚'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [讘]MMMM YYYY',
            LLL : 'D [讘]MMMM YYYY HH:mm',
            LLLL : 'dddd, D [讘]MMMM YYYY HH:mm',
            l : 'D/M/YYYY',
            ll : 'D MMM YYYY',
            lll : 'D MMM YYYY HH:mm',
            llll : 'ddd, D MMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[囈託讜詖 讘志]LT',
            nextDay : '[譸讞專 讘志]LT',
            nextWeek : 'dddd [讘磚注囈] LT',
            lastDay : '[讗轉譸讜詗 讘志]LT',
            lastWeek : '[讘託讜詖] dddd [囈讗讞專讜讅 讘磚注囈] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '讘注讜讚 %s',
            past : '詗駐諝託 %s',
            s : '譸住駐專 磚諝託讜轉',
            m : '讚拽囈',
            mm : '%d 讚拽讜轉',
            h : '磚注囈',
            hh : function (number) {
                if (number === 2) {
                    return '磚注轉託託詖';
                }
                return number + ' 磚注讜轉';
            },
            d : '託讜詖',
            dd : function (number) {
                if (number === 2) {
                    return '託讜譸託託詖';
                }
                return number + ' 託譸託詖';
            },
            M : '讞讜讚磚',
            MM : function (number) {
                if (number === 2) {
                    return '讞讜讚磚託託詖';
                }
                return number + ' 讞讜讚磚託詖';
            },
            y : '磚諝囈',
            yy : function (number) {
                if (number === 2) {
                    return '磚諝轉託託詖';
                } else if (number % 10 === 0 && number !== 10) {
                    return number + ' 磚諝囈';
                }
                return number + ' 磚諝託詖';
            }
        },
        meridiemParse: /讗讞囈"爪|詗駐諝囈"爪|讗讞專託 囈爪囈專託託詖|詗駐諝託 囈爪囈專託託詖|詗駐諝讜轉 讘讜拽專|讘讘讜拽專|讘注專讘/i,
        isPM : function (input) {
            return /^(讗讞囈"爪|讗讞專託 囈爪囈專託託詖|讘注專讘)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 5) {
                return '詗駐諝讜轉 讘讜拽專';
            } else if (hour < 10) {
                return '讘讘讜拽專';
            } else if (hour < 12) {
                return isLower ? '詗駐諝囈"爪' : '詗駐諝託 囈爪囈專託託詖';
            } else if (hour < 18) {
                return isLower ? '讗讞囈"爪' : '讗讞專託 囈爪囈專託託詖';
            } else {
                return '讘注專讘';
            }
        }
    });

    return he;

}));
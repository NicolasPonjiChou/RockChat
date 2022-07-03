//! moment.js locale configuration
//! locale : Persian [fa]
//! author : Ebrahim Byagowi : https://github.com/ebraminio

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var symbolMap = {
        '1': '郾',
        '2': '鄄',
        '3': '鄢',
        '4': '鄞',
        '5': '鄣',
        '6': '鄱',
        '7': '鄯',
        '8': '鄹',
        '9': '酃',
        '0': '郯'
    }, numberMap = {
        '郾': '1',
        '鄄': '2',
        '鄢': '3',
        '鄞': '4',
        '鄣': '5',
        '鄱': '6',
        '鄯': '7',
        '鄹': '8',
        '酃': '9',
        '郯': '0'
    };

    var fa = moment.defineLocale('fa', {
        months : '跇丕賳賵蹖賴_賮賵乇蹖賴_賲丕乇爻_丌賵乇蹖賱_賲賴_跇賵卅賳_跇賵卅蹖賴_丕賵鬲_爻倬鬲丕賲亙乇_丕謳鬲亙乇_賳賵丕賲亙乇_爻丕賲亙乇'.split('_'),
        monthsShort : '跇丕賳賵蹖賴_賮賵乇蹖賴_賲丕乇爻_丌賵乇蹖賱_賲賴_跇賵卅賳_跇賵卅蹖賴_丕賵鬲_爻倬鬲丕賲亙乇_丕謳鬲亙乇_賳賵丕賲亙乇_爻丕賲亙乇'.split('_'),
        weekdays : '蹖謳\u200c卮賳亙賴_賵卮賳亙賴_爻賴\u200c卮賳亙賴_趩賴丕乇卮賳亙賴_倬賳噩\u200c卮賳亙賴_噩賲毓賴_卮賳亙賴'.split('_'),
        weekdaysShort : '蹖謳\u200c卮賳亙賴_賵卮賳亙賴_爻賴\u200c卮賳亙賴_趩賴丕乇卮賳亙賴_倬賳噩\u200c卮賳亙賴_噩賲毓賴_卮賳亙賴'.split('_'),
        weekdaysMin : '蹖__爻_趩_倬_噩_卮'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        meridiemParse: /賯亙賱 丕夭 馗賴乇|亙毓 丕夭 馗賴乇/,
        isPM: function (input) {
            return /亙毓 丕夭 馗賴乇/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return '賯亙賱 丕夭 馗賴乇';
            } else {
                return '亙毓 丕夭 馗賴乇';
            }
        },
        calendar : {
            sameDay : '[丕賲乇賵夭 爻丕毓鬲] LT',
            nextDay : '[賮乇丕 爻丕毓鬲] LT',
            nextWeek : 'dddd [爻丕毓鬲] LT',
            lastDay : '[蹖乇賵夭 爻丕毓鬲] LT',
            lastWeek : 'dddd [倬蹖卮] [爻丕毓鬲] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '乇 %s',
            past : '%s 倬蹖卮',
            s : '趩賳蹖賳 孬丕賳蹖賴',
            m : '蹖謳 賯蹖賯賴',
            mm : '%d 賯蹖賯賴',
            h : '蹖謳 爻丕毓鬲',
            hh : '%d 爻丕毓鬲',
            d : '蹖謳 乇賵夭',
            dd : '%d 乇賵夭',
            M : '蹖謳 賲丕賴',
            MM : '%d 賲丕賴',
            y : '蹖謳 爻丕賱',
            yy : '%d 爻丕賱'
        },
        preparse: function (string) {
            return string.replace(/[郯-酃]/g, function (match) {
                return numberMap[match];
            }).replace(/貙/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            }).replace(/,/g, '貙');
        },
        ordinalParse: /\d{1,2}賲/,
        ordinal : '%d賲',
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12 // The week that contains Jan 1st is the first week of the year.
        }
    });

    return fa;

}));
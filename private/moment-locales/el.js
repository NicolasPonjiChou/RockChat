//! moment.js locale configuration
//! locale : Greek [el]
//! author : Aggelos Karalias : https://github.com/mehiel

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }


    var el = moment.defineLocale('el', {
        monthsNominativeEl : '螜偽謂慰蠀維蟻喂慰蟼_桅蔚尾蟻慰蠀維蟻喂慰蟼_螠維蟻蟿喂慰蟼_螒蟺蟻委位喂慰蟼_螠維喂慰蟼_螜慰蠉謂喂慰蟼_螜慰蠉位喂慰蟼_螒蠉緯慰蠀蟽蟿慰蟼_危蔚蟺蟿葦渭尾蟻喂慰蟼_螣魏蟿蠋尾蟻喂慰蟼_蚊慰葦渭尾蟻喂慰蟼_螖蔚魏葦渭尾蟻喂慰蟼'.split('_'),
        monthsGenitiveEl : '螜偽謂慰蠀偽蟻委慰蠀_桅蔚尾蟻慰蠀偽蟻委慰蠀_螠偽蟻蟿委慰蠀_螒蟺蟻喂位委慰蠀_螠偽螑慰蠀_螜慰蠀謂委慰蠀_螜慰蠀位委慰蠀_螒蠀緯慰蠉蟽蟿慰蠀_危蔚蟺蟿蔚渭尾蟻委慰蠀_螣魏蟿蠅尾蟻委慰蠀_蚊慰蔚渭尾蟻委慰蠀_螖蔚魏蔚渭尾蟻委慰蠀'.split('_'),
        months : function (momentToFormat, format) {
            if (/D/.test(format.substring(0, format.indexOf('MMMM')))) { // if there is a day number before 'MMMM'
                return this._monthsGenitiveEl[momentToFormat.month()];
            } else {
                return this._monthsNominativeEl[momentToFormat.month()];
            }
        },
        monthsShort : '螜偽謂_桅蔚尾_螠偽蟻_螒蟺蟻_螠偽蠆_螜慰蠀謂_螜慰蠀位_螒蠀緯_危蔚蟺_螣魏蟿_蚊慰蔚_螖蔚魏'.split('_'),
        weekdays : '螝蠀蟻喂偽魏萎_螖蔚蠀蟿葦蟻偽_韋蟻委蟿畏_韋蔚蟿維蟻蟿畏_螤葦渭蟺蟿畏_螤偽蟻偽蟽魏蔚蠀萎_危維尾尾偽蟿慰'.split('_'),
        weekdaysShort : '螝蠀蟻_螖蔚蠀_韋蟻喂_韋蔚蟿_螤蔚渭_螤偽蟻_危偽尾'.split('_'),
        weekdaysMin : '螝蠀_螖蔚_韋蟻_韋蔚_螤蔚_螤偽_危偽'.split('_'),
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? '渭渭' : '螠螠';
            } else {
                return isLower ? '蟺渭' : '螤螠';
            }
        },
        isPM : function (input) {
            return ((input + '').toLowerCase()[0] === '渭');
        },
        meridiemParse : /[螤螠]\.?螠?\.?/i,
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendarEl : {
            sameDay : '[危萎渭蔚蟻偽 {}] LT',
            nextDay : '[螒蠉蟻喂慰 {}] LT',
            nextWeek : 'dddd [{}] LT',
            lastDay : '[圍胃蔚蟼 {}] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 6:
                        return '[蟿慰 蟺蟻慰畏緯慰蠉渭蔚謂慰] dddd [{}] LT';
                    default:
                        return '[蟿畏謂 蟺蟻慰畏緯慰蠉渭蔚謂畏] dddd [{}] LT';
                }
            },
            sameElse : 'L'
        },
        calendar : function (key, mom) {
            var output = this._calendarEl[key],
                hours = mom && mom.hours();
            if (isFunction(output)) {
                output = output.apply(mom);
            }
            return output.replace('{}', (hours % 12 === 1 ? '蟽蟿畏' : '蟽蟿喂蟼'));
        },
        relativeTime : {
            future : '蟽蔚 %s',
            past : '%s 蟺蟻喂謂',
            s : '位委緯偽 未蔚蠀蟿蔚蟻蠈位蔚蟺蟿偽',
            m : '葦謂偽 位蔚蟺蟿蠈',
            mm : '%d 位蔚蟺蟿維',
            h : '渭委偽 蠋蟻偽',
            hh : '%d 蠋蟻蔚蟼',
            d : '渭委偽 渭葦蟻偽',
            dd : '%d 渭葦蟻蔚蟼',
            M : '葦謂偽蟼 渭萎謂偽蟼',
            MM : '%d 渭萎謂蔚蟼',
            y : '葦謂偽蟼 蠂蟻蠈謂慰蟼',
            yy : '%d 蠂蟻蠈謂喂偽'
        },
        ordinalParse: /\d{1,2}畏/,
        ordinal: '%d畏',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4st is the first week of the year.
        }
    });

    return el;

}));
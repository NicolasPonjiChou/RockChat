//! moment.js locale configuration
//! locale : Armenian [hy-am]
//! author : Armendarabyan : https://github.com/armendarabyan

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var hy_am = moment.defineLocale('hy-am', {
        months : {
            format: '瞻嶄謧斬站鍘謤齋_謨搾湛謤站鍘謤齋_沾鍘謤湛齋_鍘蘸謤齋宅齋_沾鍘盞齋戰齋_瞻嶄謧斬齋戰齋_瞻嶄謧宅齋戰齋_謪眨嶄戰湛嶄戰齋_戰搾蘸湛搾沾閘搾謤齋_瞻嶄寨湛搾沾閘搾謤齋_斬嶄盞搾沾閘搾謤齋_柵搾寨湛搾沾閘搾謤齋'.split('_'),
            standalone: '瞻嶄謧斬站鍘謤_謨搾湛謤站鍘謤_沾鍘謤湛_鍘蘸謤齋宅_沾鍘盞齋戰_瞻嶄謧斬齋戰_瞻嶄謧宅齋戰_謪眨嶄戰湛嶄戰_戰搾蘸湛搾沾閘搾謤_瞻嶄寨湛搾沾閘搾謤_斬嶄盞搾沾閘搾謤_柵搾寨湛搾沾閘搾謤'.split('_')
        },
        monthsShort : '瞻斬站_謨湛謤_沾謤湛_鍘蘸謤_沾盞戰_瞻斬戰_瞻宅戰_謪眨戰_戰蘸湛_瞻寨湛_斬沾閘_柵寨湛'.split('_'),
        weekdays : '寨齋謤鍘寨齋_搾謤寨嶄謧輾鍘閘詐齋_搾謤搾謨輾鍘閘詐齋_展嶄謤搾謨輾鍘閘詐齋_瞻齋斬眨輾鍘閘詐齋_嶄謧謤閘鍘詐_輾鍘閘鍘詐'.split('_'),
        weekdaysShort : '寨謤寨_搾謤寨_搾謤謨_展謤謨_瞻斬眨_嶄謧謤閘_輾閘詐'.split('_'),
        weekdaysMin : '寨謤寨_搾謤寨_搾謤謨_展謤謨_瞻斬眨_嶄謧謤閘_輾閘詐'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY 詐.',
            LLL : 'D MMMM YYYY 詐., HH:mm',
            LLLL : 'dddd, D MMMM YYYY 詐., HH:mm'
        },
        calendar : {
            sameDay: '[鍘盞戰謪謤] LT',
            nextDay: '[站鍘詹炸] LT',
            lastDay: '[搾謤搾寨] LT',
            nextWeek: function () {
                return 'dddd [謪謤炸 摘鍘沾炸] LT';
            },
            lastWeek: function () {
                return '[鍘斬謥鍘債] dddd [謪謤炸 摘鍘沾炸] LT';
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : '%s 瞻搾湛嶄',
            past : '%s 鍘占鍘棧',
            s : '沾齋 謨鍘斬齋 站鍘盞謤寨盞鍘斬',
            m : '謤嶄蘸搾',
            mm : '%d 謤嶄蘸搾',
            h : '摘鍘沾',
            hh : '%d 摘鍘沾',
            d : '謪謤',
            dd : '%d 謪謤',
            M : '鍘沾齋戰',
            MM : '%d 鍘沾齋戰',
            y : '湛鍘謤齋',
            yy : '%d 湛鍘謤齋'
        },
        meridiemParse: /眨齋輾搾謤站鍘|鍘占鍘站嶄湛站鍘|謥搾謤搾寨站鍘|搾謤搾寨嶄盞鍘斬/,
        isPM: function (input) {
            return /^(謥搾謤搾寨站鍘|搾謤搾寨嶄盞鍘斬)$/.test(input);
        },
        meridiem : function (hour) {
            if (hour < 4) {
                return '眨齋輾搾謤站鍘';
            } else if (hour < 12) {
                return '鍘占鍘站嶄湛站鍘';
            } else if (hour < 17) {
                return '謥搾謤搾寨站鍘';
            } else {
                return '搾謤搾寨嶄盞鍘斬';
            }
        },
        ordinalParse: /\d{1,2}|\d{1,2}-(齋斬|謤柵)/,
        ordinal: function (number, period) {
            switch (period) {
                case 'DDD':
                case 'w':
                case 'W':
                case 'DDDo':
                    if (number === 1) {
                        return number + '-齋斬';
                    }
                    return number + '-謤柵';
                default:
                    return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return hy_am;

}));
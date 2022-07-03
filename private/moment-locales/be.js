//! moment.js locale configuration
//! locale : Belarusian [be]
//! author : Dmitry Demidov : https://github.com/demidov91
//! author: Praleska: http://praleska.pro/
//! Author : Menelion Elens煤le : https://github.com/Oire

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    function plural(word, num) {
        var forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
    }
    function relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
            'mm': withoutSuffix ? '袖脅褨謝褨薪邪_袖脅褨謝褨薪褘_袖脅褨謝褨薪' : '袖脅褨謝褨薪褍_袖脅褨謝褨薪褘_袖脅褨謝褨薪',
            'hh': withoutSuffix ? '諧邪寫蟹褨薪邪_諧邪寫蟹褨薪褘_諧邪寫蟹褨薪' : '諧邪寫蟹褨薪褍_諧邪寫蟹褨薪褘_諧邪寫蟹褨薪',
            'dd': '寫蟹械薪褜_寫薪褨_寫蟹褢薪',
            'MM': '屑械褋褟褑_屑械褋褟褑褘_屑械褋褟褑邪褳',
            'yy': '諧芯寫_諧邪寫褘_諧邪寫芯褳'
        };
        if (key === 'm') {
            return withoutSuffix ? '袖脅褨謝褨薪邪' : '袖脅褨謝褨薪褍';
        }
        else if (key === 'h') {
            return withoutSuffix ? '諧邪寫蟹褨薪邪' : '諧邪寫蟹褨薪褍';
        }
        else {
            return number + ' ' + plural(format[key], +number);
        }
    }

    var be = moment.defineLocale('be', {
        months : {
            format: '褋褌褍寫蟹械薪褟_謝褞褌邪諧邪_褋邪瀉邪脅褨瀉邪_瀉褉邪褋邪脅褨瀉邪_褌褉邪褳薪褟_褔襌褉脅械薪褟_謝褨鋅械薪褟_卸薪褨褳薪褟_脅械褉邪褋薪褟_瀉邪褋褌褉褘褔薪褨瀉邪_謝褨褋褌邪鋅邪寫邪_褋薪械卸薪褟'.split('_'),
            standalone: '褋褌褍寫蟹械薪褜_謝褞褌褘_褋邪瀉邪脅褨瀉_瀉褉邪褋邪脅褨瀉_褌褉邪脅械薪褜_褔襌褉脅械薪褜_謝褨鋅械薪褜_卸薪褨脅械薪褜_脅械褉邪褋械薪褜_瀉邪褋褌褉褘褔薪褨瀉_謝褨褋褌邪鋅邪寫_褋薪械卸邪薪褜'.split('_')
        },
        monthsShort : '褋褌褍寫_謝褞褌_褋邪瀉_瀉褉邪褋_褌褉邪脅_褔襌褉脅_謝褨鋅_卸薪褨脅_脅械褉_瀉邪褋褌_謝褨褋褌_褋薪械卸'.split('_'),
        weekdays : {
            format: '薪褟寫蟹械謝褞_鋅邪薪褟寫蟹械謝邪瀉_邪褳褌芯褉邪瀉_褋械褉邪寫褍_褔邪褑脅械褉_鋅褟褌薪褨褑褍_褋褍斜芯褌褍'.split('_'),
            standalone: '薪褟寫蟹械謝褟_鋅邪薪褟寫蟹械謝邪瀉_邪褳褌芯褉邪瀉_褋械褉邪寫邪_褔邪褑脅械褉_鋅褟褌薪褨褑邪_褋褍斜芯褌邪'.split('_'),
            isFormat: /\[ ?[袙脅] ?(?:屑褨薪褍謝褍褞|薪邪褋褌褍鋅薪褍褞)? ?\] ?dddd/
        },
        weekdaysShort : '薪寫_鋅薪_邪褌_褋褉_褔褑_鋅褌_褋斜'.split('_'),
        weekdaysMin : '薪寫_鋅薪_邪褌_褋褉_褔褑_鋅褌_褋斜'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY 諧.',
            LLL : 'D MMMM YYYY 諧., HH:mm',
            LLLL : 'dddd, D MMMM YYYY 諧., HH:mm'
        },
        calendar : {
            sameDay: '[小褢薪薪褟 褳] LT',
            nextDay: '[袟邪褳褌褉邪 褳] LT',
            lastDay: '[校褔芯褉邪 褳] LT',
            nextWeek: function () {
                return '[校] dddd [褳] LT';
            },
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return '[校 屑褨薪褍謝褍褞] dddd [褳] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[校 屑褨薪褍謝褘] dddd [褳] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : '鋅褉邪蟹 %s',
            past : '%s 褌邪屑褍',
            s : '薪械瀉邪謝褜瀉褨 褋械瀉褍薪寫',
            m : relativeTimeWithPlural,
            mm : relativeTimeWithPlural,
            h : relativeTimeWithPlural,
            hh : relativeTimeWithPlural,
            d : '寫蟹械薪褜',
            dd : relativeTimeWithPlural,
            M : '屑械褋褟褑',
            MM : relativeTimeWithPlural,
            y : '諧芯寫',
            yy : relativeTimeWithPlural
        },
        meridiemParse: /薪芯褔褘|褉邪薪褨褑褘|寫薪褟|脅械褔邪褉邪/,
        isPM : function (input) {
            return /^(寫薪褟|脅械褔邪褉邪)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return '薪芯褔褘';
            } else if (hour < 12) {
                return '褉邪薪褨褑褘';
            } else if (hour < 17) {
                return '寫薪褟';
            } else {
                return '脅械褔邪褉邪';
            }
        },
        ordinalParse: /\d{1,2}-(褨|褘|諧邪)/,
        ordinal: function (number, period) {
            switch (period) {
                case 'M':
                case 'd':
                case 'DDD':
                case 'w':
                case 'W':
                    return (number % 10 === 2 || number % 10 === 3) && (number % 100 !== 12 && number % 100 !== 13) ? number + '-褨' : number + '-褘';
                case 'D':
                    return number + '-諧邪';
                default:
                    return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return be;

}));
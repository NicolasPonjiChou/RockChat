//! moment.js locale configuration
//! locale : Ukrainian [uk]
//! author : zemlanin : https://github.com/zemlanin
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
            'mm': withoutSuffix ? '袖脅懈謝懈薪邪_袖脅懈謝懈薪懈_袖脅懈謝懈薪' : '袖脅懈謝懈薪褍_袖脅懈謝懈薪懈_袖脅懈謝懈薪',
            'hh': withoutSuffix ? '諧芯寫懈薪邪_諧芯寫懈薪懈_諧芯寫懈薪' : '諧芯寫懈薪褍_諧芯寫懈薪懈_諧芯寫懈薪',
            'dd': '寫械薪褜_寫薪褨_寫薪褨脅',
            'MM': '屑褨褋褟褑褜_屑褨褋褟褑褨_屑褨褋褟褑褨脅',
            'yy': '褉褨瀉_褉芯瀉懈_褉芯瀉褨脅'
        };
        if (key === 'm') {
            return withoutSuffix ? '袖脅懈謝懈薪邪' : '袖脅懈謝懈薪褍';
        }
        else if (key === 'h') {
            return withoutSuffix ? '諧芯寫懈薪邪' : '諧芯寫懈薪褍';
        }
        else {
            return number + ' ' + plural(format[key], +number);
        }
    }
    function weekdaysCaseReplace(m, format) {
        var weekdays = {
            'nominative': '薪械寫褨謝褟_鋅芯薪械寫褨謝芯瀉_脅褨脅褌芯褉芯瀉_褋械褉械寫邪_褔械褌脅械褉_鋅鈥櫻征傂叫稈喲廮褋褍斜芯褌邪'.split('_'),
            'accusative': '薪械寫褨謝褞_鋅芯薪械寫褨謝芯瀉_脅褨脅褌芯褉芯瀉_褋械褉械寫褍_褔械褌脅械褉_鋅鈥櫻征傂叫稈喲厲褋褍斜芯褌褍'.split('_'),
            'genitive': '薪械寫褨謝褨_鋅芯薪械寫褨謝瀉邪_脅褨脅褌芯褉瀉邪_褋械褉械寫懈_褔械褌脅械褉諧邪_鋅鈥櫻征傂叫稈喲朹褋褍斜芯褌懈'.split('_')
        },
        nounCase = (/(\[[袙脅校褍]\]) ?dddd/).test(format) ?
            'accusative' :
            ((/\[?(?:屑懈薪褍謝芯褩|薪邪褋褌褍鋅薪芯褩)? ?\] ?dddd/).test(format) ?
                'genitive' :
                'nominative');
        return weekdays[nounCase][m.day()];
    }
    function processHoursFunction(str) {
        return function () {
            return str + '芯' + (this.hours() === 11 ? '斜' : '') + '] LT';
        };
    }

    var uk = moment.defineLocale('uk', {
        months : {
            'format': '褋褨褔薪褟_謝褞褌芯諧芯_斜械褉械蟹薪褟_瀉脅褨褌薪褟_褌褉邪脅薪褟_褔械褉脅薪褟_謝懈鋅薪褟_褋械褉鋅薪褟_脅械褉械褋薪褟_卸芯脅褌薪褟_謝懈褋褌芯鋅邪寫邪_諧褉褍寫薪褟'.split('_'),
            'standalone': '褋褨褔械薪褜_謝褞褌懈洩_斜械褉械蟹械薪褜_瀉脅褨褌械薪褜_褌褉邪脅械薪褜_褔械褉脅械薪褜_謝懈鋅械薪褜_褋械褉鋅械薪褜_脅械褉械褋械薪褜_卸芯脅褌械薪褜_謝懈褋褌芯鋅邪寫_諧褉褍寫械薪褜'.split('_')
        },
        monthsShort : '褋褨褔_謝褞褌_斜械褉_瀉脅褨褌_褌褉邪脅_褔械褉脅_謝懈鋅_褋械褉鋅_脅械褉_卸芯脅褌_謝懈褋褌_諧褉褍寫'.split('_'),
        weekdays : weekdaysCaseReplace,
        weekdaysShort : '薪寫_鋅薪_脅褌_褋褉_褔褌_鋅褌_褋斜'.split('_'),
        weekdaysMin : '薪寫_鋅薪_脅褌_褋褉_褔褌_鋅褌_褋斜'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY 褉.',
            LLL : 'D MMMM YYYY 褉., HH:mm',
            LLLL : 'dddd, D MMMM YYYY 褉., HH:mm'
        },
        calendar : {
            sameDay: processHoursFunction('[小褜芯諧芯寫薪褨 '),
            nextDay: processHoursFunction('[袟邪脅褌褉邪 '),
            lastDay: processHoursFunction('[袙褔芯褉邪 '),
            nextWeek: processHoursFunction('[校] dddd ['),
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return processHoursFunction('[袦懈薪褍謝芯褩] dddd [').call(this);
                    case 1:
                    case 2:
                    case 4:
                        return processHoursFunction('[袦懈薪褍謝芯諧芯] dddd [').call(this);
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : '蟹邪 %s',
            past : '%s 褌芯屑褍',
            s : '寫械瀉褨謝褜瀉邪 褋械瀉褍薪寫',
            m : relativeTimeWithPlural,
            mm : relativeTimeWithPlural,
            h : '諧芯寫懈薪褍',
            hh : relativeTimeWithPlural,
            d : '寫械薪褜',
            dd : relativeTimeWithPlural,
            M : '屑褨褋褟褑褜',
            MM : relativeTimeWithPlural,
            y : '褉褨瀉',
            yy : relativeTimeWithPlural
        },
        // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
        meridiemParse: /薪芯褔褨|褉邪薪瀉褍|寫薪褟|脅械褔芯褉邪/,
        isPM: function (input) {
            return /^(寫薪褟|脅械褔芯褉邪)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return '薪芯褔褨';
            } else if (hour < 12) {
                return '褉邪薪瀉褍';
            } else if (hour < 17) {
                return '寫薪褟';
            } else {
                return '脅械褔芯褉邪';
            }
        },
        ordinalParse: /\d{1,2}-(洩|諧芯)/,
        ordinal: function (number, period) {
            switch (period) {
                case 'M':
                case 'd':
                case 'DDD':
                case 'w':
                case 'W':
                    return number + '-洩';
                case 'D':
                    return number + '-諧芯';
                default:
                    return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return uk;

}));
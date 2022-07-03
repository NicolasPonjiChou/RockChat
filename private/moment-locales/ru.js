//! moment.js locale configuration
//! locale : Russian [ru]
//! author : Viktorminator : https://github.com/Viktorminator
//! Author : Menelion Elens煤le : https://github.com/Oire
//! author : 袣芯褉械薪斜械褉諧 袦邪褉瀉 : https://github.com/socketpair

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
            'mm': withoutSuffix ? '屑懈薪褍褌邪_屑懈薪褍褌褘_屑懈薪褍褌' : '屑懈薪褍褌褍_屑懈薪褍褌褘_屑懈薪褍褌',
            'hh': '褔邪褋_褔邪褋邪_褔邪褋芯脅',
            'dd': '寫械薪褜_寫薪褟_寫薪械洩',
            'MM': '屑械褋褟褑_屑械褋褟褑邪_屑械褋褟褑械脅',
            'yy': '諧芯寫_諧芯寫邪_謝械褌'
        };
        if (key === 'm') {
            return withoutSuffix ? '屑懈薪褍褌邪' : '屑懈薪褍褌褍';
        }
        else {
            return number + ' ' + plural(format[key], +number);
        }
    }
    var monthsParse = [/^褟薪脅/i, /^褎械脅/i, /^屑邪褉/i, /^邪鋅褉/i, /^屑邪[洩褟]/i, /^懈褞薪/i, /^懈褞謝/i, /^邪脅諧/i, /^褋械薪/i, /^芯瀉褌/i, /^薪芯褟/i, /^寫械瀉/i];

    // http://new.gramota.ru/spravka/rules/139-prop : 摟 103
    // 小芯瀉褉邪褖械薪懈褟 屑械褋褟褑械脅: http://new.gramota.ru/spravka/buro/search-answer?s=242637
    // CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
    var ru = moment.defineLocale('ru', {
        months : {
            format: '褟薪脅邪褉褟_褎械脅褉邪謝褟_屑邪褉褌邪_邪鋅褉械謝褟_屑邪褟_懈褞薪褟_懈褞謝褟_邪脅諧褍褋褌邪_褋械薪褌褟斜褉褟_芯瀉褌褟斜褉褟_薪芯褟斜褉褟_寫械瀉邪斜褉褟'.split('_'),
            standalone: '褟薪脅邪褉褜_褎械脅褉邪謝褜_屑邪褉褌_邪鋅褉械謝褜_屑邪洩_懈褞薪褜_懈褞謝褜_邪脅諧褍褋褌_褋械薪褌褟斜褉褜_芯瀉褌褟斜褉褜_薪芯褟斜褉褜_寫械瀉邪斜褉褜'.split('_')
        },
        monthsShort : {
            // 鋅芯 CLDR 懈屑械薪薪芯 "懈褞謝." 懈 "懈褞薪.", 薪芯 瀉邪瀉芯洩 褋屑褘褋謝 屑械薪褟褌褜 斜褍瀉脅褍 薪邪 褌芯褔瀉褍 ?
            format: '褟薪脅._褎械脅褉._屑邪褉._邪鋅褉._屑邪褟_懈褞薪褟_懈褞謝褟_邪脅諧._褋械薪褌._芯瀉褌._薪芯褟斜._寫械瀉.'.split('_'),
            standalone: '褟薪脅._褎械脅褉._屑邪褉褌_邪鋅褉._屑邪洩_懈褞薪褜_懈褞謝褜_邪脅諧._褋械薪褌._芯瀉褌._薪芯褟斜._寫械瀉.'.split('_')
        },
        weekdays : {
            standalone: '脅芯褋瀉褉械褋械薪褜械_鋅芯薪械寫械謝褜薪懈瀉_脅褌芯褉薪懈瀉_褋褉械寫邪_褔械褌脅械褉諧_鋅褟褌薪懈褑邪_褋褍斜斜芯褌邪'.split('_'),
            format: '脅芯褋瀉褉械褋械薪褜械_鋅芯薪械寫械謝褜薪懈瀉_脅褌芯褉薪懈瀉_褋褉械寫褍_褔械褌脅械褉諧_鋅褟褌薪懈褑褍_褋褍斜斜芯褌褍'.split('_'),
            isFormat: /\[ ?[袙脅] ?(?:鋅褉芯褕謝褍褞|褋謝械寫褍褞褖褍褞|襌褌褍)? ?\] ?dddd/
        },
        weekdaysShort : '脅褋_鋅薪_脅褌_褋褉_褔褌_鋅褌_褋斜'.split('_'),
        weekdaysMin : '脅褋_鋅薪_脅褌_褋褉_褔褌_鋅褌_褋斜'.split('_'),
        monthsParse : monthsParse,
        longMonthsParse : monthsParse,
        shortMonthsParse : monthsParse,

        // 鋅芯謝薪褘械 薪邪蟹脅邪薪懈褟 褋 鋅邪寫械卸邪屑懈, 鋅芯 褌褉懈 斜褍瀉脅褘, 寫謝褟 薪械瀉芯褌芯褉褘袖, 鋅芯 4 斜褍瀉脅褘, 褋芯瀉褉邪褖械薪懈褟 褋 褌芯褔瀉芯洩 懈 斜械蟹 褌芯褔瀉懈
        monthsRegex: /^(褟薪脅邪褉[褜褟]|褟薪脅\.?|褎械脅褉邪謝[褜褟]|褎械脅褉?\.?|屑邪褉褌邪?|屑邪褉\.?|邪鋅褉械謝[褜褟]|邪鋅褉\.?|屑邪[洩褟]|懈褞薪[褜褟]|懈褞薪\.?|懈褞謝[褜褟]|懈褞謝\.?|邪脅諧褍褋褌邪?|邪脅諧\.?|褋械薪褌褟斜褉[褜褟]|褋械薪褌?\.?|芯瀉褌褟斜褉[褜褟]|芯瀉褌\.?|薪芯褟斜褉[褜褟]|薪芯褟斜?\.?|寫械瀉邪斜褉[褜褟]|寫械瀉\.?)/i,

        // 瀉芯鋅懈褟 鋅褉械寫褘寫褍褖械諧芯
        monthsShortRegex: /^(褟薪脅邪褉[褜褟]|褟薪脅\.?|褎械脅褉邪謝[褜褟]|褎械脅褉?\.?|屑邪褉褌邪?|屑邪褉\.?|邪鋅褉械謝[褜褟]|邪鋅褉\.?|屑邪[洩褟]|懈褞薪[褜褟]|懈褞薪\.?|懈褞謝[褜褟]|懈褞謝\.?|邪脅諧褍褋褌邪?|邪脅諧\.?|褋械薪褌褟斜褉[褜褟]|褋械薪褌?\.?|芯瀉褌褟斜褉[褜褟]|芯瀉褌\.?|薪芯褟斜褉[褜褟]|薪芯褟斜?\.?|寫械瀉邪斜褉[褜褟]|寫械瀉\.?)/i,

        // 鋅芯謝薪褘械 薪邪蟹脅邪薪懈褟 褋 鋅邪寫械卸邪屑懈
        monthsStrictRegex: /^(褟薪脅邪褉[褟褜]|褎械脅褉邪謝[褟褜]|屑邪褉褌邪?|邪鋅褉械謝[褟褜]|屑邪[褟洩]|懈褞薪[褟褜]|懈褞謝[褟褜]|邪脅諧褍褋褌邪?|褋械薪褌褟斜褉[褟褜]|芯瀉褌褟斜褉[褟褜]|薪芯褟斜褉[褟褜]|寫械瀉邪斜褉[褟褜])/i,

        // 袙褘褉邪卸械薪懈械, 瀉芯褌芯褉芯械 褋芯芯褌脅械褋褌脅褍械褌 褌芯謝褜瀉芯 褋芯瀉褉邪褖褢薪薪褘屑 褎芯褉屑邪屑
        monthsShortStrictRegex: /^(褟薪脅\.|褎械脅褉?\.|屑邪褉[褌.]|邪鋅褉\.|屑邪[褟洩]|懈褞薪[褜褟.]|懈褞謝[褜褟.]|邪脅諧\.|褋械薪褌?\.|芯瀉褌\.|薪芯褟斜?\.|寫械瀉\.)/i,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY 諧.',
            LLL : 'D MMMM YYYY 諧., HH:mm',
            LLLL : 'dddd, D MMMM YYYY 諧., HH:mm'
        },
        calendar : {
            sameDay: '[小械諧芯寫薪褟 脅] LT',
            nextDay: '[袟邪脅褌褉邪 脅] LT',
            lastDay: '[袙褔械褉邪 脅] LT',
            nextWeek: function (now) {
                if (now.week() !== this.week()) {
                    switch (this.day()) {
                        case 0:
                            return '[袙 褋謝械寫褍褞褖械械] dddd [脅] LT';
                        case 1:
                        case 2:
                        case 4:
                            return '[袙 褋謝械寫褍褞褖懈洩] dddd [脅] LT';
                        case 3:
                        case 5:
                        case 6:
                            return '[袙 褋謝械寫褍褞褖褍褞] dddd [脅] LT';
                    }
                } else {
                    if (this.day() === 2) {
                        return '[袙芯] dddd [脅] LT';
                    } else {
                        return '[袙] dddd [脅] LT';
                    }
                }
            },
            lastWeek: function (now) {
                if (now.week() !== this.week()) {
                    switch (this.day()) {
                        case 0:
                            return '[袙 鋅褉芯褕謝芯械] dddd [脅] LT';
                        case 1:
                        case 2:
                        case 4:
                            return '[袙 鋅褉芯褕謝褘洩] dddd [脅] LT';
                        case 3:
                        case 5:
                        case 6:
                            return '[袙 鋅褉芯褕謝褍褞] dddd [脅] LT';
                    }
                } else {
                    if (this.day() === 2) {
                        return '[袙芯] dddd [脅] LT';
                    } else {
                        return '[袙] dddd [脅] LT';
                    }
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : '褔械褉械蟹 %s',
            past : '%s 薪邪蟹邪寫',
            s : '薪械褋瀉芯謝褜瀉芯 褋械瀉褍薪寫',
            m : relativeTimeWithPlural,
            mm : relativeTimeWithPlural,
            h : '褔邪褋',
            hh : relativeTimeWithPlural,
            d : '寫械薪褜',
            dd : relativeTimeWithPlural,
            M : '屑械褋褟褑',
            MM : relativeTimeWithPlural,
            y : '諧芯寫',
            yy : relativeTimeWithPlural
        },
        meridiemParse: /薪芯褔懈|褍褌褉邪|寫薪褟|脅械褔械褉邪/i,
        isPM : function (input) {
            return /^(寫薪褟|脅械褔械褉邪)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return '薪芯褔懈';
            } else if (hour < 12) {
                return '褍褌褉邪';
            } else if (hour < 17) {
                return '寫薪褟';
            } else {
                return '脅械褔械褉邪';
            }
        },
        ordinalParse: /\d{1,2}-(洩|諧芯|褟)/,
        ordinal: function (number, period) {
            switch (period) {
                case 'M':
                case 'd':
                case 'DDD':
                    return number + '-洩';
                case 'D':
                    return number + '-諧芯';
                case 'w':
                case 'W':
                    return number + '-褟';
                default:
                    return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return ru;

}));
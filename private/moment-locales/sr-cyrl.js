//! moment.js locale configuration
//! locale : Serbian Cyrillic [sr-cyrl]
//! author : Milan Jana膷kovi膰<milanjanackovic@gmail.com> : https://github.com/milan-j

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var translator = {
        words: { //Different grammatical cases
            m: ['褬械寫邪薪 屑懈薪褍褌', '褬械寫薪械 屑懈薪褍褌械'],
            mm: ['屑懈薪褍褌', '屑懈薪褍褌械', '屑懈薪褍褌邪'],
            h: ['褬械寫邪薪 褋邪褌', '褬械寫薪芯諧 褋邪褌邪'],
            hh: ['褋邪褌', '褋邪褌邪', '褋邪褌懈'],
            dd: ['寫邪薪', '寫邪薪邪', '寫邪薪邪'],
            MM: ['屑械褋械褑', '屑械褋械褑邪', '屑械褋械褑懈'],
            yy: ['諧芯寫懈薪邪', '諧芯寫懈薪械', '諧芯寫懈薪邪']
        },
        correctGrammaticalCase: function (number, wordKey) {
            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
        },
        translate: function (number, withoutSuffix, key) {
            var wordKey = translator.words[key];
            if (key.length === 1) {
                return withoutSuffix ? wordKey[0] : wordKey[1];
            } else {
                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
            }
        }
    };

    var sr_cyrl = moment.defineLocale('sr-cyrl', {
        months: '褬邪薪褍邪褉_褎械斜褉褍邪褉_屑邪褉褌_邪鋅褉懈謝_屑邪褬_褬褍薪_褬褍謝_邪脅諧褍褋褌_褋械鋅褌械屑斜邪褉_芯瀉褌芯斜邪褉_薪芯脅械屑斜邪褉_寫械褑械屑斜邪褉'.split('_'),
        monthsShort: '褬邪薪._褎械斜._屑邪褉._邪鋅褉._屑邪褬_褬褍薪_褬褍謝_邪脅諧._褋械鋅._芯瀉褌._薪芯脅._寫械褑.'.split('_'),
        monthsParseExact: true,
        weekdays: '薪械寫械褭邪_鋅芯薪械寫械褭邪瀉_褍褌芯褉邪瀉_褋褉械寫邪_褔械褌脅褉褌邪瀉_鋅械褌邪瀉_褋褍斜芯褌邪'.split('_'),
        weekdaysShort: '薪械寫._鋅芯薪._褍褌芯._褋褉械._褔械褌._鋅械褌._褋褍斜.'.split('_'),
        weekdaysMin: '薪械_鋅芯_褍褌_褋褉_褔械_鋅械_褋褍'.split('_'),
        weekdaysParseExact : true,
        longDateFormat: {
            LT: 'H:mm',
            LTS : 'H:mm:ss',
            L: 'DD. MM. YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[寫邪薪邪褋 褍] LT',
            nextDay: '[褋褍褌褉邪 褍] LT',
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[褍] [薪械寫械褭褍] [褍] LT';
                    case 3:
                        return '[褍] [褋褉械寫褍] [褍] LT';
                    case 6:
                        return '[褍] [褋褍斜芯褌褍] [褍] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[褍] dddd [褍] LT';
                }
            },
            lastDay  : '[褬褍褔械 褍] LT',
            lastWeek : function () {
                var lastWeekDays = [
                    '[鋅褉芯褕謝械] [薪械寫械褭械] [褍] LT',
                    '[鋅褉芯褕謝芯諧] [鋅芯薪械寫械褭瀉邪] [褍] LT',
                    '[鋅褉芯褕謝芯諧] [褍褌芯褉瀉邪] [褍] LT',
                    '[鋅褉芯褕謝械] [褋褉械寫械] [褍] LT',
                    '[鋅褉芯褕謝芯諧] [褔械褌脅褉褌瀉邪] [褍] LT',
                    '[鋅褉芯褕謝芯諧] [鋅械褌瀉邪] [褍] LT',
                    '[鋅褉芯褕謝械] [褋褍斜芯褌械] [褍] LT'
                ];
                return lastWeekDays[this.day()];
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : '蟹邪 %s',
            past   : '鋅褉械 %s',
            s      : '薪械瀉芯謝懈瀉芯 褋械瀉褍薪寫懈',
            m      : translator.translate,
            mm     : translator.translate,
            h      : translator.translate,
            hh     : translator.translate,
            d      : '寫邪薪',
            dd     : translator.translate,
            M      : '屑械褋械褑',
            MM     : translator.translate,
            y      : '諧芯寫懈薪褍',
            yy     : translator.translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return sr_cyrl;

}));
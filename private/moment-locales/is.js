//! moment.js locale configuration
//! locale : Icelandic [is]
//! author : Hinrik 脰rn Sigur冒sson : https://github.com/hinrik

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    function plural(n) {
        if (n % 100 === 11) {
            return true;
        } else if (n % 10 === 1) {
            return false;
        }
        return true;
    }
    function translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        switch (key) {
            case 's':
                return withoutSuffix || isFuture ? 'nokkrar sek煤ndur' : 'nokkrum sek煤ndum';
            case 'm':
                return withoutSuffix ? 'm鉚n煤ta' : 'm鉚n煤tu';
            case 'mm':
                if (plural(number)) {
                    return result + (withoutSuffix || isFuture ? 'm鉚n煤tur' : 'm鉚n煤tum');
                } else if (withoutSuffix) {
                    return result + 'm鉚n煤ta';
                }
                return result + 'm鉚n煤tu';
            case 'hh':
                if (plural(number)) {
                    return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
                }
                return result + 'klukkustund';
            case 'd':
                if (withoutSuffix) {
                    return 'dagur';
                }
                return isFuture ? 'dag' : 'degi';
            case 'dd':
                if (plural(number)) {
                    if (withoutSuffix) {
                        return result + 'dagar';
                    }
                    return result + (isFuture ? 'daga' : 'd枚gum');
                } else if (withoutSuffix) {
                    return result + 'dagur';
                }
                return result + (isFuture ? 'dag' : 'degi');
            case 'M':
                if (withoutSuffix) {
                    return 'm謾nu冒ur';
                }
                return isFuture ? 'm謾nu冒' : 'm謾nu冒i';
            case 'MM':
                if (plural(number)) {
                    if (withoutSuffix) {
                        return result + 'm謾nu冒ir';
                    }
                    return result + (isFuture ? 'm謾nu冒i' : 'm謾nu冒um');
                } else if (withoutSuffix) {
                    return result + 'm謾nu冒ur';
                }
                return result + (isFuture ? 'm謾nu冒' : 'm謾nu冒i');
            case 'y':
                return withoutSuffix || isFuture ? '謾r' : '謾ri';
            case 'yy':
                if (plural(number)) {
                    return result + (withoutSuffix || isFuture ? '謾r' : '謾rum');
                }
                return result + (withoutSuffix || isFuture ? '謾r' : '謾ri');
        }
    }

    var is = moment.defineLocale('is', {
        months : 'jan煤ar_febr煤ar_mars_apr鉚l_ma鉚_j煤n鉚_j煤l鉚_謾g煤st_september_okt貿ber_n貿vember_desember'.split('_'),
        monthsShort : 'jan_feb_mar_apr_ma鉚_j煤n_j煤l_謾g煤_sep_okt_n貿v_des'.split('_'),
        weekdays : 'sunnudagur_m謾nudagur_鎂ri冒judagur_mi冒vikudagur_fimmtudagur_f枚studagur_laugardagur'.split('_'),
        weekdaysShort : 'sun_m謾n_鎂ri_mi冒_fim_f枚s_lau'.split('_'),
        weekdaysMin : 'Su_M謾_脼r_Mi_Fi_F枚_La'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY [kl.] H:mm',
            LLLL : 'dddd, D. MMMM YYYY [kl.] H:mm'
        },
        calendar : {
            sameDay : '[鉚 dag kl.] LT',
            nextDay : '[謾 morgun kl.] LT',
            nextWeek : 'dddd [kl.] LT',
            lastDay : '[鉚 g忙r kl.] LT',
            lastWeek : '[s鉚冒asta] dddd [kl.] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'eftir %s',
            past : 'fyrir %s s鉚冒an',
            s : translate,
            m : translate,
            mm : translate,
            h : 'klukkustund',
            hh : translate,
            d : translate,
            dd : translate,
            M : translate,
            MM : translate,
            y : translate,
            yy : translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return is;

}));
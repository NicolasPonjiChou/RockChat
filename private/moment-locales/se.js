//! moment.js locale configuration
//! locale : Northern Sami [se]
//! authors : B氓rd Rolstad Henriksen : https://github.com/karamell

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';



    var se = moment.defineLocale('se', {
        months : 'o膽膽ajagem謾nnu_guovvam謾nnu_njuk膷am謾nnu_cuo艐om謾nnu_miessem謾nnu_geassem謾nnu_suoidnem謾nnu_borgem謾nnu_膷ak膷am謾nnu_golggotm謾nnu_sk謾bmam謾nnu_juovlam謾nnu'.split('_'),
        monthsShort : 'o膽膽j_guov_njuk_cuo_mies_geas_suoi_borg_膷ak膷_golg_sk謾b_juov'.split('_'),
        weekdays : 'sotnabeaivi_vuoss謾rga_ma艐艐eb謾rga_gaskavahkku_duorastat_bearjadat_l謾vvardat'.split('_'),
        weekdaysShort : 'sotn_vuos_ma艐_gask_duor_bear_l謾v'.split('_'),
        weekdaysMin : 's_v_m_g_d_b_L'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'MMMM D. [b.] YYYY',
            LLL : 'MMMM D. [b.] YYYY [ti.] HH:mm',
            LLLL : 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm'
        },
        calendar : {
            sameDay: '[otne ti] LT',
            nextDay: '[ihttin ti] LT',
            nextWeek: 'dddd [ti] LT',
            lastDay: '[ikte ti] LT',
            lastWeek: '[ovddit] dddd [ti] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : '%s gea啪es',
            past : 'ma艐it %s',
            s : 'moadde sekunddat',
            m : 'okta minuhta',
            mm : '%d minuhtat',
            h : 'okta diimmu',
            hh : '%d diimmut',
            d : 'okta beaivi',
            dd : '%d beaivvit',
            M : 'okta m謾nnu',
            MM : '%d m謾nut',
            y : 'okta jahki',
            yy : '%d jagit'
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return se;

}));
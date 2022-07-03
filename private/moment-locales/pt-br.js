//! moment.js locale configuration
//! locale : Portuguese (Brazil) [pt-br]
//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var pt_br = moment.defineLocale('pt-br', {
        months : 'Janeiro_Fevereiro_Mar莽o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
        monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays : 'Domingo_Segunda-feira_Ter莽a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S謾bado'.split('_'),
        weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_S謾b'.split('_'),
        weekdaysMin : 'Dom_2陋_3陋_4陋_5陋_6陋_S謾b'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY [脿s] HH:mm',
            LLLL : 'dddd, D [de] MMMM [de] YYYY [脿s] HH:mm'
        },
        calendar : {
            sameDay: '[Hoje 脿s] LT',
            nextDay: '[Amanh茫 脿s] LT',
            nextWeek: 'dddd [脿s] LT',
            lastDay: '[Ontem 脿s] LT',
            lastWeek: function () {
                return (this.day() === 0 || this.day() === 6) ?
                    '[舌ltimo] dddd [脿s] LT' : // Saturday + Sunday
                    '[舌ltima] dddd [脿s] LT'; // Monday - Friday
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'em %s',
            past : '%s atr謾s',
            s : 'poucos segundos',
            m : 'um minuto',
            mm : '%d minutos',
            h : 'uma hora',
            hh : '%d horas',
            d : 'um dia',
            dd : '%d dias',
            M : 'um m錨s',
            MM : '%d meses',
            y : 'um ano',
            yy : '%d anos'
        },
        ordinalParse: /\d{1,2}潞/,
        ordinal : '%d潞'
    });

    return pt_br;

}));
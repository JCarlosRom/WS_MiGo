"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCentavos = getCentavos;
exports.getThisDate = getThisDate;
exports.getRangeDate = getRangeDate;
exports.getRangeDate2 = getRangeDate2;
exports.getMonthLetter = getMonthLetter;
exports.getMonthNumber = getMonthNumber;
exports.getDateHour = getDateHour;
exports.getDateHourFullDate = getDateHourFullDate;

//Función que retorna los centavos de un valor de moneda

/**
 *
 *
 * @export
 * @param {*} numberValue
 * @returns
 */
function getCentavos(numberValue) {
  if (numberValue == '' || numberValue == null) {
    numberValue = 0;
  }

  var valueString = numberValue.toString();
  var split_numberValue = valueString.split('.');
  var outValue = 0;

  if (split_numberValue.length > 1) {
    outValue = numberValue + '0';
  } else {
    outValue = numberValue + '.00';
  }

  return outValue;
} //Función que devuelve una fecha simple requiere el siguiente formato: 'YYYY-MM-DD'

/**
 *
 *
 * @export
 * @param {*} date
 * @returns
 */


function getThisDate(date) {
  var dt_split = date.split('-');
  var dia = dt_split[2];
  var mes = dt_split[1];
  var fecha = dia + '/' + mes;
  return fecha;
} //Función que devuelve un rango de fechas simples requiere el siguiente formato: 'YYYY-MM-DD-YYYY-MM-DD'

/**
 *
 *
 * @export
 * @param {*} date
 * @returns
 */


function getRangeDate(date) {
  var split_fechas = date.split('-');
  var primer_mes = split_fechas[1];
  var primer_dia = split_fechas[2];
  var segundo_mes = split_fechas[4];
  var segundo_dia = split_fechas[5];
  primer_mes = getMonthLetter(primer_mes);
  segundo_mes = getMonthLetter(segundo_mes);
  var fechas = primer_dia + " " + primer_mes + " - " + segundo_dia + " " + segundo_mes;
  return fechas;
}
/**
 *
 *
 * @export
 * @param {*} date
 * @returns
 */


function getRangeDate2(date) {
  var split_fechas = date.split('-');
  var primer_mes = split_fechas[1];
  var primer_dia = split_fechas[2];
  var segundo_mes = split_fechas[4];
  var segundo_dia = split_fechas[5];
  primer_mes = getMonthLetter(primer_mes);
  segundo_mes = getMonthLetter(segundo_mes);
  var fechas = primer_dia + " de " + primer_mes + " - " + segundo_dia + " de " + segundo_mes;
  return fechas;
}
/**
 *
 *
 * @export
 * @param {*} mes
 * @returns
 */


function getMonthLetter(mes) {
  switch (mes) {
    case '01':
      return 'ene';

    case '02':
      return 'feb';

    case '03':
      return 'mar';

    case '04':
      return 'abr';

    case '05':
      return 'may';

    case '06':
      return 'jun';

    case '07':
      return 'jul';

    case '08':
      return 'ago';

    case '09':
      return 'sep';

    case '10':
      return 'oct';

    case '11':
      return 'nov';

    case '12':
      return 'dic';
  }
}
/**
 *
 *
 * @export
 * @param {*} mes
 * @returns
 */


function getMonthNumber(mes) {
  switch (mes) {
    case 'Jan':
      return '01';

    case 'Feb':
      return '02';

    case 'Mar':
      return '03';

    case 'Apr':
      return '04';

    case 'May':
      return '05';

    case 'Jun':
      return '06';

    case 'Jul':
      return '07';

    case 'Aug':
      return '08';

    case 'Sep':
      return '09';

    case 'Oct':
      return '10';

    case 'Nov':
      return '11';

    case 'Dec':
      return '12';
  }
} //Función que obtiene la fecha y hora, depende de su estructura, la aplicada es la fecha completa sin time zone

/**
 *
 *
 * @export
 * @param {*} date
 * @returns
 */


function getDateHour(date) {
  console.log(date);
  var fech_aux = date; //const fech_split = fech_aux.split(' ');

  var fech_split = fech_aux.split('T');
  var fecha_completa = fech_split[0];
  var hora_completa = fech_split[1];
  var fecha_completa_split = fecha_completa.split("-");
  var fecha_final = fecha_completa_split[2] + "/" + fecha_completa_split[1];
  var hora_completa_split = hora_completa.split(":");
  var hora_final = hora_completa_split[0] + ":" + hora_completa_split[1];
  var return_obj = [fecha_final, hora_final];
  return return_obj;
}
/**
 *
 *
 * @export
 * @param {*} date
 * @returns
 */


function getDateHourFullDate(date) {
  var split_fecha = date.split(' ');
  var mes_final = getMonthNumber(split_fecha[1]);
  var dia_final = split_fecha[2];
  var fecha_final = dia_final + '/' + mes_final;
  var split_hora = split_fecha[4].split(':');
  var hora_final = split_hora[0] + ':' + split_hora[1];
  var return_obj = [fecha_final, hora_final];
  return return_obj;
}
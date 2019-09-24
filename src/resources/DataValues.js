//Función que retorna los centavos de un valor de moneda
/**
 *
 *
 * @export
 * @param {*} numberValue
 * @returns
 */
export function getCentavos(numberValue) {
    if(numberValue == '' || numberValue == null){
        numberValue = 0;
    }

    let valueString = numberValue.toString();
    let split_numberValue = valueString.split('.');
    let outValue = 0;
    if(split_numberValue.length > 1){
        outValue = numberValue + '0';
    }else{
        outValue = numberValue + '.00';
    }
    return outValue;
}

//Función que devuelve una fecha simple requiere el siguiente formato: 'YYYY-MM-DD'
/**
 *
 *
 * @export
 * @param {*} date
 * @returns
 */
export function getThisDate(date){
    const dt_split = date.split('-');
    const dia = dt_split[2];
    const mes = dt_split[1];
    const fecha = dia + '/' + mes;
    return fecha;
}

//Función que devuelve un rango de fechas simples requiere el siguiente formato: 'YYYY-MM-DD-YYYY-MM-DD'
/**
 *
 *
 * @export
 * @param {*} date
 * @returns
 */
export function getRangeDate(date){
    let split_fechas = date.split('-');
    let primer_mes = split_fechas[1];
    let primer_dia = split_fechas[2];
    let segundo_mes = split_fechas[4];
    let segundo_dia = split_fechas[5];

    primer_mes = getMonthLetter(primer_mes);
    segundo_mes = getMonthLetter(segundo_mes);

    const fechas = primer_dia + " " + primer_mes + " - " + segundo_dia + " " + segundo_mes;
    return fechas;
}

/**
 *
 *
 * @export
 * @param {*} date
 * @returns
 */
export function getRangeDate2(date){
    let split_fechas = date.split('-');
    let primer_mes = split_fechas[1];
    let primer_dia = split_fechas[2];
    let segundo_mes = split_fechas[4];
    let segundo_dia = split_fechas[5];

    primer_mes = getMonthLetter(primer_mes);
    segundo_mes = getMonthLetter(segundo_mes);

    const fechas = primer_dia + " de " + primer_mes + " - " + segundo_dia + " de " + segundo_mes;
    return fechas;
}

/**
 *
 *
 * @export
 * @param {*} mes
 * @returns
 */
export function getMonthLetter(mes) {
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
export function getMonthNumber(mes) {
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
}

//Función que obtiene la fecha y hora, depende de su estructura, la aplicada es la fecha completa sin time zone
/**
 *
 *
 * @export
 * @param {*} date
 * @returns
 */
export function getDateHour(date){
    console.log(date);
    const fech_aux = date;
    const fech_split = fech_aux.split(' ');
    //const fech_split = fech_aux.split('T');
    const fecha_completa = fech_split[0];
    const hora_completa = fech_split[1];
    const fecha_completa_split = fecha_completa.split("-");
    const fecha_final = fecha_completa_split[2] + "/" + fecha_completa_split[1];
    const hora_completa_split = hora_completa.split(":");
    const hora_final = hora_completa_split[0] + ":" + hora_completa_split[1];

    const return_obj = [fecha_final, hora_final]

    return return_obj;
}

/**
 *
 *
 * @export
 * @param {*} date
 * @returns
 */
export function getDateHourFullDate(date){
    const split_fecha = date.split(' ');
    const mes_final = getMonthNumber(split_fecha[1]);
    const dia_final = split_fecha[2];
    const fecha_final = dia_final + '/' + mes_final;
    const split_hora = split_fecha[4].split(':');
    const hora_final = split_hora[0] + ':' + split_hora[1];

    const return_obj = [fecha_final, hora_final];

    return return_obj;
}
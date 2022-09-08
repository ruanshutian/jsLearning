/**
 * https://www.npmjs.com
 *
 * https://registy.npmjs.org/
 *
 */



let dataFormat = (dtStr)=>{
    const y = dtStr.getFullYear();

    const  m = dtStr.getMonth();

    const  d = dtStr.getDay();

    const hh =dtStr.getHours();

    const  mm =dtStr.getMinutes();

    const ss = dtStr.getSeconds();

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;

};

let padZero = (n)=>{
    n>9?n:'0'+n;
}

module.exports = {
    dataFormat
}

function calendarDate(day, month, year){
    // the constructor
    this.day = day;
    this.month = month;
    this.year = year;
}

function calendarToString(calendarDate){
    return `${calendarDate.year}-${calendarDate.month}-${calendarDate.day}`;
}

//calendarDate.prototype.toString = function(){return (`${year}-${month}-${day}`)};

function isValidDate(d) {
    return (d instanceof Date && !isNaN(d));
  }

  function checkValidity(calendarDate){
    let d = new Date(calendarToString(calendarDate));
    console.log(d)
    console.log(isValidDate(d));
}



//console.log(birthday)
// Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

function getDayOfWeek(calendarDate){
    // Comment added
    let yy = calendarDate.year;
    let mm = calendarDate.month;
    let dd = calendarDate.day
    let cc = Math.trunc(yy / 100)

    let dayOfWeek = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7

    console.log(Math.trunc(dayOfWeek))

}

birthday = new calendarDate(1900,10,10)
checkValidity(birthday)
getDayOfWeek(birthday)
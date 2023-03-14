function calendarDate(day, month, year){
    // the constructor
    this.day = day;
    this.month = month;
    this.year = year;
}

function calendarToString(calendarDate){
    return `${calendarDate.year}-${calendarDate.month}-${calendarDate.day}`;
}

function isValidDate(d) {
    return (d instanceof Date && !isNaN(d));
  }

  function checkValidity(calendarDate){
    let d = new Date(calendarToString(calendarDate));
    console.log(d)
    console.log(isValidDate(d));
}


function getIntegerDayOfWeek(calendarDate){
    let yy = calendarDate.year;
    let mm = calendarDate.month;
    let dd = calendarDate.day;
    let cc = Math.trunc(yy / 100);
    let dayOfWeek = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;
    return Math.trunc(dayOfWeek);
}

function getDayOfWeek(calendarDate){
    let integerDay = getIntegerDayOfWeek(calendarDate)
    switch (integerDay) {
        case 0:
          return day = "Sunday";
        case 1:
          return day = "Monday";
        case 2:
            return day = "Tuesday";
        case 3:
            return day = "Wednesday";
        case 4:
            return day = "Thursday";
        case 5:
            return day = "Friday";
        case 6:
            return day = "Saturday";
}}

birthday = new calendarDate(1900,10,10)
//checkValidity(birthday)
getDayOfWeek(birthday)
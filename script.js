function calendarDate(day, month, year){
    // the constructor
    this.day = day;
    this.month = month;
    this.year = year;

    return (`${year}-${month}-${day}`)
}
function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
  }

function checkValidity(calendarDate){
    let d = new Date(calendarDate);
    console.log(d)
    return isValidDate(d);
}

birthday = calendarDate(1900,31,02)
checkValidity(birthday)

// Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

function getDayOfWeek(calendarDate){
    // Comment added

}
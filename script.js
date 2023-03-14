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
    console.log(isValidDate(d));
}

birthday = calendarDate(1900,31,02)
checkValidity(birthday)

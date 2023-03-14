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

function getName(d){
    let integerDay = getIntegerDayOfWeek(d)
    switch (integerDay) {
        case 0:
          return birthName = ["Kwasi", "Akosua"];
        case 1:
          return birthName = ["Kwadwo", "Adwoa"];
        case 2:
            return birthName = ["Kwabena", "Abenaa"];
        case 3:
            return birthName = ["Kwaku", "Akua"];
        case 4:
            return birthName = ["Yaw", "Yaa"];
        case 5:
            return birthName = ["Kofi", "Afua"];
        case 6:
            return birthName = ["Kwame", "Ama"];
}}

function assignName(d){
    nameChoice = getName(d)
    if (gender == "M") {return nameChoice[0]}
    else {return nameChoice [1]}
}

birthday = new calendarDate(1900,10,10)
let gender = "M"
console.log(assignName(birthday))

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting and reloading the page
  const birthdayInput = document.querySelector('#birthday');
  const genderInput = document.querySelector('#gender');

  const birthday = birthdayInput.value;
  const gender = genderInput.value;

  const date = new Date(birthday);
  const birthDate = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  calendarDate = new calendarDate(birthDate,month,year)

  const akanIntro = document.createElement('p');
  akanIntro.textContent = `Your Akan name is: `;
  const h = document.createElement('hr');
  const answer = document.querySelector('.answer');
  answer.append(akanIntro)
  answer.innerHTML += assignName(calendarDate, gender)

})

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

function assignName(d, gender){
    nameChoice = getName(d)
    if (gender == "male") {return nameChoice[0]}
    else {return nameChoice [1]}
}

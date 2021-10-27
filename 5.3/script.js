function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  // EXERCICIO 1

  function createDezDays(daysArr) {
    for (let index = 0; index < daysArr.length; index += 1) {

      regularDay = document.createElement('li')
      regularDay.innerText = daysArr[index]
      document.getElementById('days').appendChild(regularDay)
      regularDay.classList.add('days')

      if (daysArr[index] === 24 || daysArr[index] ===  25 ||daysArr[index] ===  31) {
        regularDay.classList.add('holiday')
      } 
      if (daysArr[index] === 4 || daysArr[index] ===  11 ||daysArr[index] ===  18 || daysArr[index] ===  25) {
        regularDay.classList.add('friday')
    } 
    
  }
}
createDezDays([29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]);


  // EXERCICIO 2

  function holidayBtn(dayClass) {
    newBtn = document.createElement('button')
    document.getElementsByClassName('buttons-container')[0].appendChild(newBtn)
    newBtn.innerText = dayClass
    newBtn.id = 'holiday-btn'
  }
  holidayBtn('Feriados');

  // EXERCICIO 3
  let holBtn = document.getElementById('holiday-btn')

  function changeColor() {
    let newColor = document.getElementsByClassName('holiday');
    for (let i = 0; i < newColor.length; i += 1) {
      newColor[i].style.backgroundColor = 'red'
    }
}
  holBtn.addEventListener('click', changeColor)


//   EXERCICIO 4

function fridayBtn(dayClass) {
  newBtn = document.createElement('button')
  document.getElementsByClassName('buttons-container')[0].appendChild(newBtn)
  newBtn.innerText = dayClass
  newBtn.id = 'friday-btn'
}
fridayBtn('Sexta');

// exercicio 5

let friBtn = document.getElementById('friday-btn')

function changeColorr() {
  let newColorr = document.getElementsByClassName('friday');
  for (let i = 0; i < newColorr.length; i += 1) {
    newColorr[i].style.backgroundColor = 'blue'
  }
}
friBtn.addEventListener('click', changeColorr)
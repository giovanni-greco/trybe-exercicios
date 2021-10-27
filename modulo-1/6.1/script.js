function createStates(stateArr) {
   for (let i = 0; i < stateArr.length; i++) {
       let currentState = i
       let newOption = document.createElement('option')
       let selector = document.getElementById('stateId')
       selector.appendChild(newOption)
       newOption.value = i 
       newOption.innerText = stateArr[i]
       
   } 
}
createStates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])
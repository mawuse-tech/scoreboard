let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let count = 0
let countG = 0
 
function addNum () {
   count = count + 1
   homeEl.textContent = count
}

function subNum () {
   count = count + 2
   homeEl.textContent = count
}

function mulNum () {
   count = count + 3
   homeEl.textContent = count
}

function newGame (){
   count = 0
   countG = 0
   guestEl.textContent = countG
   homeEl.textContent = count 
}


function funOne (){
   countG += 1
   guestEl.textContent = countG 
}

function funTwo (){
   countG += 2
   guestEl.textContent = countG 
}

function funThree (){
   countG += 3
   guestEl.textContent = countG 
}
 



const sendBtn = document.getElementById(`send`)
sendBtn.addEventListener(`click`, (e) => {
  e.preventDefault()

  const passengerName = document.getElementById(`passengerName`).value
  const tripDate = document.getElementById(`tripDate`).value
  const userKm = document.getElementById(`trip`).value
  const userAge = document.getElementById(`age`).value
  const kmPrice = 0.21;
  const tripPrice = userKm * kmPrice;
  let subTotal = document.getElementById(`subTotal`)
  console.log(`Costo del viaggio: ${tripPrice.toFixed(2)}€;`);
  let tripDiscounted = tripPrice;
  if (userAge < 18 || userAge >= 65) {
  console.log(`Hai diritto ad uno sconto;`);
  subTotal.classList.remove(`d-none`)

  if(userAge < 18) {
    console.log(`Sconto applicabile del: 20%;`)
    tripDiscounted = (tripPrice / 100) * 80;
  }

  else {
    console.log(`Sconto applicabile del: 40%`)
    tripDiscounted = (tripPrice / 100) * 60;
  }
  }
  console.log(`Dovrai pagare: ${tripDiscounted.toFixed(2)}€;`)
  
  document.getElementById(`show-passengerName`).innerText = passengerName
  document.getElementById(`show-tripDate`).innerText = tripDate
  document.getElementById(`show-userKm`).innerText = userKm
  document.getElementById(`show-userAge`).innerText = userAge
  document.getElementById(`show-tripPrice`).innerText = tripPrice.toFixed(2)
  document.getElementById(`show-tripDiscounted`).innerText = tripDiscounted.toFixed(2)
} )
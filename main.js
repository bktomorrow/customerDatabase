createCusObj(customers)
function createCusObj(custom) {
  for (let i = 0; i < custom.results.length; i++) {
    let newDiv = document.createElement('div')
    newDiv.setAttribute('id', 'div')

    let newImg = document.createElement('img')
    newImg.setAttribute('src', custom.results[i].picture.thumbnail)

    let newName = document.createElement('label')
    newName.setAttribute('id', 'Name')
    newName.innerHTML =
      '</br>' +
      custom.results[i].name.title +
      ' ' +
      custom.results[i].name.first +
      ' ' +
      custom.results[i].name.last +
      '</br>'
    let emailDiv = document.createElement('div')
    emailDiv.setAttribute('id', 'emailDiv')

    let newEmail = document.createElement('label')
    newEmail.setAttribute('id', 'Email') //<label>FHJFK</label>
    newEmail.innerHTML = custom.results[i].email

    let newContact = document.createElement('div')
    newContact.setAttribute('id', 'Contact')

    let newStreet = document.createElement('label')
    newStreet.setAttribute('id', 'Street')
    newStreet.innerHTML = custom.results[i].location.street + '</br>'

    let newCity = document.createElement('label')
    newCity.setAttribute('id', 'City')
    newCity.innerHTML =
      custom.results[i].location.city +
      ' ' +
      custom.results[i].location.state +
      ' ' +
      custom.results[i].location.postcode +
      '</br>'

    let newPhone = document.createElement('label')
    newPhone.setAttribute('id', 'Phone')
    newPhone.innerHTML = custom.results[i].cell

    document.getElementById('section').appendChild(newDiv)
    newDiv.appendChild(newImg)
    newDiv.appendChild(newName)
    newDiv.appendChild(emailDiv)
    emailDiv.appendChild(newEmail)
    newDiv.appendChild(newContact)
    newContact.appendChild(newStreet)
    newContact.appendChild(newCity)
    newContact.appendChild(newPhone)
  }
}
createCusObj(customers)

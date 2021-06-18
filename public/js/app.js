console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let location = search.value
    messageOne.textContent = 'Loading....'
    messageTwo.textContent = ''
    fetch('http://localhost:3000/weather?address=' + location).then(response => {
        response.json().then(data => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = 'Location: ' + data.location.address
                messageTwo.textContent = 'Temperature Details >>>  ' +
                    'current ' + data.forecast.current + ' C' + ' and feels like ' +
                    data.forecast.feels + ' C';
            }
        })
    })
})
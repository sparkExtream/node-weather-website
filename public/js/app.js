const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let location = search.value
    messageOne.innerHTML = '<strong>LOADING...</strong>'
    messageTwo.innerHTML = '<p></p>'
    fetch('/weather?address=' + location).then(response => {
        response.json().then(data => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.innerHTML = '<h3>Showing Weather Data of <strong>' + data.forecast.region +
                    '</strong> in Country <strong>' + data.forecast.country + '</strong></h3>' +
                    '<p>Location Time Zone <strong>' + data.forecast.time_zone + '</strong> ' +
                    'observation time <strong>' + data.forecast.observation_time + '</strong></p>'
                messageTwo.innerHTML = '<h4>----Weather Details----<h4>' +
                    '<p>Current Temp <strong>' + data.forecast.current + '</strong> &#8451; </p>' +
                    '<p>Feels Like <strong>' + data.forecast.feels + '</strong> &#8451;</p>' +
                    '<p>Weather Description: ' + data.forecast.weather_descriptions.join() + '</p>' +
                    '<h4>----Wind Details----</h4>' + '<p>Wind Speed <strong>' + data.forecast.wind_speed + '</strong></p>' +
                    '<p>Wind Direction <strong>' + data.forecast.wind_dir + '</strong></p>' +
                    '<h4>----Humidity/Cloud/Visibility Details----</h4>' +
                    '<p>Humidity: ' + data.forecast.humidity + ' Cloud Cover: ' + data.forecast.cloudcover + ' Visibility: ' + data.forecast.visibility + '</p>';
            }
        })
    })
})
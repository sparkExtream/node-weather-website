const request = require('postman-request')


const weather = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e0a23033980a68433f296d14678e1b9b&query=' +
        String(latitude) + ',' + String(longitude) + '&unit=m'
    request({
        url,
        json: true
    }, (err, {
        body
    }) => {
        if (err) callback('Unable to connect!')
        else if (body.error) callback('Not able to find location!')
        else {
            callback(undefined, {
                current: body.current.temperature,
                feels: body.current.feelslike,
                weather_descriptions: body.current.weather_descriptions,
                wind_speed : body.current.wind_speed,
                wind_dir : body.current.wind_dir,
                humidity: body.current.humidity,
                cloudcover: body.current.cloudcover,
                visibility: body.current.visibility,
                observation_time: body.current.observation_time,
                region: body.location.region,
                country: body.location.country,
                time_zone: body.location.timezone_id,
            })
        }
    })
}

module.exports = weather
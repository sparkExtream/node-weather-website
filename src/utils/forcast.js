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
                feels: body.current.feelslike
            })
        }
    })
}

module.exports = weather
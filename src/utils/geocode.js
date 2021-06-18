const request = require('postman-request')


const geocode = (location, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(location) +
        '.json?access_token=pk.eyJ1Ijoic3BhcmtleHRyZWFtIiwiYSI6ImNrcHc2Y3FmYTB0ancycHA5c3FydGxoaDAifQ.5cws7RwTo29le9nKs2X4DQ'
    request({
        url,
        json: true
    }, (err, {
        body
    }) => {
        if (err) callback('Unable to connect!', undefined)
        else if (body.features.length === 0) callback('Not able to find location!')
        else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0]
            })
        }
    })
}

module.exports = geocode
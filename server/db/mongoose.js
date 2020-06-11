const mongoose = require('mongoose')

mongoose.connect(process.env.MONGOOSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// to set env config to heroku, use following command:
// heroku login
// heroku config:set key=value
// key is your env name, exp: MONGOOSE_URL
// value is your env value, exp MONGOOSE_URL value

// to check the key value pairs you set, use following command:
// heroku config

// to unset the key value pairs you set, use following command:
// heroku config:unset key
// key is the key name which you want to unset
let redisConfig;

if(process.env.NODE_ENV === 'development') {
    redisConfig = require('./dev.config')
} else if(process.env.NODE_ENV == 'production') {
    redisConfig = require('./prod.config')
}

module.exports = redisConfig;
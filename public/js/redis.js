const redis = require('redis');
const client = redis.createClient(6379,"127.0.0.1",{});
client.setMaxListeners(0);


module.exports = client;
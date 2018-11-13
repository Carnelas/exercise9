require('dotenv').config()


if (process.env.service-v2){
module.exports = function(req, res) {
res.status(200)
send("Version beta canaria")}
} else {
    res.status(400)
    send(error)
}
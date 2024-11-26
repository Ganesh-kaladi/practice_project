const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    try {
        let token = req.header('Token')
        if (!token) {
            return res.status(404).send("not found")
        }
        var decode = jwt.verify(token, "ssss")
        req.user = decode.user

        next()
    }
    catch (err) {
        console.log('error at middlrware:', err)
        res.status(404).lson({ message: 'Jwt error' })
    }
}
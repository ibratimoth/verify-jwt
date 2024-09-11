const jwt = require("jsonwebtoken")
const dotenv = require('dotenv')
dotenv.config()

const verifyToken = (req, res, next) => {

    const token = req.headers['authorization']

    if (!token) {
        res.status(403).json({ message: 'Token is missing' })
    }
    console.log('Token', token)
    console.log('Secret key', process.env.SECRET)
    const actualToken = token.split(' ')[1];

    jwt.verify(actualToken, process.env.SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' })
        }

        // Convert Unix timestamps to human-readable dates
        const issuedAt = new Date(decoded.iat * 1000).toISOString();
        const expiresAt = new Date(decoded.exp * 1000).toISOString();

         // Log decoded token claims with readable dates
        console.log('Decoded Token:', decoded);
        console.log('Issued At (iat):', issuedAt);
        console.log('Expires At (exp):', expiresAt)

        req.user = decoded;
        next()
    })
}

module.exports = { verifyToken }
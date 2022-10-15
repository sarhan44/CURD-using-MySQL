
const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 1 minutes
	max: 10, // Limit each IP to 10 requests per `window` (here, per 1 minute)
    message: 'You exceeded your limit, you made 10 request in a minute please try one minute later.',
})

module.exports = limiter

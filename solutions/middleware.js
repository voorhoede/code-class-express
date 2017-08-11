const express = require('express')
const useragent = require('useragent') // https://www.npmjs.com/package/useragent

const router = module.exports = express.Router()

/**
 * Exercise: Use custom middleware
 * 
 * @todo:
 * create and use custom middleware which
 * - reads and parses user agent from request
 * - exposes it as `agent` in response locals
 */

const addUserAgentToResponseLocals = (req, res, next) => {
    const agent = useragent.parse(req.headers['user-agent'])
    res.locals.agent = agent.toAgent()
    next()
}

router.use(addUserAgentToResponseLocals)

router.get('/', (req, res) => res.send(`
    <h1>You're using <em>${res.locals.agent}</em></h1>
    <p><small>Disclaimer: according to your user agent.</small></p>
`))
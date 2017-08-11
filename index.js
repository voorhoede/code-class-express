const express = require('express')

const app = express()
const port = process.env.port || 9777 // 9777 is "xprs" in T9

app.set('view engine', 'pug')

app.use((req, res, next) => {
    console.log(req.url, { req, res })
    next()
})
app.use(express.static('public/'))

/**
 * Exercises
 */
app.use('/middleware', require('./exercises/middleware'))
app.use('/request', require('./exercises/request'))
app.use('/routing', require('./exercises/routing'))
app.use('/response', require('./exercises/response'))

app.get('/', (req, res) => res.send(`
    <h1>Code Class Express</h1>
    <nav>
        <h2>Exercises</h2>
        <ol>
            <li><a href="/middleware">Use custom middleware</a></li>
            <li><a href="/request/apples?value2=oranges">Read request values</a></li>
            <li><a href="/routing">Find a route</a></li>
            <li><a href="/response">Respond in kind</a></li>
        </ol>
    </nav>
`))

app.listen(port, () => console.log(`App running on http://localhost:${port}`))
const bodyParser = require('body-parser') // https://www.npmjs.com/package/body-parser
const express = require('express')

const router = module.exports = express.Router()
router.use(bodyParser.urlencoded({ extended: false }))

/**
 * Exercise: Read request values 
 * 
 * @todo:
 * - Read the following values from the request:
 * 
 *      /values/:value1       <- this is value 1
 *      ?value2=...           <- this is value 2
 *      input[name="value3"]  <- this is value 3 (tip: see applied middleware)
 * 
 * - Use `renderValuesPage` to display the values on the page.
 */

const renderValuesPage = ({ value1, value2, value3 }) => `
    <h1>Values</h1>
    <dl>
        <dt>Value 1</dt><dd>${value1}</dd>
        <dt>Value 2</dt><dd>${value2}</dd>
        <dt>Value 3</dt><dd>${value3}</dd>
    </dl>
    <form method="post" action="/values/${value1}?value2=${value2}">
        <label>New value 3 <input name="value3" value="bananas"></label>
        <button>Update values</button>
    </form>
`

router.all('/:value1', (req, res) => {
    console.log(req.url, { req })
    res.send(renderValuesPage({
        value1: undefined,
        value2: undefined,
        value3: undefined,
    }))
})
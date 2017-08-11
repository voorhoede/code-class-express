const express = require('express')
const fs = require('fs')

const router = module.exports = express.Router()
const dataDir = `${__dirname}/../data/`

/**
 * Exercise: Respond in kind
 * 
 * @todo:
 * Implement a response method for each format:
 * - if `text/plain` respond with `data/item.md`
 * - if `application/json` respond with `data/item.json` as json
 * - if `text/html` respond with a rendered `data/item.pug` (`pug` is set as render engine in `/index.js`)
 * - if `application/octet-stream` respond with `data/item.md` as stream (chunked)
 * - if no matching format handler, respond with `406 Not Acceptable`
 * Tip: see https://expressjs.com/en/guide/routing.html#response-methods
 */

const sendItemAsMarkdown = (req, res, next) => {}

const sendItemAsJson = (req, res, next) => {}

const renderItemAsHtml = (req, res, next) => {}

const streamItemMarkdown = (req, res, next) => {}

const handlers = {
    'text/plain': sendItemAsMarkdown,
    'application/json': sendItemAsJson,
    'text/html': renderItemAsHtml,
    'application/octet-stream': streamItemMarkdown,
}

router.get('/', (req, res) => {
    const renderOption = value => `<option value="${value}">${value}</option>`
    res.send(`
        <form method="get" action="${req.baseUrl}/item">
            <h1>Get item in specific format</h1>
            <label for="format">Format</label>
            <select id="format" name="format">
                <option value="">(pick one)</option>
                ${ Object.keys(handlers).map(renderOption).join('') }
            </select>
            <button>Get item</button>
        </form>
    `)
})

router.get('/item', (req, res, next) => {
    const format = req.query.format;
    if (handlers[format]) {
        handlers[format](req, res, next)
    } else {
        // ...
    }
})
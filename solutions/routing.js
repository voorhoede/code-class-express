const bodyParser = require('body-parser')
const express = require('express')
const Item = require('../lib/item.model')

const router = module.exports = express.Router()
router.use(bodyParser.urlencoded({ extended: false }))

router.post('*', (req, res, next) => {
    // HTML <form> only supports `get` and `post` as methods
    // So if form has a hidden `_method` (e.g. `put` or `delete`) we use that instead
    if (req.body._method) {
        req.originalMethod = req.method
        req.method = req.body._method
    }
    next()
})
router.get('/', (req, res) => res.redirect(`${req.baseUrl}/item`))

/**
 * Exercise: Route your request
 * 
 * @todo:
 * The exercise app has a list of items which can be manipulated through form requests.
 * Add routes, meaning pick the right verb and path, to handle the form requests
 * using the given handlers `addItem`, `updateItem` and `removeItem`.
 * The first `.get(/item/)` is already given. When you're done you should be able to 
 * list all items, add a new item, update and remove existing items
 */

const addItem = (req, res) => {
    Item.add({ title: req.body.title })
    res.redirect(req.baseUrl)
}

const updateItem = (req, res) => {
    Item.update(parseInt(req.params.id), { title: req.body.title })
    res.redirect(req.baseUrl)
}

const removeItem = (req, res) => {
    Item.remove(parseInt(req.params.id))
    res.redirect(req.baseUrl)
}

const listItems = (req, res) => {
    const renderItem = (item) => `
        <li>
            <form method="post" action="${req.baseUrl}/item/${item.id}">
                <input name="_method" value="put" type="hidden">
                <input name="title" value="${item.title}" aria-label="Item title">
                <button>Update</button>
            </form>
            <form method="post" action="${req.baseUrl}/item/${item.id}">
                <input name="_method" value="delete" type="hidden">
                <button>Remove</button>
            </form>
        </li>
    `
    res.send(`
        <style type="text/css">form { display: inline; }</style>
        <h1>Items</h1>
        <ul>
            ${ Item.all().map(renderItem).join('') }
            <li>
                <form method="post" action="${req.baseUrl}/item/">
                    <input name="title" aria-label="Item title">
                    <button>Add new item</button>
                </form>
            </li>
        </ul>
    `)
}

router.get('/item/', listItems)
router.post('/item/', addItem)
router.put('/item/:id', updateItem)
router.delete('/item/:id', removeItem)
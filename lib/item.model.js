let items = [
    { id: 1, title: 'Use custom middleware' },
    { id: 2, title: 'Pick a method' },
    { id: 3, title: 'Read request values' },
    { id: 4, title: 'Respond in kind' },
]
let newId = 5

const all = () => items

const findById = (id) => items.find(item => item.id === id)

const add = (item) => { 
    items.push(Object.assign({}, item, { id: newId++ }))
    return item
}

const update = (id, changes) => {
    const index = items.findIndex(item => item.id === id)
    items[index] = Object.assign(items[index], changes)
}

const remove = (id) => {
    const index = items.findIndex(item => item.id === id)
    items.splice(index, 1)
}

module.exports = { all, findById, add, update, remove }

// It is an object
const book = {
    title : 'Summer Love',
    author : 'Subin Bhattarai'
}

// to convert it to JSON file
const bookJSON  = JSON.stringify(book)
console.log(bookJSON)

// again for reverse

const parsedData = JSON.parse(bookJSON)
console.log(parsedData)
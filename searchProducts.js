const searchInput = document.getElementById('search-input')
const productsContainer = document.getElementById('products-container')
const resultsParagraph = document.getElementById('results-paragraph')
const searchForm = document.getElementById('search-form')
const resultsMessage = document.querySelector('.searchMessage')

searchForm.addEventListener('submit', e => {
    e.preventDefault()
})

const products = Array.from(productsContainer.getElementsByTagName('a'))

searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase()

    let results = false

    products.forEach(function (product) {
        const productName = product.querySelector('h3').textContent.toLowerCase()

        if (productName.includes(searchTerm)) {
            product.style.display = 'flex'
            results = true
        } else {
            product.style.display = 'none'
        }

        resultsMessage.style.display = results ? 'none' : 'block'
    });
});
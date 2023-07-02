const navbar = document.querySelector('.header')

window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        navbar.classList.add('header_active')
    } else {
        navbar.classList.remove('header_active')
    }
})

const searchInput = document.querySelector(".search-inp")
const searchButton = document.getElementById("search-btn")

searchButton.addEventListener("click", () => {
    searchInput.classList.toggle("search-inp_active")
})

// Product Page

// purchase window (open/close)
const buyBtn = document.getElementById('buy-btn')
const blackPanel = document.querySelector('.purchase-window-container')
const purchaseWindow = document.querySelector('.p-window')
const closeWindowBtn = document.getElementById('close-window-btn')

// OPEN
buyBtn.addEventListener('click', () => {
    blackPanel.classList.add('purchase-window-container_active')
    purchaseWindow.classList.add('p-window_active')
})

// CLOSE
closeWindowBtn.addEventListener('click', () => {
    blackPanel.classList.remove('purchase-window-container_active')
    purchaseWindow.classList.remove('p-window_active')
})

// Functionality

const radioInput1 = document.getElementById('pickup')
const radioInput2 = document.getElementById('delivery')
let quantityInput = document.getElementById('quantity')
const orderBtn = document.getElementById('order-btn')
const orderBtnClass = document.querySelector('.order-btn')
let productName = document.getElementById('product-name')

let productPrice = document.getElementById('product-price')
let price = 99.99

let quantity = parseInt(quantityInput.value)
productPrice.textContent = price * quantity + '$'
function refresh() {
    let quantityInput = document.getElementById('quantity')
    let quantity = parseInt(quantityInput.value)
    let total = price * quantity
    let roundedTotal = total.toFixed(2)
    let productPrice = document.getElementById('product-price')
    productPrice.textContent =  roundedTotal + '$'
}

orderBtn.addEventListener('click', () => {

    let errMessage = document.getElementById('message')
    
    if(radioInput1.checked === false) {
        errMessage.innerHTML = `Debes seleccionar un<b id="message">Metodo de Retiro</b>`
    } else if(radioInput1.checked === false) {
        errMessage.innerHTML = `Debes seleccionar un<b id="message">Metodo de Retiro</b>`
    }

    if(radioInput1.checked) {
        window.location.href = `https://api.whatsapp.com/send?phone=+584244029993&text=Hola%20quiero%20comprar%20${productName.textContent}.%20Cantidad:%20${quantityInput.value},%20Precio:%20${productPrice.textContent},%20Retiro:%20${radioInput1.value}`
    } else if(radioInput2.checked) {
        window.location.href = `https://api.whatsapp.com/send?phone=+584244029993&text=Hola%20quiero%20comprar%20${productName.textContent}.%20Cantidad:%20${quantityInput.value},%20Precio:%20${productPrice.textContent},%20Retiro:%20${radioInput2.value}`
    }
})
const form = document.getElementById('contact-form')
form.addEventListener('submit', e => {

    e.preventDefault()

    sendEmail()
})


function sendEmail() {
    let name = document.getElementById("name-input").value
    let email = document.getElementById("email-input").value
    let message = document.getElementById("message-input").value
  
    let correo =    "mailto:ajessdev@gmail.com" +
                    "?subject=Contacto desde el formulario" +
                    "&body=Nombre: " + encodeURIComponent(name) +
                    "%0AEmail: " + encodeURIComponent(email) +
                    "%0AMensaje: " + encodeURIComponent(message)
  
    window.location.href = correo
}

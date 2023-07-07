const form = document.getElementById('contact-form')
form.addEventListener('submit', e => {

    e.preventDefault()

    sendEmail()
})


function sendEmail() {
    var name = document.getElementById("name-input").value;
    var email = document.getElementById("email-input").value;
    var message = document.getElementById("message-input").value;
  
    var correo =    "mailto:ajessdev@gmail.com" +
                    "?subject=Contacto desde el formulario" +
                    "&body=Nombre: " + encodeURIComponent(name) +
                    "%0AEmail: " + encodeURIComponent(email) +
                    "%0AMensaje: " + encodeURIComponent(message);
  
    window.location.href = correo;
}
// Esto es una función anónima que se ejecuta sola, no precisa que la llames.
(function () {
    let form = document.getElementById("form")
    form.addEventListener('submit', function (event) {
        // Validar el checkbox de términos y condiciones
        let terminosCheckbox = document.getElementById("terminos");
        if (!form.checkValidity() || !terminosCheckbox.checked) {
        event.preventDefault()
        event.stopPropagation()
        }
        // Si todo sale bien, le agrega al form la clase was-validated y se envía todo correctamente
        form.classList.add('was-validated')
    }, false)
})()


// function revisarLargoContraseña(){
    
// }

// function revisarContraseñasIguales(){
    
// }

// function revisarContraseñas(){
// }


// Esto es una función anónima que se ejecuta sola, no precisa que la llames.
(function () {
    'use strict'
// Guarda en esta variable auquella etiqueta que contenga la clase .needs-validation.
    let forms = document.querySelectorAll('.needs-validation')

// En la línea 10 convierte esta variable en un array para poder iterarlo, luego la recorre y le agrega un addEventListener
// todo esto para poder validar, si el form no está validado, parará el evento para que no se envíe la información
    Array.prototype.slice.call(forms)
    .forEach(function (form) {
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
    })
}
)()


// function revisarLargoContraseña(){
    
// }

// function revisarContraseñasIguales(){
    
// }

// function revisarContraseñas(){
// }


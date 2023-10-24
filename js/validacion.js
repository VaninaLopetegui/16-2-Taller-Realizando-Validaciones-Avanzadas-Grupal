let form = document.getElementById("form");

let terminosCheckbox = document.getElementById("terminos");
let termsBtn = document.getElementById("termsBtn");
let termsLabel = document.getElementById("termsLabel");
let p1 = document.getElementById("password1");
let p2 = document.getElementById("password2");

function checkPasswords(p1, p2){
    return p1==p2;
}

function isValid(input){
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    input.style.color="green";
}

function isInvalid(input){
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    input.style.color="red";
}

function validate(){
    // Validar el checkbox de términos y condiciones

    if (!form.checkValidity() || !terminosCheckbox.checked || !checkPasswords(p1.value,p2.value)){
        event.preventDefault();
        event.stopPropagation();
    }

    if(!checkPasswords(p1.value,p2.value) || !p1.value){
        isInvalid(p2);
    } else {
        isValid(p2);
    }

    if(!terminosCheckbox.checked){
        isInvalid(termsBtn);
        termsLabel.style.color="red";
    } else {
        isValid(termsBtn);
        termsLabel.style.color="green";
    }

    // Si todo sale bien, le agrega al form la clase was-validated y se envía todo correctamente
    form.classList.add('was-validated');
}

form.addEventListener('submit', function (event){
    validate();

    p1.addEventListener("input", function(){
        validate();
    });

    p2.addEventListener("input", function(){
        validate();
    });

    terminosCheckbox.addEventListener("input", function(){
        validate();
    });
});


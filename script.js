// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top =window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            })
        }
    });


    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);    

    //remover el menu al dar click

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

//Simulacion de Formulario

document.addEventListener('DOMContentLoaded', function () {

    //Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputNombre = document.querySelector('#nombre');
    const inputCelular = document.querySelector('#celular');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    //Asignar eventos

    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputNombre.addEventListener('blur', validar);
    inputCelular.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    //Validacion de campo
    function validar (e) {
        if(e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            return;
        }

        if(e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es valido', e.target.parentElement);
            return;
        }

        limpiarAlerta(e.target.parentElement);
    }   
    
    function mostrarAlerta(mensaje, referencia) {
            
        limpiarAlerta(referencia);

        //Generar alerta con HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('error'); //agregar la clase error

        //inyectar el error al formulario
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia) {
        //comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.error');
        if(alerta) {
            alerta.remove();
        }
    }
        
    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const resultado = regex.test(email);
        return resultado;
    }

});

//Descargar CV

function descargarPDF() {
    // Ruta del archivo PDF
    var archivoPDF = "CVAbelSalazarGalindo.pdf";
  
    // Crea un elemento de enlace temporal
    var enlaceTemp = document.createElement("a");
    enlaceTemp.href = archivoPDF;
  
    // Establece el nombre del archivo
    enlaceTemp.download = "Curriculum de Abel Salazar.pdf";
  
    // Simula un clic en el enlace para iniciar la descarga
    enlaceTemp.click();
  }
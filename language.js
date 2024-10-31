const translations = {
    es: {
        quienSoy: "Quien soy",
        formacionAcademica: "Formación Académica",
        experienciaLaboral: "Experiencia Laboral",
        intereses: "Intereses",
        contacto: "Contacto",
        enviar: "Enviar",
        nombre: "Nombre",
        correo: "Correo electrónico",
        telefono: "Teléfono",
        archivo: "Subir archivo",
        terminos: "Acepta términos y condiciones",
        bienvenidos: "Bienvenidos a mi",
        puesto: "Puesto",
        empresa: "Empresa",
        fecha: "Fecha",
    },
    en: {
        quienSoy: "Who I am",
        formacionAcademica: "Academic Background",
        experienciaLaboral: "Work Experience",
        intereses: "Interests",
        contacto: "Contact",
        enviar: "Send",
        nombre: "Name",
        correo: "Email",
        telefono: "Phone",
        archivo: "Upload file",
        terminos: "Accept terms and conditions",
        bienvenidos: "Welcome to my",
        puesto: "Position",
        empresa: "Company",
        fecha: "Date",
    }
};

let currentLanguage = 'es'; // Idioma inicial

function updateLanguage(language) {
    // Secciones del menú
    document.querySelector('.barra-nav a[href="#quien-soy"]').textContent = translations[language].quienSoy;
    document.querySelector('.barra-nav a[href="#formacion-academica"]').textContent = translations[language].formacionAcademica;
    document.querySelector('.barra-nav a[href="#experiencia-laboral"]').textContent = translations[language].experienciaLaboral;
    document.querySelector('.barra-nav a[href="#intereses"]').textContent = translations[language].intereses;
    document.querySelector('.barra-nav a[href="#contacto"]').textContent = translations[language].contacto;

    // Títulos de las secciones
    document.getElementById('quien-soy').textContent = translations[language].quienSoy;
    document.getElementById('formacion-academica').textContent = translations[language].formacionAcademica;
    document.getElementById('experiencia-laboral').textContent = translations[language].experienciaLaboral;
    document.getElementById('intereses').textContent = translations[language].intereses;
    document.getElementById('contacto').textContent = translations[language].contacto;

    // Texto de bienvenida
    document.querySelector('.titulo').firstChild.textContent = translations[language].bienvenidos + " ";

    // Placeholder de los inputs
    document.getElementById('nombre').placeholder = translations[language].nombre;
    document.getElementById('email').placeholder = translations[language].correo;
    document.getElementById('telefono').placeholder = translations[language].telefono;

    // Texto del botón y checkbox
    document.getElementById('enviar').value = translations[language].enviar;
    document.querySelector('label[for="archivo"]').textContent = translations[language].archivo;
    document.querySelector('label[for="terminos"]').innerHTML = `<input type="checkbox" id="terminos" name="terminos" required> ${translations[language].terminos}`;

    // Encabezados de la tabla de experiencia laboral
    document.querySelectorAll('.tabla th')[0].textContent = translations[language].puesto;
    document.querySelectorAll('.tabla th')[1].textContent = translations[language].empresa;
    document.querySelectorAll('.tabla th')[2].textContent = translations[language].fecha;
}

// Evento para alternar el idioma
document.getElementById('languageToggle').addEventListener('click', function() {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    updateLanguage(currentLanguage);
    this.textContent = currentLanguage === 'es' ? 'English' : 'Español';
});

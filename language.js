const translations = {
    es: {
        quienSoy: "Quien soy",
        descripcion: "¡Hola! Soy Daniela Guilino, tester de aplicaciones y apasionada por el análisis de datos y el desarrollo de software. Me encanta aprender y enfrentar nuevos desafíos en el mundo de la tecnología.",
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
        interesesTexto: "Disfruto mucho del cine del género de terror, la música, los gatos, el arte digital, los videojuegos y sobre todo la informática."
    },
    en: {
        quienSoy: "Who I am",
        descripcion: "Hello! I am Daniela Guilino, an application tester and passionate about data analysis and software development. I love learning and facing new challenges in the world of technology.",
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
        interesesTexto: "I greatly enjoy horror cinema, music, cats, digital art, video games, and, above all, technology."
    }
};

let currentLanguage = 'es';

function updateLanguage(language) {
    // Navegación
    document.querySelector('.barra-nav a[href="#quien-soy"]').textContent = translations[language].quienSoy;
    document.querySelector('.barra-nav a[href="#formacion-academica"]').textContent = translations[language].formacionAcademica;
    document.querySelector('.barra-nav a[href="#experiencia-laboral"]').textContent = translations[language].experienciaLaboral;
    document.querySelector('.barra-nav a[href="#intereses"]').textContent = translations[language].intereses;
    document.querySelector('.barra-nav a[href="#contacto"]').textContent = translations[language].contacto;

    // Sección de "Quien soy"
    document.getElementById('quien-soy').textContent = translations[language].quienSoy;
    document.querySelector('.presentacion p').textContent = translations[language].descripcion;

    // Sección de "Formación Académica"
    document.getElementById('formacion-academica').textContent = translations[language].formacionAcademica;

    // Sección de "Experiencia Laboral"
    document.getElementById('experiencia-laboral').textContent = translations[language].experienciaLaboral;
    document.querySelectorAll('.tabla th')[0].textContent = translations[language].puesto;
    document.querySelectorAll('.tabla th')[1].textContent = translations[language].empresa;
    document.querySelectorAll('.tabla th')[2].textContent = translations[language].fecha;

    // Sección de "Intereses"
    document.getElementById('intereses').textContent = translations[language].intereses;
    document.querySelector('.intereses p').textContent = translations[language].interesesTexto;

    // Sección de "Contacto"
    document.getElementById('contacto').textContent = translations[language].contacto;
    document.getElementById('nombre').placeholder = translations[language].nombre;
    document.getElementById('email').placeholder = translations[language].correo;
    document.getElementById('telefono').placeholder = translations[language].telefono;
    document.querySelector('label[for="archivo"]').textContent = translations[language].archivo;
    document.querySelector('label[for="terminos"]').innerHTML = `<input type="checkbox" id="terminos" name="terminos" required> ${translations[language].terminos}`;
    document.getElementById('enviar').value = translations[language].enviar;

    // Título de bienvenida
    document.querySelector('.titulo').firstChild.textContent = translations[language].bienvenidos + " ";
}

// Evento para alternar el idioma
document.getElementById('languageToggle').addEventListener('click', function() {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    updateLanguage(currentLanguage);
    this.textContent = currentLanguage === 'es' ? 'English' : 'Español';
});

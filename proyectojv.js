function showSection(sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('main > section').forEach((section) => {
        section.style.display = 'none';
    });

    // Mostrar la sección seleccionada
    document.getElementById(sectionId).style.display = 'block';
}

// Inicializar mostrando la sección de imágenes
showSection('imagenes');



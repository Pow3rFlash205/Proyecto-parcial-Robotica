const toggleButton = document.getElementById('toggleButton');
const navMenu = document.querySelector('nav');

toggleButton.addEventListener('click', () => {
  nav.classList.toggle('show');
});
function toggleMenu() {
    var navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('show');
  }

  function toggleMenu() {
    var navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('show');
  }
  
  function showSection(sectionId) {
    var sections = document.getElementsByTagName('section');
    for (var i = 0; i < sections.length; i++) {
      sections[i].style.display = 'none';
    }
    document.getElementById(sectionId).style.display = 'block';
  
    // Ocultar el menú después de mostrar la sección
    toggleMenu();
  }
  
  // Función para agregar animaciones a un elemento
function addAnimation(element, animationClass) {
  element.classList.add(animationClass);
}

// Función para quitar animaciones de un elemento
function removeAnimation(element, animationClass) {
  element.classList.remove(animationClass);
}

function animateElement() {
  var button = document.getElementById("myButton");
  var element = document.getElementById("myElement");

  // Agregar clase de animación
  addAnimation(element, "slide");

  // Quitar clase de animación después de 0.3 segundos
  setTimeout(function() {
    removeAnimation(element, "slide");
  }, 300);
}

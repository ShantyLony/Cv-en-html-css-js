 // Fonction pour vérifier si l'élément est visible dans la fenêtre
 function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


// Fonction pour ajouter l'effet fadeInUp lorsque l'élément devient visible
function fadeInUpOnScroll() {
  var elements = document.querySelectorAll('.elementToFadeIn');
  Array.prototype.forEach.call(elements, function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('fadeInUp');
    }
  });
}
// Événement de défilement pour déclencher l'effet fadeInUp
window.addEventListener('scroll', fadeInUpOnScroll);
window.addEventListener('load', fadeInUpOnScroll);


<script> window.addEventListener('scroll', function() {
        var floatingObject = document.querySelector('.floating-object');
        var scrollPosition = window.scrollY;
        floatingObject.style.transform = 'translate(-50%, calc(-50% + ' + scrollPosition + 'px))';
      });</script>

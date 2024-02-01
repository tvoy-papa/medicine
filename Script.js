document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.querySelector('.checkbox');
    const winElements = document.querySelectorAll('.true');
  
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            winElements.forEach(function(element) {
                element.classList.add('yellow-background');
            });
        } else {
            winElements.forEach(function(element) {
                element.classList.remove('yellow-background');
            });
        }
    });
  });
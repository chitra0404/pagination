
document.addEventListener('DOMContentLoaded', function() {
    var prevButton = document.querySelector('.btn1');
    var nextButton = document.querySelector('.btn2');
    var links = document.querySelectorAll('.link');
    var currentPage = 1;
  
    // Function to update the active link
    function updateActiveLink() {
      links.forEach(function(link) {
        link.classList.remove('active');
      });
  
      links[currentPage - 1].classList.add('active');
    }
  
    // Event listener for previous button
    prevButton.addEventListener('click', function() {
      if (currentPage > 1) {
        currentPage--;
        updateActiveLink();
      }
    });
  
    // Event listener for next button
    nextButton.addEventListener('click', function() {
      if (currentPage < links.length) {
        currentPage++;
        updateActiveLink();
      }
    });
  
    // Event listeners for page links
    links.forEach(function(link) {
      link.addEventListener('click', function() {
        currentPage = parseInt(link.getAttribute('value'));
        updateActiveLink();
      });
    });
  });

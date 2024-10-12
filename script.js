const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('nav-links');

function openNav() {
    nav.classList.add('active');
  }
  
  // Function to close the navigation menu
  function closeNav() {
    nav.classList.remove('active');
  }
  
  // Add event listeners
  if (bar) {
    bar.addEventListener('click', openNav);
  }
  
  if (close) {
    close.addEventListener('click', closeNav);
  }

  // single product page js 

  var MainImg = document.getElementById("mainimg");
  var smallimg = document.getElementsByClassName("small-img");
  
  smallimg[0].onclick = function() {
    MainImg.src = smallimg[0].src;
  }

  smallimg[1].onclick = function() {
    MainImg.src = smallimg[1].src;
  }

  smallimg[2].onclick = function() {
    MainImg.src = smallimg[2].src;
  }

  smallimg[3].onclick = function() {
    MainImg.src = smallimg[3].src;
  }
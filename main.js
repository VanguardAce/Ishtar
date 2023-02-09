const menu_btn = document.querySelector('.nav-bar');
const menu = document.querySelector('.mobile-nav')
if(menu_btn){
  menu_btn.addEventListener('click', function() {
      menu_btn.classList.toggle('is-active');
      menu.classList.toggle('is-active');
  });
}
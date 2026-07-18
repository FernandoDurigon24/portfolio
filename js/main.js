const buttonMenu = document.querySelectorAll('.showMenu');
const menu = document.getElementById('boxMenu');
buttonMenu.forEach((btn) =>{
  menu.style.marginLeft = "-100%";
  btn.addEventListener('click' , function(){
    if (boxMenu.style.marginLeft == '-100%') {
      boxMenu.style.marginLeft = '0%';
    }else{
      boxMenu.style.marginLeft = '-100%';
    }
  })
})

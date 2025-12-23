const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  
);
sections.forEach(section => observer.observe(section));

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

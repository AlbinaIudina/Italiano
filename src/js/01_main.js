"use strict" 

const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let MenuArrows = document.querySelectorAll('.menu_arrow'); {
    for (
        var menuArrow = 0;
        menuArrow < document.getElementsByClassName("menu_arrow").length;
        menuArrow++
      ) {
        document.getElementsByClassName("menu_arrow")
          [menuArrow].addEventListener("click", function() {
            this.parentNode.classList.toggle("_active");
          });
      } 
    
    }

    

} else {
    document.body.classList.add('_pc');

}

//let MenuArrows = document.querySelectorAll('.menu_arrow'); 
    //if (MenuArrows.lenght > 0) 

//Скролл 
/*const menuLinks = document.querySelectorAll('.menu_link[data-goto]');
if (menuLinks.lenght > 0) {
    menuLinks.forEach(menuLinks => {
         menuLinks.addEventListener("click", onMenuLinkClick);
 });


  function onMenuLinkClick (e) {
      const menuLink = e.target;
      if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
          const gotoBlock = document.querySelector(menuLink.dataset.goto);
          const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelectorAll('header').offsetHeight;

          window.scrollTo({
              top:gotoBlockValue,
              behavrior:"smooth"
          });
          e.preventDefault(); 
      }

  }      
    
}
*/

//скролл 
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)

    if (menuIcon.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        menuIcon.classList.remove('_active');
        menuBody.classList.remove('_active');
    }
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

//burger 

const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (menuIcon) {
   
    menuIcon.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock')
        menuIcon.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}






 

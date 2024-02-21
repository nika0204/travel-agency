 new Splide( '.splide', {
    perPage: 2,
    rewind: true,
    arrows: false,
    breakpoints: {
      750: {
        perPage: 1,
      }}
  }).mount();




function vkl() {
    let btn = document.querySelector('.header_list');
    btn.classList.toggle('active')
  
  }
  
  let btns = document.querySelectorAll('.offer__btn');
  let cards = document.querySelectorAll('.offer__card-item');
  
  for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (e) => {
      e.preventDefault();
      let btn = e.target;
      btns.forEach((el) => {
        el.classList.remove('offer__btn-active');
      })
      btn.classList.add('offer__btn-active');
      const filter = btn.dataset.filter;
      cards.forEach((card) => {
        if (filter == "All") {
          card.style.display = "flex";
        } else {
          if (card.classList.contains(filter)) {
            card.style.display = "flex";
          } else {
            card.style.display = "none";
          }
        }
      })
    })
  }
  


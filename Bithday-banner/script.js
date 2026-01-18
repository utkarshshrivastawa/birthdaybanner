const slider = document.querySelector(".slider");
let scroll = 0;

setInterval(() => {
  if(slider){
    slider.scrollTo({
      left: scroll,
      behavior: "smooth"
    });
    scroll += 300;
    if (scroll >= slider.scrollWidth) scroll = 0;
  }
}, 3000);

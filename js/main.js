let links = document.querySelectorAll(".link");

links.forEach((e) => {
  e.addEventListener("click", () => {
    links.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
  });
});

let drop = document.querySelectorAll(".drop");

drop.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("active");
  });
});

let nav = document.querySelector("nav");
let menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  nav.classList.toggle("activeMenu");
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    nav.classList.add("color");
  } else {
    nav.classList.remove("color");
  }
});

let goTop = document.querySelector(".goTop");
let footer = document.querySelector("footer");

goTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 400) {
    goTop.style.display = "block";
  } else {
    goTop.style.display = "none";
  }
  if (window.scrollY >= footer.offsetTop - 600) {
    if (homeMedia && goTop) {
      goTop.style.display = "none";
      homeMedia.style.display = "none";
    }
  } else {
    if (homeMedia && goTop) {
      goTop.style.display = "block";
      homeMedia.style.display = "flex";
    }
  }
});

let homeMedia = document.getElementById("homeMedia");
if (homeMedia) {
  homeMedia.addEventListener("click", () => {
    homeMedia.classList.toggle("active");
  });

  if (window.innerWidth <= 421) {
    homeMedia.addEventListener("mouseleave", () => {
      homeMedia.classList.remove("active");
    });
  }
}

let playLayer = document.querySelector('.playLayer');
if(playLayer){
  playLayer.addEventListener('click',()=>{
    playLayer.style.display='none';
  })
}
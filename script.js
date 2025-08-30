let slideAtual = 0;
const slidesContainer = document.querySelector(".slides");
let slides = document.querySelectorAll(".slide");

let totalSlides = slides.length;

function adicionaSlide(i) {
  const primeiroClone = slides[i - 1].cloneNode(true);
  slidesContainer.appendChild(primeiroClone);

  slides = document.querySelectorAll(".slide");
  totalSlides = slides.length;
}   

let intervalo;

function mostrarSlide(index) {
    const larguraSlide = slides[index].clientWidth;
    slidesContainer.style.transition = "transform 0.5s ease";
    slidesContainer.style.transform = `translateX(-${index * larguraSlide}px)`;
}

function mudarSlide(step) {
    slideAtual += step;
    mostrarSlide(slideAtual);
    adicionaSlide(slideAtual)
    reiniciarIntervalo();
    
}

function reiniciarIntervalo(){
    clearInterval(intervalo);
    iniciarIntervalo();
}

function iniciarIntervalo(){
    intervalo = setInterval(() => mudarSlide(1), 3000);
}

iniciarIntervalo();

let scrollIndex = 0;
const logosContainer = document.querySelector(".logosConvenios");
let logos = document.querySelectorAll(".logo");

function scrollConvenios(direcao) {
    logos = document.querySelectorAll(".logo");

    const maxIndex = logos.length - 5;
    if (direcao > 0 && scrollIndex >= maxIndex) return;
    if (direcao < 0 && scrollIndex <= 0) return;

    const logoAtual = logos[scrollIndex];
    const larguraLogo = logoAtual.offsetWidth;
    const gap = 48;

    scrollIndex += direcao;

    let deslocamento = 0;

    for (let i = 0; i < scrollIndex; i++) {
        deslocamento += logos[i].offsetWidth + gap;
    }

    logosContainer.style.transform = `translateX(-${deslocamento}px)`;
}

const links = document.querySelectorAll(".nav-link");
const caminho = window.location.pathname;

links.forEach(link => {
  if (link.getAttribute("href") === caminho || caminho.endsWith("/" + link.getAttribute("href"))) {
    link.classList.add("ativo");
  }
});

const teleconsulta = document.getElementById("teleconsulta");
const local = document.getElementById("local");

teleconsulta.addEventListener('click', () => {
  teleconsulta.classList.add("hover");
  local.classList.remove("hover");
})

local.addEventListener('click', () => {
  local.classList.add("hover");
  teleconsulta.classList.remove("hover");
})

  document.querySelectorAll('a.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);

      if (target) {
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        const offset = window.innerHeight / 2 - target.offsetHeight / 2;

        window.scrollTo({
          top: targetPosition - offset,
          behavior: 'smooth'
        });
      }
    });
  });
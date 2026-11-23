// Efeito de digitação
const frases = ['estudante de ADS', 'desenvolvedor em formação', 'apaixonado por tecnologia'];
const alvo = document.getElementById('digitando');
const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let f = 0, c = 0, apagando = false;

function digitar() {
    const frase = frases[f];
    alvo.textContent = frase.slice(0, c);

    if (!apagando && c === frase.length) {
        apagando = true;
        return setTimeout(digitar, 1500);
    }
    if (apagando && c === 0) {
        apagando = false;
        f = (f + 1) % frases.length;
    }
    c += apagando ? -1 : 1;
    setTimeout(digitar, apagando ? 40 : 90);
}
if (reduzir) { alvo.textContent = frases[0]; } else { digitar(); }

// Menu mobile
const botao = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');

botao.addEventListener('click', () => {
    const aberto = menu.classList.toggle('aberto');
    botao.setAttribute('aria-expanded', aberto);
});
menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('aberto');
        botao.setAttribute('aria-expanded', false);
    });
});

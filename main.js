// --------------------------Intro----------------------------------
window.addEventListener("load", function() {
    const tempoDeDelay = 2000; // 2 segundos

    setTimeout(() => {
        const carregamento = document.getElementById("carregando");
        carregamento.classList.add("cresce"); 
        
        setTimeout(() => {
            carregamento.style.display = "none";
        }, 550);
        
    }, tempoDeDelay);
});

// -------------------------Switch Tema------------------------------
const tema = document.getElementById('switchmode');

tema.addEventListener('click', () => {
    document.body.classList.toggle('darkmode');
  
    const header = document.querySelector('header');
    if (header) {
        header.classList.toggle('darkmode');
    }
});

// -------------------------Skill Info------------------------------

const estrela = document.querySelectorAll('.div-estrela');
const info = document.querySelectorAll('.skill-info');

    estrela.forEach((estrela, index) => {
    estrela.addEventListener('mouseenter', function() {
    const targetContent = info[index]; // quando clicado, vai ver o index da estrela e vai abrir o info de mesmo index
      estrela.addEventListener('mouseleave', function(){
        targetContent.classList.remove('ativo')
      })
    targetContent.classList.toggle('ativo'); // o que foi clicado vai receber o ativo
    estrela.classList.toggle('ativa');
  });
});
// ---------------------------Menu------------------------------

const menuBtn = document.getElementById('menu-btn');
const header = document.querySelector('header');

menuBtn.addEventListener('click', () => {
    header.classList.toggle('aberto');
});
// ---------------------------Mascara Teléfono------------------------------
function mascara_tel() {
    var input = document.getElementById("tel");
    var tel = input.value;

    tel = tel.replace(/\D/g, ""); //  o \D no regex(/\D/g) significa que remove qualquer caractere que NÃO seja de "0 a 9"
    tel = tel.slice(0, 13); // limitador de caractere padrão

    var telFormatado = ""; // criando variável vazia para não ocorrer bugs

    if (tel.length > 0) {
        telFormatado += "+" + tel.substring(0, 2); // pega o símbolo + e junta com os 2 primeiros números (substring(0, 2) → que é "55").
    }
    if (tel.length > 2) {
        telFormatado += " (" + tel.substring(2, 4);
    }
    if (tel.length > 4) {
        telFormatado += ") " + tel.substring(4, 9);
    }
    if (tel.length > 9) {
        telFormatado += "-" + tel.substring(9, 13);
    }

    input.value = telFormatado;
}
// ---------------------------Modal------------------------------
    const formulario = document.querySelector('form');
    const modal = document.getElementById('Modal');
    const botaoFechar = document.getElementById('fecharModal');

    formulario.addEventListener('submit', function(event) {
    const nome = document.getElementById('nome').value.trim(); // .trim() transforma em uma string vazia "".
    const email = formulario.querySelector('input[name="email"]').value.trim();
    const tel = document.getElementById('tel').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !tel || !mensagem) { //O símbolo ! antes das variáveis significa "negativo" ou "vazio" (em JS, uma string vazia "" é tratada como falsa)
        event.preventDefault();     // O event.preventDefault() serve para impedir o comportamento padrão que o navegador faria após o evento.
        modal.showModal(); // modal de alerta
    }
    
    botaoFechar.addEventListener('click', () => {
      modal.close();
    });
});


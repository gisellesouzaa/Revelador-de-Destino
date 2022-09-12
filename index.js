const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim."
]

// Função criada e add ao HTML (atributo "onclick") para ser executada ao clicar no botão. 
function fazerPergunta() {
  
  //Caso o cliente não digite a pergunta:
  if(inputPergunta.value == "") {
    alert("Digite sua pergunta")
    return
  }

  //Desabilitar botão
  buttonPerguntar.setAttribute("disabled", true) 

  //Variável com conteúdo em HTML
  const pergunta = "<div>" + inputPergunta.value + "</div>"
  
  //gerar número aleatório
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random()*totalRespostas)

  //add o conteúdo ao HTML
  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  // ocultar a resposta depois de 3 segundos e reativar o botão
  elementoResposta.style.opacity = 1;
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 5000)

}

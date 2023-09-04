document.addEventListener("DOMContentLoaded", function () {
    const classificacoes = document.querySelectorAll(".classificação");
    const caixaClassificacao = document.querySelector(".caixa_classificação");
    const sendBtn = document.querySelector("#send");
    const caixa = document.querySelector("#caixa");
    let classificacaoSelecionada = "Satisfeito";
  
    function handleClassificacaoClick(e) {
      const classificacaoClicada = e.target.closest(".classificação");
      if (!classificacaoClicada) return;
  
      removeActive();
      classificacaoClicada.classList.add("active");
      classificacaoSelecionada = classificacaoClicada.querySelector("p").textContent;
    }
  
    caixaClassificacao.addEventListener("click", handleClassificacaoClick);
  
    sendBtn.addEventListener("click", function () {
      caixa.innerHTML = `
          <h1>Obrigada!</h1>
          <br>
          <strong>Feedback: ${classificacaoSelecionada}</strong>
          <p>Agradecemos sua participação!</p>
      `;
    });
  
    function removeActive() {
      classificacoes.forEach((classificacao) => {
        classificacao.classList.remove("active");
      });
    }
  });
  
  

 const abas = document.querySelectorAll(".aba");

 abas.forEach(aba => {

     aba.addEventListener("click", function () {

         if (aba.classList.contains("selecionado")) {
             // Corta o fluxo da função, fazendo com que não execute os comandos em baixo
             // Isso é bom, para não rodar código desnecessário e ganhar uma performance
             return;
        }

         selecionarAba(aba)
        

        mostrarInformacoesDaAba(aba)

     })

  })
  function selecionarAba(aba) {
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado")
    aba.classList.add("selecionado")
  }

  function mostrarInformacoesDaAba(aba) {
    const informacaoSelecionada = document.querySelector(".informacao.selecionado")
    informacaoSelecionada.classList.remove("selecionado")

    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
    console.log(idDoElementoDeInformacoesDaAba)

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
  }



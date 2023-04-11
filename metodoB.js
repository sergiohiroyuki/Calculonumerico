function calcularPolinomio(coeficientes, x) {
    // Esta função calcula o valor do polinômio com base nos coeficientes informados
    let resultado = 0;
    for (let i = 0; i < coeficientes.length; i++) {
      resultado += coeficientes[i] * (x ** i);
    }
    return resultado;
  }
  
  function validarEntrada(v1, v2, e, coeficientes) {
    // Esta função verifica se os valores informados pelo usuário são válidos
    if (coeficientes.length < 2) {
      throw new Error("Erro: informe pelo menos 2 coeficientes");
    }
    if (v1 === "" || v2 === "" || e === "") {
      throw new Error("Erro: todos os campos devem ser preenchidos");
    }
    v1 = Number(v1);
    v2 = Number(v2);
    e = Number(e);
    if (isNaN(v1) || isNaN(v2) || isNaN(e)) {
      throw new Error("Erro: os valores devem ser numéricos");
    }
    if (v1 >= v2) {
      throw new Error("Erro: v1 deve ser menor que v2");
    }
  }
  
  function bissecao(coeficientes, v1, v2, e) {
    // Esta função implementa o método da bisseção para encontrar a raiz do polinômio
    let media = 0;
    let iteracoes = [];
    while (Math.abs(v2 - v1) > e) {
      media = (v1 + v2) / 2;
      let f_media = calcularPolinomio(coeficientes, media);
      let f_v1 = calcularPolinomio(coeficientes, v1);
      if (f_media === 0) {
        return [media, media];
      } else if (f_media * f_v1 < 0) {
        v2 = media;
      } else {
        v1 = media;
      }
      iteracoes.push([v1, v2]);
    }
    return iteracoes[iteracoes.length - 1];
  }
  
  function exibirResultado(intervalo) {
    // Esta função exibe o resultado formatado para o usuário
    const resp2 = document.querySelector(".resp2");
    resp2.textContent = `A raiz do polinômio está no intervalo [${intervalo[0]}, ${intervalo[1]}]`;
  }
  
  function metodoB(event) {
    event.preventDefault();
  
    // Obtém os valores informados pelo usuário
    const v1 = document.getElementById("v1").value;
    const v2 = document.getElementById("v2").value;
    const e = document.getElementById("e").value;
    const coeficientes = [];
    for (let i = 0; i <= 10; i++) {
      coeficientes.push(parseInt(document.getElementById("num" + i).value));
    }
  
    try {
      validarEntrada(v1, v2, e, coeficientes);
      const intervalo = bissecao(coeficientes, Number(v1), Number(v2), Number(e));
      exibirResultado(intervalo);
    } catch (error) {
      alert(error.message);
    }
  }
  
  const form2 = document.getElementById("form2");
  form2.addEventListener("submit", metodoB);
  
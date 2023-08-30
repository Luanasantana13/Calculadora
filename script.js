document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("displayInput");
    const historyList = document.getElementById("history-list");
    let currentCalculation = "";
  
    // Adiciona um listener para cada botão de número e operador
    const buttons = document.querySelectorAll(".num-button, .operator-button");
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        currentCalculation += this.textContent;
        display.value = currentCalculation;
      });
    });
  
    // Limpa a tela e o histórico
    document.getElementById("clear-button").addEventListener("click", function () {
      currentCalculation = "";
      display.value = "";
      historyList.innerHTML = "";
    });
  
    // Realiza o cálculo e mostra o histórico
    document.getElementById("equals-button").addEventListener("click", function () {
      try {
        const result = eval(currentCalculation);
        if (isNaN(result)) throw "Erro";
        display.value = result;
        historyList.innerHTML += `<li>${currentCalculation} = ${result} (${getCurrentDateTime()})</li>`;
        currentCalculation = "";
      } catch (error) {
        display.value = "Erro";
        currentCalculation = "";
      }
    });
  
    function getCurrentDateTime() {
      const now = new Date();
      return `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    }
  });
  
  document.getElementById("decimal-button").addEventListener("click", function () {
  if (currentCalculation[currentCalculation.length - 1] !== "." && !currentCalculation.match(/[+\-*/]/)) {
    currentCalculation += ".";
    display.value = currentCalculation;
  }
});
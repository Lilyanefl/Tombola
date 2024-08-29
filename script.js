document.addEventListener("DOMContentLoaded", function () {
  const tabellone = document.getElementById("tabellone");
  const estraiButton = document.getElementById("estrai");
  const numeriEstratti = new Set();

  for (let i = 1; i <= 76; i++) {
    const cella = document.createElement("div");
    cella.classList.add("cella");
    cella.textContent = i;
    cella.id = `cella-${i}`;
    tabellone.appendChild(cella);
  }

  function estraiNumero() {
    if (numeriEstratti.size === 76) {
      alert("Tutti i numeri sono stati estratti!");
      return;
    }

    let numero;
    do {
      numero = Math.floor(Math.random() * 76) + 1;
    } while (numeriEstratti.has(numero));

    numeriEstratti.add(numero);
    evidenziaCella(numero);
  }

  function evidenziaCella(numero) {
    const cella = document.getElementById(`cella-${numero}`);
    if (cella) {
      cella.classList.add("evidenziato");
    }
  }

  estraiButton.addEventListener("click", estraiNumero);
});

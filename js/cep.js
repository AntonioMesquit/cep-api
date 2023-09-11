export class Cepe {
  constructor() {
    this.header = document.querySelector("header");
    this.err = document.querySelector(".erro-mensage");
    this.body = document.querySelector("body");
    this.submitButton = document.querySelector(".but");
    this.inputCep = document.querySelector(".input-cep");

    this.submitButton.addEventListener('click', (e) => {
      e.preventDefault();
      this.handleCepSubmit();
    });

    this.menu = document.querySelector(".menu");
    this.menu.addEventListener('click', () => {
      this.clearMenu();
    });
  }

  async cep(CepValue) {
    try {
      const sentence = await fetch(`https://viacep.com.br/ws/${CepValue}/json/`);
      if (sentence.status === 200) {
        let data = await sentence.json();
        let state = data.uf;
        let address = data.logradouro;
        let city = data.localidade;
        let district = data.bairro;
        this.header.classList.remove("active");
        this.err.textContent = "";
        this.body.classList.add("active");

        document.querySelector(".city").textContent = `Cidade: ${city}`;
        document.querySelector(".state").textContent = `Estado: ${state}`;
        document.querySelector(".address").textContent = `Endereço: ${address}`;
        document.querySelector(".district").textContent = `Bairro: ${district}`;
      } else {
        this.header.classList.add("active");
        this.err.textContent = "CEP inválido";

        document.querySelector(".city").textContent = "";
        document.querySelector(".state").textContent = "";
        document.querySelector(".address").textContent = "";
        document.querySelector(".district").textContent = "";
      }
    } catch (error) {
      this.handleError();
    }
  }

  handleCepSubmit() {
    let valorCep = this.inputCep.value.trim();
    const cepRegex = /^\d{5}-\d{3}$/;

    if (!cepRegex.test(valorCep)) {
      this.handleError("Digite no formato 50500-500");
    } else {
      this.header.classList.remove("active");
      this.cep(valorCep);
    }
  }

  handleError(errorMessage = "Erro ao buscar CEP") {
    this.header.classList.add("active");
    this.err.textContent = errorMessage;
  }

  clearMenu() {
    this.body.classList.remove("active");
    document.querySelector(".city").textContent = "";
    document.querySelector(".state").textContent = "";
    document.querySelector(".address").textContent = "";
    document.querySelector(".district").textContent = "";
  }
}

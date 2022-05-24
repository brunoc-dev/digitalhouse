window.onload = function (e) {
  const mensagemDeErro = 'Campo obrigatório';
  const formulario = document.querySelector('form.form-auth');
  const errosFormulario = [];
  
  // inputs
  const emailInput = document.querySelector('input[name="email"]');
  const nomeInput = document.querySelector('input[name="name"]');
  
  // elementos de erros
  const formErrors = document.querySelector('div.form-errors');
  const emailErro = document.querySelector('span.emailErro');
  const nomeErro = document.querySelector('span.nomeErro');

  function limparErros (elementoDeErro) {
    errosFormulario.length = 0;
    elementoDeErro.innerText = '';
  }

  emailInput.onchange = function (e) {
    limparErros(emailErro);

    if (!e.target.value.length) {
      errosFormulario.push({ email: mensagemDeErro });
      emailErro.innerText = mensagemDeErro;
    }
  }

  nomeInput.onchange = function (e) {
    limparErros(nomeErro);

    if (!e.target.value.length) {
      errosFormulario.push({ nome: mensagemDeErro });
      nomeErro.innerText = mensagemDeErro;
    }
  }

  formulario.onsubmit = function (e) {
    if (!emailInput.value) {
      errosFormulario.push({ email: mensagemDeErro });
      emailErro.innerText = mensagemDeErro;
    }

    if (!nomeInput.value) {
      errosFormulario.push({ nome: mensagemDeErro });
      nomeErro.innerText = mensagemDeErro;
    }

    if (errosFormulario.length) {
      e.preventDefault();
      formErrors.innerText = 'Por favor, corrija os erros do formulário!';
    }
  }
};
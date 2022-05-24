window.onload = function (e) {
  const mensagemDeErro = 'Campo obrigatório';
  const formulario = document.querySelector('form.form-auth');
  const errosFormulario = [];
  
  // inputs
  const emailInput = document.querySelector('input[name="email"]');
  const nomeInput = document.querySelector('input[name="name"]');
  const sobrenomeInput = document.querySelector('input[name="surname"]');
  const usernameInput = document.querySelector('input[name="username"]');
  const passwordInput = document.querySelector('input[name="password"]');
  
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

  function logar(user) {
    sessionStorage.setItem('username', user.username);

    redirecionar();
  }

  function redirecionar () {
    const caminhoSeparado = location.href.split('/');
    caminhoSeparado.pop();
    caminhoSeparado.push('feed.html');
    location.href = caminhoSeparado.join('/');
  }

  formulario.onsubmit = function (e) {
    e.preventDefault();

    if (!emailInput.value) {
      errosFormulario.push({ email: mensagemDeErro });
      emailErro.innerText = mensagemDeErro;
    }

    if (!nomeInput.value) {
      errosFormulario.push({ nome: mensagemDeErro });
      nomeErro.innerText = mensagemDeErro;
    }

    if (errosFormulario.length) {
      formErrors.innerText = 'Por favor, corrija os erros do formulário!';
    } else {
      fetch('http://localhost:8000/users', {
        method: 'post',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({
          email: emailInput.value,
          name: nomeInput.value,
          surname: sobrenomeInput.value,
          username: usernameInput.value,
          password: passwordInput.value
        })
      })
      .then(response => response.json())
      .then(response => {
        if (response.id) logar(response);
        else formErrors.innerText = response.msg;
      })
      .catch(error => formErrors.innerText = 'Erro ao se comunicar com os servidores!');
    }
  }
};
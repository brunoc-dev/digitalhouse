const seletorNomeUsuario = 'body > header > div > nav > a:nth-child(3) > div > div';
const seletorInputPrimeiroNome = 'body > main > form > input[type=text]:nth-child(3)';
const seletorformularioCadastro = 'form-auth';

let nomeUsuario = document.querySelector(seletorNomeUsuario);

// Altera o conteúdo do elemento contindo na variável nomeUsuario
nomeUsuario.innerHTML = '<strong id="nome-usuario">Nome Usuário</strong>';

// Pega elemento referente ao css passado na função querySelector
let inputPrimeiroNome = document.querySelector(seletorInputPrimeiroNome);

// Altera o placeholder do elemento contido na variável
inputPrimeiroNome.placeholder = 'Digite o primeiro nome';

// Pega elemento pela propriedade 'name', neste caso o valor da propriedade também era name;
listaInputs = document.getElementsByName('name');

// Altera o placeholder do elemento contido na nesta posição do array
listaInputs[0].placeholder = ' Digite o primeiro nome';

// Pegar todos os elementos inputs do document
let inputList = document.querySelectorAll('input');

// Altera o raio das bordas dos elementos selecionados
inputList.forEach(selectedInput => {
  selectedInput.style.borderRadius = '4px';
})

// Pegar o elemento pelo nome da classe css
let form = document.getElementsByClassName(seletorformularioCadastro);

// Altera a propriedade css display para flex
form[0].style.display = 'flex';

// Altera a propriedade css flex-flow para column wrap
form[0].style.flexFlow = 'column wrap';
form[0].style.cssText = "display: flex; flex-flow: column wrap;"

// Pegar o elemento body no DOM
let selectedElement = document.querySelector('body');

// Altera a cor de fundo do elemento selecionado
selectedElement.style.backgroundColor = '#fafafa'
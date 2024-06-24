
    /*
        Criei trés funções responsaveis pela representação da fila de espera, e as funções são:
        adicionarNaFila() -- responsavel por adicionar elementos na fila;
        atenderPrimeiro() -- responsavel por remover da lista dos os valores do índice 0;
        atualizarLista() -- responsavel por atualizar a lista a cada vez que é inserido ou é removido;

        Todo isso só é possivel graças ao array criado em JavaScript, que quando é criado já vêem com alguns métodos como o shift() que serve para remover o primeiro elemento da fila.
    */

const filaDeEspera = [];

const nomeInput = document.getElementById('nome');
const adicionarButton = document.getElementById('adicionar');
const atenderButton = document.getElementById('atender');
const listaDeFilaElement = document.getElementById('lista-de-fila');

adicionarButton.addEventListener('click', adicionarNaFila());
atenderButton.addEventListener('click', atenderPrimeiro());

function adicionarNaFila() {

  const nome = nomeInput.value;

  if (nome) {
    // Verifica se o nome já está na fila
    if (filaDeEspera.includes(nome)) {
      alert(`O nome ${nome} já está na fila.`);
    } else {
      filaDeEspera.push(nome);
      atualizarLista();
      nomeInput.value = '';
    }
  }

}


function atenderPrimeiro() {

  if (filaDeEspera.length > 0) {
    const proximoAtendido = filaDeEspera.shift();
    alert(`Atendeu: ${proximoAtendido}`);
    atualizarLista();
  } else {
    return window.alert('A fila está vazia');
  }

}

function atualizarLista() {
  listaDeFilaElement.innerHTML = '';
  filaDeEspera.forEach((nome) => {
  const liElement = document.createElement('li');
  liElement.textContent = nome;
  listaDeFilaElement.appendChild(liElement);
  });
}

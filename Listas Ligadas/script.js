/* script.js */ 

const novoElementoInput = document.getElementById('novo-elemento');
const adicionarButton = document.getElementById('adicionar');
const lista = document.getElementById('lista');

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let head = null; // Head of the linked list

adicionarButton.addEventListener('click', () => {
  const novoElementoValor = novoElementoInput.value.trim();
  if (novoElementoValor) {
    if (!verificarExistencia(novoElementoValor)) { // Check before adding
      const novoNode = new Node(novoElementoValor);
      // Add new node to the list
      head = inserirNode(head, novoNode); // Use inserirNode for clarity

      renderizarLista();
      novoElementoInput.value = '';
    }
  }
});

function verificarExistencia(value) {
  let current = head;
  while (current) {
    if (current.data === value) {
      alert(`${value} já existe na lista!`);
      return true; // Indicate existing value
    }
    current = current.next;
  }
  return false; // Indicate non-existing value
}

function renderizarLista() {
  lista.innerHTML = ''; // Clear existing list

  let current = head;
  while (current) {
    const listaItem = document.createElement('li');
    const itemSpan = document.createElement('span');
    const removerButton = document.createElement('button');

    itemSpan.textContent = current.data;
    removerButton.textContent = 'Remover';

    removerButton.addEventListener('click', () => {
      head = removerNode(current); 
    });

    listaItem.appendChild(itemSpan);
    listaItem.appendChild(removerButton);
    lista.appendChild(listaItem);

    current = current.next;
  }
}

function removerNode(value) {
  let index = verificarExistencia(value); // Obtém a posição do nó

  if (index !== -1) { // Verifica se o nó existe
    if (index === 0) {
      // Removendo o nó cabeça
      head = head.next;
    } else {
      let previous = null;
      let current = head;

      // Navega até o nó anterior ao nó a ser removido
      while (index > 0) {
        previous = current;
        current = current.next;
        index--;
      }

      // Remove o nó e atualiza as ligações
      previous.next = current.next;
    }
    renderizarLista(); // Atualiza a renderização da lista
    return true; // Indica que a remoção foi bem-sucedida
  } else {
    alert('Node not found in the list!');
    return false; // Indica que a remoção falhou
  }
}

function inserirNode(head, newNode) {
  
  if (!head || head.data >= newNode.data) {
    newNode.next = head;
    return newNode;
  }

  let current = head;
  let previous = null;

  while (current && current.data < newNode.data) {
    previous = current;
    current = current.next;
  }

  previous.next = newNode;
  newNode.next = current;

  return head;
}

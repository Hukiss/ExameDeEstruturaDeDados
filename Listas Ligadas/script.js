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

let head = null; // Cabeça da lista ligada


adicionarButton.addEventListener('click', () => {
    const novoElementoValor = novoElementoInput.value.trim();
    if (novoElementoValor) {
      if (!verificarExistencia(novoElementoValor)) { // Verifica antes de adicionar
        const novoNode = new Node(novoElementoValor);
        // ... (código para adicionar o novoNode à lista)
  
          if (!head) {
              head = novoNode;
          } else {
              let current = head;
              while (current.next) {
                  current = current.next;
              }
              current.next = novoNode;
          }
  
        renderizarLista();
        novoElementoInput.value = '';
      }
    }
  });

function verificarExistencia(node) {
    let current = head;
    while (current) {
      if (current.data === node) {
        alert(`${node} já existe na lista!`);
        return true; // Indica que o valor já existe
      }
      current = current.next;
    }
    return false; // Indica que o valor não existe
  }
  

function renderizarLista() {
        lista.innerHTML = ''; // Limpar lista atual
        
        let current = head;
        while (current) {
        const listaItem = document.createElement('li');
        const itemSpan = document.createElement('span');
        const removerButton = document.createElement('button');
        
        itemSpan.textContent = current.data;
        removerButton.textContent = 'Remover';
        
        removerButton.addEventListener('click', () => {
            head = removerNode(current); // Chamar a função removerNode
            
        });
      
        listaItem.appendChild(itemSpan);
        listaItem.appendChild(removerButton);
        lista.appendChild(listaItem);
      
        current = current.next;
    }
}

function removerNode(node) {
    if (!head){
        window.alert('Não existe nenhum nó cabeça')
    } 
      
    for (const key in head) {

        if (key === node) {
            head.data = null;
            head = head.next;
            break
        }
    }
      
    let previous = head;
    let current = head.next;
    while (current !== node) {
        previous = current;
        current = current.next;
    }
      
    previous.next = current.next;
      return head;
}      

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    isElementPresent(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    add(data) {
        if (this.isElementPresent(data)) {
            window.alert(`Elemento ${data} já foi inserido. Não será possível inserir novamente.`);
            return;
        }
        const newNode = new Node(data);
        newNode.next = null; 
        newNode.next = this.head;
        this.head = newNode; 
    }

    remove(position) {
        if (!this.head) {
            return;
        }
        if (position === 0) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        let previous = null;
        let index = 0;
        while (current && index < position) {
            previous = current;
            current = current.next;
            index++;
        }
        if (!current) {
            return;
        }
        previous.next = current.next;
    }

    update(position, newData) {
        if (!this.head) {
            return;
        }
        let current = this.head;
        let index = 0;
        while (current && index < position) {
            current = current.next;
            index++;
        }
        if (!current) {
            return;
        }
        current.data = newData;
    }

    display() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }
}

const lista = new LinkedList();
const adicionar = document.getElementById('adicionar');
const remover = document.getElementById('remover');
const posicao = document.getElementById('posicao');
const nome = document.getElementById('nome');
const listaElement = document.getElementById('lista');

adicionar.addEventListener('click', () => {
    const nomeValue = nome.value;
    if (nomeValue) {
        lista.add(nomeValue);
        updateList();
        nome.value = '';
    }
});

remover.addEventListener('click', () => {
    const posicaoValue = parseInt(posicao.value);
    if (!isNaN(posicaoValue)) {
        lista.remove(posicaoValue);
        updateList();
        posicao.value = '';
    }
});

function updateList() {
    listaElement.innerHTML = '';
    const listItems = lista.display();
    listItems.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        listaElement.appendChild(li);
    });
}
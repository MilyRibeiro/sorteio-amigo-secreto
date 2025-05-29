let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let listaDeAmigos = document.getElementById('lista-amigos');
    amigos.push(amigo.value);

    if (listaDeAmigos.textContent === '') {
        listaDeAmigos.textContent = amigo.value;
    } else {
        listaDeAmigos.textContent = listaDeAmigos.textContent + ', ' + amigo.value;
    }

    amigo.value = '';   // Limpa o campo de entrada
};

function sortear() {
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for(let i = 0; i < amigos.length; i++) {
        if(i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
};

function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';   // Limpa o sorteio anterior
};

function atualizarLista() {
    let listaDeAmigos = document.getElementById('lista-amigos');
    lista.innerHTML = '';     // Limpa a lista de amigos

    for(let i = 0; i < amigos.length; i++) {
        // Cria um elemento de parágrafo patra cada amigo:
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];

        // Cria um evento de clique para excluir o amigo:
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i)
        });

        // Adiciona o parágrafo à lista de amigos:
        listaDeAmigos.appendChild(paragrafo);
    };
};

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
};

// Adicionar Opção de Excluir Amigos da Lista: Essa modificação cria elementos de parágrafo <p> para cada amigo na lista. Em seguida, adiciona um ouvinte de evento de clique a cada parágrafo, que chama a função excluirAmigo com o índice correspondente.
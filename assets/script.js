const gameItems = document.querySelectorAll('.game');
const gameArea = document.querySelector('.game-area');
const selectGenres = document.querySelector('#select-genre')

function addGame() {
    for (let i in dados) {
        gameArea.innerHTML += `<article class="game"><img class="logo-game" src="${dados[i].logo}"><div class="nameAndAvaliation"><h2 class="title-game">${dados[i].nome}</h2><span class="avaliation"></span></div><span>${dados[i].genero}</span><span>${dados[i].empresa}</span><div class="underImage"><a href="#" class="downloadButton">Fazer download<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" width="24" height="24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg></a</div></article>`
    }
}

function adicionarOpcoesAoSelect(dados, selectElement) {

    const generosUnicos = new Set();

    dados.forEach(jogo => {
        generosUnicos.add(jogo.genero);
    });

    // Cria as opções e adiciona ao select
    generosUnicos.forEach(genero => {
        const option = document.createElement('option');
        option.value = genero;
        option.text = genero;
        selectElement.appendChild(option);
    });
}

function setStar() {
    let star = []
    let avaliation = document.querySelectorAll('.avaliation')
    for (let i in dados) {
        star.push(dados[i].avaliacao)
    }
    for (let i in star) {
        for (let j = 1; j <= star[i]; j++) {
            const img = document.createElement('img')
            img.src = 'images/star.svg'
            avaliation[i].appendChild(img)
        }
    }
}

document.querySelector('.navegation-filter').addEventListener('click', e => {
    const buttonsNavegation = document.querySelectorAll('.navegation-filter a');
    const button = e.target;

    // Remove a classe 'active' de todos os itens
    buttonsNavegation.forEach(item => {
        item.classList.remove('active');
    });

    // Adiciona a classe 'active' ao botão clicado
    button.classList.add('active');

});

function filter() {
    let selectedPlatform = '';
    let selectedGenre = '';

    // Atualiza a área de jogos com base na plataforma e no gênero selecionados
    function updateGameArea() {
        gameArea.innerHTML = ''; // Limpa a área de jogos

        // Filtra os jogos com base na plataforma e no gênero selecionados
        const filteredGames = dados.filter(game => {
            const platformMatch = game.plataforma.toLowerCase() === selectedPlatform.toLowerCase() || game.plataforma.toLowerCase() === 'todas';
            const genreMatch = selectedGenre === '' || game.genero.toLowerCase() === selectedGenre.toLowerCase();
            return platformMatch && genreMatch;
        });

        // Renderiza os jogos filtrados
        filteredGames.forEach(game => {
            gameArea.innerHTML += `
                <article class="game">
                    <img class="logo-game" src="${game.logo}">
                    <div class="nameAndAvaliation">
                        <h2 class="title-game">${game.nome}</h2>
                        <span class="avaliation"></span>
                    </div>
                    <span>${game.genero}</span>
                    <span>${game.empresa}</span>
                    <div class="underImage">
                        <a href="#" class="downloadButton">Fazer download<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" width="24" height="24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg></a>
                    </div>
                </article>`;
        });

        setStar(); // Atualiza as avaliações de estrelas
    }

    // Ouvinte de clique para o filtro de plataforma
    document.querySelector('.navegation-filter').addEventListener('click', e => {
        selectedPlatform = e.target.getAttribute('id'); // Obtém a plataforma selecionada
        updateGameArea(); // Atualiza a área de jogos com base na nova plataforma
    });

    // Ouvinte de mudança no seletor de gênero
    document.querySelector('#select-genre').addEventListener('change', item => {
        selectedGenre = item.target.value; // Obtém o gênero selecionado
        updateGameArea(); // Atualiza a área de jogos com base no novo gênero
    });
}


adicionarOpcoesAoSelect(dados, selectGenres)
filter()
addGame()
setStar()
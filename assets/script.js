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

function filterPlatform(){
    const platform = document.querySelector('.navegation-filter').addEventListener('click', e => {
        gameArea.innerHTML = ''
        const filterId = e.target.getAttribute('id')
        const filteredGames = dados.filter(game => {
            return game.plataforma.toLowerCase() === filterId.toLowerCase() || game.plataforma.toLowerCase() === 'todas';
        });
        
        filteredGames.forEach(game => {
            gameArea.innerHTML += `<article class="game"><img class="logo-game" src="${game.logo}"><div class="nameAndAvaliation"><h2 class="title-game">${game.nome}</h2><span class="avaliation"></span></div><span>${game.genero}</span><span>${game.empresa}</span><div class="underImage"><a href="#" class="downloadButton">Fazer download<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" width="24" height="24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg></a</div></article>`
        });
    })
}

function filterGenre() {
    document.querySelector('#select-genre').addEventListener('mouseup', item => {
        const atualFilter = item.target.value
        if(atualFilter != ''){
            gameArea.innerHTML = ''
            const filteredGames = dados.filter(game => {
                return game.genero.toLowerCase() === atualFilter.toLowerCase()
            })
            filteredGames.forEach(game => {
                gameArea.innerHTML += `<article class="game"><img class="logo-game" src="${game.logo}"><div class="nameAndAvaliation"><h2 class="title-game">${game.nome}</h2><span class="avaliation"></span></div><span>${game.genero}</span><span>${game.empresa}</span><div class="underImage"><a href="#" class="downloadButton">Fazer download<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" width="24" height="24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg></a</div></article>`
            });
            setStar()
        }
        return atualFilter
    })
}

function filter(platform, genre){
    const filteredGames = dados.filter(game => {
        return game.genero.toLowerCase() === atualFilter.toLowerCase()
    })
}


adicionarOpcoesAoSelect(dados, selectGenres)
filterPlatform()
addGame()
setStar()
const gameItems = document.querySelectorAll('.game');
const gameArea = document.querySelector('.game-area');
const selectGenres = document.querySelector('#select-genre')

function addGame() {
    // Ordena os jogos por nome em ordem alfabética
    const orderData = dados.sort((a, b) => a.nome.localeCompare(b.nome));

    // Limpa a área de jogos antes de adicionar novos itens
    gameArea.innerHTML = '';

    // Adiciona os jogos na área de jogos em ordem alfabética
    for (let i in orderData) {
        gameArea.innerHTML += `
            <article class="game">
                    <div class="logo-game">
                        <img src="${orderData[i].logo}">
                        <div class="underImage">
                            <a href="#" class="downloadButton">Fazer download<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" width="24" height="24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg></a>
                        </div>
                    </div>
                    <div class="nameAndAvaliation">
                        <h2 class="title-game">${orderData[i].nome}</h2>
                        <span class="avaliation"></span>
                    </div>
                    <div class="moreInfos">
                        <div class="generAndEnterprise">
                            <span>${orderData[i].genero.join(' ')}</span>
                            <span>${orderData[i].empresa}</span>
                        </div>
                        <span><img data-arrow="${Number([i])}" class="arrow" src="images/arrowdown.svg"></span>
                    </div>
                    <div data-info="${Number([i])}" class="moreInfo hidden">
                            <span class="game-description">${orderData[i].description}</span
                    </div>
                </article>`;;
    }
}

function adicionarOpcoesAoSelect(dados, selectElement) {

    const generosUnicos = new Set();

    dados.forEach(jogo => {
        generosUnicos.add(jogo.genero[0]);
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
    let avaliationElements = document.querySelectorAll('.avaliation'); // Seleciona todos os elementos de avaliação

    // Itera sobre os dados dos jogos
    for (let i in dados) {
        let starsFilled = dados[i].avaliacao; // Pega o número de estrelas preenchidas para o jogo
        let starsTotal = 5; // O total de estrelas a serem exibidas
        let avaliationElement = avaliationElements[i]; // O elemento onde as estrelas serão inseridas
        avaliationElement.innerHTML = ''; // Limpa o conteúdo anterior

        // Adiciona as estrelas preenchidas
        for (let j = 0; j < starsFilled; j++) {
            const filledStar = document.createElement('img');
            filledStar.src = 'images/star.svg'; // Estrela preenchida
            avaliationElement.appendChild(filledStar);
        }

        // Adiciona as estrelas vazias
        for (let j = starsFilled; j < starsTotal; j++) {
            const emptyStar = document.createElement('img');
            emptyStar.src = 'images/star-outline.svg'; // Estrela não preenchida
            avaliationElement.appendChild(emptyStar);
        }
    }
}


document.querySelectorAll('.navegation-filter a').forEach(item => {
    item.addEventListener('click', e => {
        const buttonsNavegation = document.querySelectorAll('.navegation-filter a');
        const button = e.target;
        // Remove a classe 'active' de todos os itens
        buttonsNavegation.forEach(item => {
            item.classList.remove('active');
        });

        // Adiciona a classe 'active' ao botão clicado
        button.classList.add('active');
    })
})

function filter() {
    let selectedPlatform = '';
    let selectedGenre = '';

    // Atualiza a área de jogos com base na plataforma e no gênero selecionados
    function updateGameArea() {
        gameArea.innerHTML = ''; // Limpa a área de jogos

        // Filtra os jogos com base na plataforma e no gênero selecionados
        const filteredGames = dados.filter(game => {
            const platformMatch = selectedPlatform != '' ? game.plataforma.includes(selectedPlatform.charAt(0).toUpperCase() + selectedPlatform.slice(1)) || game.plataforma.includes('Todas') : addGame;
            const genreMatch = selectedGenre === '' || game.genero.includes(selectedGenre);
            return platformMatch && genreMatch;
        });
        if (filteredGames.length > 0) {
            let i = 1
            filteredGames.forEach(game => {
                gameArea.innerHTML += `
                <article class="game">
                    <img class="logo-game" src="${game.logo}">
                    <div class="nameAndAvaliation">
                        <h2 class="title-game">${game.nome}</h2>
                        <span class="avaliation"></span>
                    </div>
                    <div class="moreInfos">
                        <div class="generAndEnterprise">
                            <span>${game.genero.join(' ')}</span>
                            <span>${game.empresa}</span>
                        </div>
                        <span><img data-arrow="${i}" class="arrow" src="images/arrowdown.svg"></span>
                    </div>
                    <div data-info="${i}" class="moreInfo hidden">
                            <span class="game-description">${game.description}</span
                        </div>
                    <div class="underImage">
                        <a href="#" class="downloadButton">Fazer download<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" width="24" height="24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg></a>
                    </div>
                </article>`;
                i++
            })
        } else {
            gameArea.innerHTML = `
                <div class="erro">
                    <h1 style="text-align: center; font-size: 50px;">Não encontramos nenhum jogo.</h1>
                    <img src="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-aviso_114360-1551.jpg">
                </div>
                `
        }

        setStar(); // Atualiza as avaliações de estrelas
        moreInfo()
    }

    document.querySelectorAll('.filter-platform').forEach(item => {
        item.addEventListener('click', (e) => {
            selectedPlatform = e.currentTarget.getAttribute('id');
            updateGameArea();
        })
    })

    // Ouvinte de mudança no seletor de gênero
    document.querySelector('#select-genre').addEventListener('change', item => {
        selectedGenre = item.target.value == 'sem filtro' ? '' : item.target.value // Obtém o gênero selecionado
        updateGameArea(); // Atualiza a área de jogos com base no novo gênero
    });
}

function searchGame() {
    const searchIcon = document.querySelector("#search")
    const searchGame = document.querySelector("#searchGame")
    searchIcon.addEventListener('click', e => {
        gameArea.innerHTML = ''
        let gameName = searchGame.value.toLowerCase()
        let game = dados.filter(game => game.nome.toLowerCase().includes(`${gameName.toLowerCase()}`))
        if (game[0]) {
            for (let i in game) {
                searchGame.value = ''
                gameArea.innerHTML += `
                <article class="game">
                    <img class="logo-game" src="${game[i].logo}">
                    <div class="nameAndAvaliation">
                        <h2 class="title-game">${game[i].nome}</h2>
                        <span class="avaliation"></span>
                    </div>
                    <div class="moreInfos">
                        <div class="generAndEnterprise">
                            <span>${game[i].genero.join(' ')}</span>
                            <span>${game[i].empresa}</span>
                        </div>
                        <span><img data-arrow="${Number([i])}" class="arrow" src="images/arrowdown.svg"></span>
                    </div>
                    <div data-info="${Number([i])}" class="moreInfo hidden">
                            <span class="game-description">${game[i].description}</span
                        </div>
                    <div class="underImage">
                        <a href="#" class="downloadButton">Fazer download<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" width="24" height="24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg></a>
                    </div>
                </article>`;
                setStar()
            }
        } else {
            gameArea.innerHTML = `
                <div class="erro">
                    <h1 style="text-align: center; font-size: 50px;">Não encontramos este jogo.</h1>
                    <img src="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-aviso_114360-1551.jpg">
                </div>
                `
        }
    })
}

function moreInfo() {
    document.querySelectorAll('.arrow').forEach(item => {
        
        item.addEventListener('click', item => {

            const containsArrow = item.target.classList.contains('rotateArrow')
            const arrowId = item.target.getAttribute('data-arrow')
            
            document.querySelectorAll('.arrow').forEach(item => {
                item.classList.remove('rotateArrow')
            })

            document.querySelectorAll('.moreInfo').forEach(item => {
                item.classList.add('hidden')
            })

            if(!containsArrow){
                item.target.classList.add('rotateArrow')
                document.querySelectorAll(`.moreInfo[data-info="${arrowId}"]`).forEach(item => {
                    item.classList.remove('hidden')
                })
            }
        })
    })
}

addGame()
setStar()
adicionarOpcoesAoSelect(dados, selectGenres)
searchGame()
filter()
moreInfo()
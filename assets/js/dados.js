let dados = [
    {
        nome: 'Efootball',
        empresa: 'Konami',
        plataforma: ['Todas'],
        avaliacao: '4',
        logo: 'https://sm.ign.com/ign_br/screenshot/default/efootball-konami_8ygg.jpg',
        genero: ['Esportes'],
        description: 'Você tem muitas opções de jogo, como o “Time autêntico”, que permite controlar clubes e seleções reais. Também tem o “Time ideal,” em que você cria seu próprio time com seus jogadores favoritos, sejam eles atuais ou lendas do futebol. Este é o jogo que une o futebol de verdade com seus sonhos futebolísticos mais insanos!',
        download: 'https://www.konami.com/efootball/pt-br/page/download_edition_list',
    },
    {
        nome: 'Free Fire',
        empresa: 'Garena',
        plataforma: ['Mobile'],
        avaliacao: '4',
        logo: 'https://s2-ge.glbimg.com/9FnScUdaWiRb8yG7Q02pJF7SRKA=/0x0:624x328/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/B/f/BtBfeZTbylJ00qZEK8Ew/free-fire.jpg',
        genero: ['Ação'],
        description: 'Free Fire é um jogo eletrônico mobile de ação-aventura do gênero battle royale, criado pela desenvolvedora vietnamita 111dots Studio e publicado pela Garena. O jogo obteve um beta aberto em novembro de 2017 e foi lançado oficialmente para Android de iOS em 4 de dezembro de 2017.',
        download: 'https://ffodownload.freefiremobile.com/?lang=pt-br',
    },
    {
        nome: 'EA FC',
        empresa: 'Electronic Arts',
        plataforma: ['Todas'],
        avaliacao: '2',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv1Ku2hOJNtasdTaWwqi2VVLuj5TK9Qop8Mg&s',
        genero: ['Esportes'],
        description: 'EA FC é a nova geração da série de jogos de futebol da Electronic Arts, oferecendo uma experiência realista e envolvente com gráficos impressionantes e uma jogabilidade aprimorada. Com uma variedade de modos de jogo e equipes licenciadas, é ideal para os fãs de futebol que buscam uma simulação autêntica e emocionante.',
        download: 'https://www.ea.com/pt-br/ea-app#downloads',
    },
    {
        nome: 'God of War Ragnarok',
        empresa: 'Sony',
        plataforma: ['Console'],
        avaliacao: '5',
        logo: 'https://t2.tudocdn.net/630481?w=1920&h=1080',
        genero: ['Ação'],
        description: 'God of War Ragnarok é a continuação épica da saga de Kratos e Atreus, onde você enfrentará deuses e monstros em uma jornada através da mitologia nórdica. Com gráficos deslumbrantes, uma história profunda e um combate envolvente, é um dos melhores jogos de ação e aventura disponíveis para console.',
        download: 'https://www.playstation.com/pt-br/games/god-of-war-ragnarok/',
    },
    {
        nome: 'Gran Turismo 7',
        empresa: 'Sony',
        plataforma: ['Console'],
        avaliacao: '5',
        logo: 'https://image.api.playstation.com/vulcan/ap/rnd/202109/1321/yZ7dpmjtHr1olhutHT57IFRh.png',
        genero: ['Corrida'],
        description: 'Gran Turismo 7 é a mais recente adição à icônica série de simuladores de corrida da Sony. Com uma ampla seleção de carros e pistas, gráficos realistas e física de condução precisa, oferece uma experiência de corrida imersiva e detalhada para os entusiastas de automobilismo.',
        download: 'https://www.gran-turismo.com/br/',
    },
    {
        nome: 'The Last of Us part I',
        empresa: 'Sony',
        plataforma: ['Console'],
        avaliacao: '4',
        logo: 'https://tm.ibxk.com.br/2022/09/13/13175215245315.jpg?ims=1200x675',
        genero: ['Terror', 'Ação'],
        description: 'The Last of Us part I é uma reimaginação do aclamado jogo de ação e sobrevivência da Sony. Acompanhe a emocionante jornada de Joel e Ellie em um mundo devastado por uma pandemia, onde a luta pela sobrevivência é constante. Com uma narrativa impactante e mecânicas de jogo refinadas, é uma experiência inesquecível.',
        download: 'https://store.steampowered.com/agecheck/app/1888930/',
    },
    {
        nome: 'Minecraft',
        empresa: 'Mojang',
        plataforma: ['Todas'],
        avaliacao: '4',
        logo: 'https://cienciahoje.org.br/wp-content/uploads/2020/11/C_C-POP_0fe20042_0bb8_4781_82f4_7130f928b021.jpg',
        genero: ['Aventura'],
        description: 'Minecraft é um fenômeno global que permite aos jogadores explorar, construir e criar em um mundo de blocos infinitamente expansivo. Seja sobrevivendo a monstros, minerando recursos ou criando estruturas elaboradas, o jogo oferece liberdade criativa e diversão sem limites para todas as idades.',
        download: 'https://www.minecraft.net/pt-br/download',
    },
    {
        nome: 'World Soccer Champs',
        empresa: 'Monkey Studios',
        plataforma: ['Mobile'],
        avaliacao: '5',
        logo: 'https://i.pinimg.com/736x/bd/d4/b6/bdd4b623f3385dac69556c051418e699.jpg',
        genero: ['Esportes'],
        description: 'World Soccer Champs é um emocionante jogo de futebol para mobile que oferece uma jogabilidade dinâmica e divertida. Com uma variedade de equipes e modos de jogo, você pode competir em ligas e torneios ao redor do mundo, aprimorando suas habilidades e estratégias no caminho para a vitória.',
        download: 'https://play.google.com/store/apps/details?id=com.monkeyibrow.worldsoccerchamps&hl=pt_BR',
    },
    {
        nome: 'Among Us',
        empresa: 'InnerSloth',
        plataforma: ['Mobile'],
        avaliacao: '4',
        logo: 'https://cdn1.epicgames.com/salesEvent/salesEvent/amoguslandscape_2560x1440-3fac17e8bb45d81ec9b2c24655758075',
        genero: ['Estratégia'],
        description: 'Among Us é um jogo multiplayer onde você e seus amigos são membros de uma tripulação espacial tentando completar tarefas enquanto um ou mais impostores tentam sabotar e eliminar a equipe. Com um foco em estratégia e dedução social, é uma experiência divertida e envolvente para jogar com amigos.',
        download: 'https://play.google.com/store/apps/details?id=com.innersloth.spacemafia&pcampaignid=web_share',
    },
    {
        nome: 'Clash Royale',
        empresa: 'Supercell',
        plataforma: ['Mobile'],
        avaliacao: '4',
        logo: 'https://s2-techtudo.glbimg.com/JZf57RUeW3xOzixzQaSNTw3rLdk=/0x0:695x390/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/H/U/i0quACSJqSNfiQOFvTfQ/clash-royale-duas-contas-tutorial-5.jpg',
        genero: ['Estratégia'],
        description: 'Clash Royale é um jogo de estratégia em tempo real onde você coleciona cartas e constrói um deck para enfrentar outros jogadores em batalhas rápidas. Com uma mistura de cartas de tropas, feitiços e edifícios, você deve derrotar seu oponente enquanto defende sua própria torre.',
        download: 'https://play.google.com/store/apps/details?id=com.supercell.clashroyale&hl=pt_BR',
    },
    {
        nome: 'PUBG Mobile',
        empresa: 'PUBG Corporation',
        plataforma: ['Mobile'],
        avaliacao: '4',
        logo: 'https://s2-techtudo.glbimg.com/KtPJFn8vkv01hBiOIdXYOTY5fp4=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/Y/B/mguuXqROu01yIlvFbyBw/pubg-certa.png',
        genero: ['Ação'],
        description: 'PUBG Mobile é a versão mobile do popular jogo de battle royale PlayerUnknown\'s Battlegrounds. Lute para ser o último sobrevivente em um enorme mapa com até 100 jogadores, coletando armas e equipamentos enquanto a área de jogo diminui.',
        download: 'https://www.pubgmobile.com/pt/home.shtml',
    },
    {
        nome: 'Asphalt 9: Legends',
        empresa: 'Gameloft',
        plataforma: ['Mobile'],
        avaliacao: '4',
        logo: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70050000018569/6b78179ee108b8f83191d82e294fe18b08d075a2158eb03e9c4430e16064baa1',
        genero: ['Corrida'],
        description: 'Asphalt 9: Legends é um emocionante jogo de corrida que oferece gráficos impressionantes e uma variedade de carros e pistas. Com uma jogabilidade rápida e várias modalidades de corrida, é ideal para quem procura uma experiência de corrida intensa e visualmente deslumbrante.',
        download: 'https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftA9HM&hl=pt_BR',
    },
    {
        nome: 'Hades',
        empresa: 'Supergiant Games',
        plataforma: ['Desktop', 'Console'],
        avaliacao: '5',
        logo: 'https://cdn1.epicgames.com/min/offer/2560x1440-2560x1440-5e710b93049cbd2125cf0261dcfbf943.jpg',
        genero: ['Ação', 'RPG'],
        description: 'Hades é um aclamado jogo de ação roguelike em que você controla Zagreu, o filho de Hades, tentando escapar do submundo. Com um combate dinâmico, uma narrativa envolvente e um estilo visual único, é um dos melhores exemplos do gênero roguelike.',
        download: 'https://store.steampowered.com/agecheck/app/1145360/',
    },
    {
        nome: 'The Witcher 3: Wild Hunt',
        empresa: 'CD Projekt Red',
        plataforma: ['Desktop', 'Console'],
        avaliacao: '5',
        logo: 'https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f',
        genero: ['RPG'],
        description: 'The Witcher 3: Wild Hunt é um dos mais aclamados jogos de RPG de todos os tempos, oferecendo um mundo aberto vasto e detalhado. Siga Geralt de Rivia em sua busca para encontrar sua filha adotiva em um mundo repleto de monstros, magia e escolhas morais complexas.',
        download: 'https://buy.thewitcher.com/pt-br_br/',
    },
    {
        nome: 'Red Dead Redemption 2',
        empresa: 'Rockstar Games',
        plataforma: ['Desktop', 'Console'],
        avaliacao: '5',
        logo: 'https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg',
        genero: ['Ação', 'Aventura'],
        description: 'Red Dead Redemption 2 é um épico jogo de ação e aventura ambientado no final do século 19 na América. Com um mundo aberto incrível, uma narrativa imersiva e uma atenção impressionante aos detalhes, é uma experiência de jogo inesquecível.',
        download: 'https://store.rockstargames.com/pt-BR/game/buy-red-dead-redemption-2?_gl=1*enfti3*_ga*NzA2NDQxMzEyLjE3MjY0MjkwMjk.*_ga_PJQ2JYZDQC*MTcyNjQyOTAyOS4xLjAuMTcyNjQyOTAyOS4wLjAuMA..',
    },
    {
        nome: 'Overwatch 2',
        empresa: 'Blizzard Entertainment',
        plataforma: ['Desktop', 'Console'],
        avaliacao: '2',
        logo: 'https://s2-techtudo.glbimg.com/daUvmuYX6HRAPFnPOQV0O0gaPtU=/0x0:1280x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/8/U/iDpBUQT7mvAYcW6Y0PgA/maxresdefault.jpg',
        genero: ['FPS'],
        description: 'Overwatch 2 é a sequência do popular jogo de tiro em equipe Overwatch. Com novas heroínas, mapas e modos de jogo, oferece uma experiência dinâmica e colaborativa, mantendo a jogabilidade que fez o original um sucesso.',
        download: 'https://overwatch.blizzard.com/pt-br/',
    },
    {
        nome: 'Cyberpunk 2077',
        empresa: 'CD Projekt Red',
        plataforma: ['Desktop', 'Console'],
        avaliacao: '4',
        logo: 'https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7',
        genero: ['RPG', 'Ação'],
        description: 'Cyberpunk 2077 é um RPG de mundo aberto ambientado em um futuro distópico. Apesar de um lançamento conturbado, o jogo oferece um mundo rico, uma narrativa envolvente e uma jogabilidade inovadora para os fãs do gênero.',
        download: 'https://store.steampowered.com/agecheck/app/1091500/',
    },
    {
        nome: 'GTA III Definitive Edition',
        empresa: 'Rockstar Games',
        plataforma: ['Desktop', 'Console', 'Mobile'],
        avaliacao: '3',
        logo: 'https://cdn1.epicgames.com/offer/ec64a50e79884e28be9ac3d3cd4f5c12/EGS_GrandTheftAutoIIITheDefinitiveEdition_RockstarGames_S1_2560x1440-5e44468c38f50805cac5ab47748d7b79',
        genero: ['Ação', 'Aventura'],
        description: 'GTA III leva você para a cidade fictícia de Liberty City, onde você assume o papel de um criminoso em busca de vingança. Este jogo revolucionou o gênero de mundo aberto com sua narrativa envolvente e ambiente imersivo.',
        download: 'https://store.steampowered.com/agecheck/app/1546970/',
    },
    {
        nome: 'GTA: Vice City Definitive Edition',
        empresa: 'Rockstar Games',
        plataforma: ['Desktop', 'Console', 'Mobile'],
        avaliacao: '4',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ52QzFVyihfKxXa0HiU8ptOdiAxC_4sXzVHg&s',
        genero: ['Ação', 'Aventura'],
        description: 'GTA: Vice City é ambientado em uma recriação dos anos 80, com uma atmosfera de Miami e uma trilha sonora memorável. O jogo segue a história de Tommy Vercetti enquanto ele se estabelece como um grande nome no crime em Vice City.',
        download: 'https://store.steampowered.com/agecheck/app/1546990/',
    },
    {
        nome: 'GTA: San Andreas Definitive Edition',
        empresa: 'Rockstar Games',
        plataforma: ['Desktop', 'Console', 'Mobile'],
        avaliacao: '4',
        logo: 'https://cdn1.epicgames.com/offer/3262906d93334603b399e106492b1217/EGS_GrandTheftAutoSanAndreasTheDefinitiveEdition_RockstarGames_S1_2560x1440-3daa3396c39d5310e071d9093689fdde',
        genero: ['Ação', 'Aventura'],
        description: 'GTA: San Andreas leva você a um mundo aberto expansivo, cobrindo três cidades baseadas em locais reais da Califórnia e Nevada. Acompanhe CJ em sua jornada para restaurar sua gangue e descobrir a verdade por trás da morte de sua mãe.',
        download: 'https://www.xbox.com/pt-BR/games/store/grand-theft-auto-san-andreas-the-definitive-edition/9P7RSGG6Z699',
    },
    {
        nome: 'GTA IV',
        empresa: 'Rockstar Games',
        plataforma: ['Desktop', 'Console'],
        avaliacao: '5',
        logo: 'https://s2-techtudo.glbimg.com/I9MFCGPOKeCJbvS7qVFsVupgUiE=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2017/n/q/Wqwk8kQueGABmPSAfawA/maxresdefault.jpg',
        genero: ['Ação', 'Aventura'],
        description: 'GTA IV apresenta Niko Bellic, um imigrante que busca uma nova vida em Liberty City. Com gráficos melhorados e uma narrativa profunda, o jogo oferece uma experiência rica e envolvente em um mundo aberto.',
        download: 'https://store.rockstargames.com/pt-BR/game/buy-grand-theft-auto-iv?_gl=1*8f3hs*_ga*NzA2NDQxMzEyLjE3MjY0MjkwMjk.*_ga_PJQ2JYZDQC*MTcyNjQyOTAyOS4xLjEuMTcyNjQyOTcxNC4wLjAuMA..',
    },
    {
        nome: 'GTA V',
        empresa: 'Rockstar Games',
        plataforma: ['Desktop', 'Console'],
        avaliacao: '5',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvfvvcR-PugQkws511jSaFFxMO78UbCGIftw&s',
        genero: ['Ação', 'Aventura'],
        description: 'GTA V é conhecido por seu vasto mundo aberto e sua narrativa multifacetada, seguindo três protagonistas distintos em Los Santos. Com uma enorme variedade de atividades e missões, é um dos títulos mais populares e bem-sucedidos da série.',
        download: 'https://store.rockstargames.com/pt-BR/game/buy-gta-v',
    },
    {
        nome: 'Real Racing 3',
        empresa: 'Eletronic Arts',
        plataforma: ['Mobile'],
        avaliacao: '4',
        logo: 'https://media.contentapi.ea.com/content/dam/eacom/RR3/common/r3-6-5-youtube-channelart-1280x720.jpg.adapt.crop16x9.320w.jpg',
        genero: ['Corrida'],
        description: 'Real Racing 3 é um jogo de corrida mobile da EA com gráficos realistas, mais de 250 carros licenciados de marcas como Ferrari e Porsche, e pistas famosas. Oferece modos multiplayer e eventos, com um modelo freemium, proporcionando uma experiência imersiva de corrida.',
        download: 'https://www.ea.com/pt-br/games/real-racing/real-racing-3',
    },
    {
        nome: 'Need for Speed: NL',
        empresa: 'Eletronic Arts',
        plataforma: ['Mobile'],
        avaliacao: '4',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDpnK8BrDPirh46ztfD75Kro398noOd4toow&s',
        genero: ['Corrida'],
        description: 'Need for Speed: No Limits é um jogo de corrida mobile que oferece corridas intensas e rápidas em ambientes urbanos. Os jogadores podem personalizar seus carros e participar de competições clandestinas, enfrentando rivais em corridas de alta velocidade, fugas da polícia e eventos especiais. O jogo combina ação arcade com gráficos impressionantes e jogabilidade acessível.',
        download: 'https://play.google.com/store/apps/details?id=com.ea.game.nfs14_row&hl=pt_BR',
    },
    {
        nome: 'Plants vs Zombies',
        empresa: 'Eletronic Arts',
        plataforma: ['Mobile'],
        avaliacao: '4',
        logo: 'https://s2-techtudo.glbimg.com/BvGQTYzvDYlN4RB32ZVcdkeOyt4=/0x0:695x390/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/M/O/q43eyKRSmrK6LJshVQfw/2015-01-26-plants-vs-zombies-2-serie-garden-warfare-pinball.jpg',
        genero: ['Estratégia'],
        description: 'Plants vs. Zombies é um jogo de estratégia onde os jogadores defendem sua casa contra hordas de zumbis usando uma variedade de plantas com habilidades únicas. Com níveis desafiadores e humor leve, o jogo combina ação e planejamento em tempo real.',
        download: 'https://play.google.com/store/apps/details?id=com.ea.game.pvzfree_row&hl=pt_BR',
    },
    {
        nome: 'Stardew Valley',
        empresa: 'Eletronic Arts',
        plataforma: ['Mobile', 'Console', 'Desktop'],
        avaliacao: '5',
        logo: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/capsule_616x353.jpg?t=1711128146',
        genero: ['RPG'],
        description: 'Stardew Valley é um jogo de simulação onde os jogadores gerenciam uma fazenda, cultivando plantas, cuidando de animais e interagindo com uma comunidade local. Além de atividades agrícolas, o jogo oferece pesca, mineração, e exploração, com uma vibe relaxante e uma narrativa envolvente.',
        download: 'https://play.google.com/store/apps/details?id=com.chucklefish.stardewvalley&hl=pt_BR',
    },
    {
        nome: 'Genshin Impact',
        empresa: 'Eletronic Arts',
        plataforma: ['Mobile', 'Console'],
        avaliacao: '3',
        logo: 'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GenshinImpact_miHoYoLimited_S1_2560x1440-91c6cd7312cc2647c3ebccca10f30399',
        genero: ['RPG'],
        description: 'Genshin Impact é um RPG de ação em mundo aberto, onde os jogadores exploram o vasto reino de Teyvat. Com um sistema de combate baseado em elementos e um elenco variado de personagens, o jogo oferece missões, exploração e lutas contra inimigos poderosos, tudo com gráficos impressionantes e multiplayer cooperativo.',
        download: 'https://genshin.hoyoverse.com/pc-launcher/?utm_source=GS-BR-PC-X-search-keywords-classic-20230303-lowbid&mhy_trace_channel=ga_channel&new=1&gad_source=1&gclid=Cj0KCQjwi5q3BhCiARIsAJCfuZnudAwm1sWxA9-3q22k6D70yq2ekFx6QkKXh_O5W6caPoo7MOJcS9gaAjXMEALw_wcB#/',
    },
    {
        nome: 'Fire Emblem Heroes',
        empresa: 'Intelligent Systems',
        plataforma: ['Mobile'],
        avaliacao: '5',
        logo: 'https://www.nintendo.com/eu/media/images/10_share_images/games_15/smart_device_3/2x1_SmartDevice_FireEmblemHeroes_image1600w.jpg',
        genero: ['RPG', 'Estratégia'],
        description: 'Fire Emblem Heroes é um RPG tático da série Fire Emblem, onde você comanda um exército de heróis em batalhas estratégicas. O jogo combina elementos clássicos da série, como combate baseado em turnos e uma rica narrativa, com uma mecânica de gacha para obter novos personagens. Com uma variedade de heróis e modos de jogo, Fire Emblem Heroes oferece uma experiência profunda e envolvente, ideal para jogadores que gostam de estratégias e táticas.',
        download: 'https://play.google.com/store/apps/details?id=com.nintendo.zaba&hl=pt_BR&gl=US'
    },
    {
        nome: 'Call of Duty Mobile',
        empresa: 'Activision',
        plataforma: ['Mobile'],
        avaliacao: '4',
        logo: 'https://s2-ge.glbimg.com/DMV9LCIiAaj2_P1WOwhSeSX9iO0=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/G/8/iQJ3UASpqe8SWEmWmwSw/call-of-duty-mobile.jpg',
        genero: ['Ação', 'FPS'],
        description: 'Call of Duty: Mobile é um jogo de tiro em primeira pessoa para dispositivos móveis, desenvolvido pela Activision e Timi Studios. Ele oferece modos variados, incluindo Battle Royale e partidas tradicionais, com gráficos de alta qualidade e controles otimizados para telas sensíveis ao toque. Disponível para iOS e Android, o jogo permite personalização de armas e oferece uma experiência de combate intensa e envolvente',
        download: 'https://play.google.com/store/apps/details?id=com.activision.callofduty.shooter&hl=pt_BR'
    },
    {
        nome: 'Modern Combat 5',
        empresa: 'Gameloft',
        plataforma: ['Mobile', 'Desktop', 'Console'],
        avaliacao: '5',
        logo: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000011362/1778beee5cbc677cd60ce42abcc3534e768162062d08e762fa603cc9d2424302',
        genero: ['Ação', 'FPS'],
        description: 'Modern Combat 5 é um jogo de tiro em primeira pessoa que combina gráficos impressionantes com uma campanha envolvente e modos multiplayer. Disponível para mobile, oferece ação intensa e personalização de armas.',
        download: 'https://www.gameloft.com/game/modern-combat-5'
    },
    {
        nome: 'Call of Duty: Warzone Mobile',
        empresa: 'Activision',
        plataforma: ['Mobile'],
        avaliacao: '4',
        logo: 'https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/wzm/WZM-01-LAUNCH-TOUT.jpg',
        genero: ['Ação', 'FPS'],
        description: 'Call of Duty: Warzone Mobile é a versão para dispositivos móveis do popular jogo de batalha real, oferecendo a mesma experiência de combate intenso e estratégia. Os jogadores enfrentam-se em uma grande arena, com gráficos de alta qualidade e jogabilidade dinâmica adaptada para dispositivos móveis.',
        download: 'https://www.callofduty.com/br/pt/warzonemobile'
    },
    {
        nome: 'Roblox',
        empresa: 'Activision',
        plataforma: ['Mobile', 'Console', 'Desktop'],
        avaliacao: '4',
        logo: 'https://images.rbxcdn.com/076d146437ffc79cebc36bf2ded91196',
        genero: ['Aventura'],
        description: 'Roblox é uma plataforma de jogos online que permite aos usuários criar e jogar jogos criados por outros jogadores. Disponível em múltiplas plataformas, incluindo iOS, Android e PC, oferece uma vasta gama de experiências interativas, desde jogos de aventura até simulações. Com uma interface amigável para criação e um sistema de moedas virtuais para compras dentro do jogo, Roblox promove criatividade e socialização entre seus jogadores.',
        download: 'https://www.roblox.com/pt/download'
    },
];

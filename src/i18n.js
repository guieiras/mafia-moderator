export default ({
  roles: {
    angel: 'Anjo',
    assassin: 'Assassino',
    bodyguard: 'Guarda-Costas',
    detective: 'Detetive',
    informant: 'Informante',
    narrator: 'Narrador',
    unknown: 'Função Desconhecida',
  },
  emblems: {
    angel: ['Proteção do Anjo', 'angel-wings'],
    bodyguard: ['Proteção do Guarda-Costas', 'black-hand-shield'],
    mafia: ['Alvo dos Assassinos', 'targeted'],
  },
  events: {
    angelBlessing: {
      name: 'Proteção do Anjo',
      description: 'Anjo acorda e escolhe um jogador. O jogador será protegido de efeitos negativos.'
    },
    bodyProtection: {
      name: 'Proteção do Guarda-Costas',
      description: 'Guarda-Costas acorda e escolhe um outro jogador. O jogador será protegido dos assassinos, usando o Guarda-costas em seu lugar.'
    },
    detectiveInvestigation: {
      name: 'Investigação do Detetive',
      description: 'Detetive acorda e escolhe um outro jogador. Será revelado se o jogador é Assassino ou não.'
    },
    detectiveInvestigationResult: {
      name: 'Investigação do Detetive',
      description: 'O jogador escolhido $0 Assassino.',
      objects: {
        false: 'não é',
        true: 'é',
      }
    },
    discover: {
      assassin: {
        name: 'Assassinos acordam!',
        description: 'Identifique os jogadores que estão de olhos abertos:'
      },
      silent: {
        name: '$0 se identifica.',
        description: 'O jogador deve levantar o polegar. Identique o jogador:'
      },
      wakeup: {
        name: '$0 acorda!',
        description: 'Identifique o jogador que está de olhos abertos:'
      },
      narrator: {
        name: 'Seleção de Narrador',
        description: 'Selecione o jogador que vai comandar as ações do jogo:'
      },
    },
    informationDetails: {
      name: 'Identificação dos Assassinos para o informante',
      description: 'Todos os assassinos devem erguer o polegar. Cada informante, separadamente, deve abrir os olhos e identificar os assassinos sem que eles o saibam.'
    },
    mafiaKill: {
      name: 'Ataque noturno dos Assassinos',
      description: 'Escolha o alvo dos Assassinos. O jogador escolhido será eliminado.'
    },
    playerLynch: {
      name: 'Eliminação do dia',
      description: 'A cidade vota em um jogador que deseja eliminar.'
    },
    rolePlayersDead: {
      name: 'O $0 foi eliminado!',
      description: 'Acorde o jogador, aguarde um instante, e peça para que o jogador durma. Dessa forma não será possível saber se o jogador foi eliminado.'
    },
    win: {
      assassin: {
        name: 'Vitória dos Assassinos',
        description: 'O número de Assassinos ultrapassou o número de cidadãos. Os Assassinos venceram.'
      },
      narrator: {
        name: 'Vitória da cidade',
        description: 'Os Assassinos foram eliminados.'
      }
    },
    shared: {
      ok: 'OK!'
    },
  },
  pages: {
    live: {
      loading: 'Carregando',
      actions: {
        title: 'Ações',
      },
      players: {
        nullPlayer: 'Ninguém',
        title: 'Jogadores',
      },
      stack: {
        title: 'Eventos Pendentes',
      },
      clock: {
        title: 'Relógio',
        format: '%dª %t',
        day: 'manhã',
        night: 'noite',
      },
    },
    players: {
      blocktitle: 'Jogadores',
      placeholder: 'Novo Jogador',
      remove: 'Remover',
      next: 'Avançar',
      title: 'Cidade Dorme',
    },
    shared: {
      back: 'Voltar',
    },
    roles: {
      title: 'Selecionar Papéis',
      noRole: 'Papéis sem ação',
      start: 'Iniciar Jogo',
    },
  },
})

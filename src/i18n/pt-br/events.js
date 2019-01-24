export default ({
  angelBlessing: {
    name: 'Proteção do Anjo',
    description: 'Anjo acorda e escolhe um jogador. O jogador será protegido de efeitos negativos.'
  },
  barmanMeeting: {
    name: 'Alvo do Barman',
    description: 'Barman acorda e escolhe um jogador. A ação do jogador (se houver) será bloqueada durante essa noite.'
  },
  bodyProtection: {
    name: 'Proteção do Guarda-Costas',
    description: 'Guarda-Costas acorda e escolhe um outro jogador. O jogador será protegido dos assassinos, usando o Guarda-costas em seu lugar.'
  },
  bulletproofGiveaway: {
    name: 'Empréstimo do Colete à prova de balas',
    description: 'Vendedor de Coletes acorda e escolhe um outro jogador. A morte do jogador pelos assassinos será adiada para o fim do dia.'
  },
  citySleeps: {
    name: 'Cidade Dorme!',
    description: 'Todos os jogadores devem fechar seus olhos.'
  },
  cityWakeUp: {
    name: 'Cidade Acorda!',
    description: 'Todos os jogadores devem abrir seus olhos. Os eventos que marcaram essa noite foram:'
  },
  corruptInvestigation: {
    name: 'Investigação do Corrupto',
    description: 'Corrupto acorda e escolhe um outro jogador. Será revelado se o jogador é Assassino ou não.'
  },
  detectiveInvestigation: {
    name: 'Investigação do Detetive',
    description: 'Detetive acorda e escolhe um outro jogador. Será revelado se o jogador é Assassino ou não.'
  },
  discover: {
    assassin: {
      singular: {
        name: 'Assassino acorda',
        description: 'Identifique o jogador que está de olhos abertos:'
      },
      plural: {
        name: 'Assassinos acordam',
        description: 'Identifique os jogadores que estão de olhos abertos:'
      }
    },
    silent: {
      singular: {
        name: '$0 se identifica',
        description: 'O jogador deve levantar o polegar. Identique o jogador:'
      },
      plural: {
        name: '$0s se identificam',
        description: 'Os jogadores devem levantar o polegar. Identique todos os jogadores:'
      }
    },
    wakeup: {
      singular: {
        name: '$0 acorda',
        description: 'Identifique o jogador que está de olhos abertos:'
      },
      plural: {
        name: '$0s acordam',
        description: 'Identifique todos os jogadores que estão de olhos abertos:'
      }
    },
    narrator: {
      singular: {
        name: 'Seleção de Narrador',
        description: 'Selecione o jogador que vai comandar as ações do jogo:'
      }
    },
  },
  hunterKill: {
    name: 'Disparo do Caçador',
    description: 'Caçador revela a sua carta e pode escolher um outro jogador. O jogador alvo será eliminado.'
  },
  informationDetails: {
    name: 'Identificação dos Assassinos para o informante',
    description: 'Todos os assassinos devem erguer o polegar. Cada informante, separadamente, deve abrir os olhos e identificar os assassinos sem que eles o saibam.'
  },
  investigationResult: {
    name: 'Resultado da investigação',
    description: 'O jogador escolhido $0 Assassino.',
    objects: {
      false: 'não é',
      true: 'é',
    }
  },
  kidnapTarget: {
    name: 'Ataque do Sequestrador',
    description: 'Sequestrador acorda e escolhe um outro jogador. O jogador não poderá falar, votar ou ser votado no próximo dia.'
  },
  mafiaKill: {
    name: 'Ataque noturno dos Assassinos',
    description: 'Escolha o alvo dos Assassinos. O jogador escolhido será eliminado.'
  },
  playerLynch: {
    name: 'Eliminação do dia',
    description: 'A cidade vota em um jogador que deseja eliminar.'
  },
  playerNegatedByBarman: {
    name: 'Ação bloqueada pelo Barman',
    description: 'Avise para $0 que a ação foi bloqueada pelo Barman.'
  },
  rolePlayersDead: {
    name: '$0 não está na cidade',
    description: 'Acorde o jogador, aguarde um instante, e peça para que o jogador durma. Dessa forma não será possível saber se o jogador foi eliminado.'
  },
  vigilance: {
    name: 'Vigilância noturna',
    description: 'Vigilante acorda e escolhe um outro jogador. Serão revelados todos os jogadores que escolheram o alvo essa noite.'

  },
  vigilanceResult: {
    name: 'Resultado da vigilância',
    description: 'Os jogadores que escolheram $0 essa noite foram: $1'
  },
  vampireBite: {
    name: 'Mordida do Vampiro',
    description: 'Vampiro acorda e escolhe um jogador não tem mordida. O jogador ganhará uma mordida pela manhã.'
  },
  vampireNoTargets: {
    name: 'Não há jogadores válidos para o Vampiro morder',
    description: 'Peça para o Vampiro acordar, e em seguida dormir. Nenhum jogador receberá uma mordida'
  },
  win: {
    assassin: {
      name: 'Vitória dos Assassinos',
      description: 'O número de Assassinos ultrapassou o número de cidadãos. Os Assassinos venceram.'
    },
    gangster: {
      name: '$0 ganhou o jogo',
      description: 'Todos os outros gângsters foram eliminados.'
    },
    narrator: {
      name: 'Vitória da cidade',
      description: 'Os Assassinos foram eliminados.'
    },
    vampire: {
      name: 'Vampiro ganhou o jogo',
      description: 'Três jogadores vivos estão com mordida. A condição de vitória do Vampiro foi atingida.'
    },
  },
  shared: {
    ok: 'OK!'
  },
});

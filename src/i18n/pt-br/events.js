export default ({
  angelBlessing: {
    name: 'Proteção do Anjo',
    description: 'Anjo acorda e escolhe um jogador. O jogador será protegido de efeitos negativos.'
  },
  bodyProtection: {
    name: 'Proteção do Guarda-Costas',
    description: 'Guarda-Costas acorda e escolhe um outro jogador. O jogador será protegido dos assassinos, usando o Guarda-costas em seu lugar.'
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
      name: 'Assassinos acordam',
      description: 'Identifique os jogadores que estão de olhos abertos:'
    },
    silent: {
      name: '$0 se identifica',
      description: 'O jogador deve levantar o polegar. Identique o jogador:'
    },
    wakeup: {
      name: '$0 acorda',
      description: 'Identifique o jogador que está de olhos abertos:'
    },
    narrator: {
      name: 'Seleção de Narrador',
      description: 'Selecione o jogador que vai comandar as ações do jogo:'
    },
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
    name: '$0 nâo está na cidade',
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
});

export default ({
  roles: {
    assassin: 'Assassino',
    narrator: 'Narrador',
    unknown: 'Função Desconhecida',
  },
  events: {
    discoverNarrator: {
      name: 'Seleção de Narrador',
      description: 'Selecione o jogador que vai comandar as ações do jogo:'
    },
    discoverAssassin: {
      name: 'Identificação dos Assassinos',
      description: 'Assassinos acordam! Identifique os jogadores que estão de olhos abertos:'
    },
    win: {
      assassin: {
        name: 'Vitória dos Assassinos',
        description: 'O número de Assassinos ultrapassou o número de cidadãos. Os Assassinos venceram.'
      }
    },
    shared: {
      ok: 'OK!'
    }
  },
  pages: {
    live: {
      loading: 'Carregando',
      actions: {
        title: 'Ações',
      },
      players: {
        title: 'Jogadores',
      },
      stack: {
        title: 'Eventos Pendentes',
      },
      clock: {
        title: 'Relógio',
        format: '%t do dia %d',
        day: 'Dia',
        night: 'Noite',
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

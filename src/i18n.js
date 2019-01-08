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
  },
  pages: {
    live: {
      clock: {
        title: 'Relógio',
        format: '%t do dia %d',
        day: 'Dia',
        night: 'Noite'
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

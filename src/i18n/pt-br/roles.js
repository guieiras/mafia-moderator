export default ({
  roles: {
    angel: 'Anjo',
    assassin: 'Assassino',
    bodyguard: 'Guarda-Costas',
    detective: 'Detetive',
    kidnapper: 'Sequestrador',
    informant: 'Informante',
    narrator: 'Narrador',
    unknown: 'Função Desconhecida',
  },
  emblems: {
    angel: ['Proteção do Anjo', 'angel-wings'],
    bodyguard: ['Proteção do Guarda-Costas', 'black-hand-shield'],
    kidnapper: ['Ataque do Sequestrador', 'silenced'],
    mafia: ['Alvo dos Assassinos', 'targeted'],
  },
  reports: {
    mafiaKiled: '$player foi eliminado(a) pelos assassinos!',
    kidnapped: '$player foi sequestrado(a). O jogador não pode falar, votar ou ser votado.',
  }
});

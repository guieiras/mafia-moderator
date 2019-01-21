import I18n from '../../i18n';

export default ({
  BittenByVampire(player) {
    return I18n.reports.bittenByVampire.replace('$player', player.name);
  },
  Kidnapped(player) {
    return I18n.reports.kidnapped.replace('$player', player.name);
  },
  MafiaKilled(player) {
    return I18n.reports.mafiaKilled.replace('$player', player.name);
  },
});

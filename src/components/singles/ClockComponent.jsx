import React from 'react';
import { BlockTitle, Card } from 'framework7-react';
import I18n from '../../i18n';

export default function Clock(props) {
  const period = I18n.pages.live.clock[props.clock.time > 10 ? 'day' : 'night'];
  return <div>
    <BlockTitle>{ I18n.pages.live.clock.title }</BlockTitle>
    <Card content={I18n.pages.live.clock.format.replace('%d', props.clock.date).replace('%t', period)} />
  </div>;
}

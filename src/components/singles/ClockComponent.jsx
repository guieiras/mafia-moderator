import React from 'react';
import { BlockTitle, Card } from 'framework7-react';
import I18n from '../../i18n';

export default function Clock(props) {
  const base = I18n['pages']['live']['clock'];
  const period = props.clock.time > 6 ? base['day'] : base['night'];
  return <div>
    <BlockTitle>{ base['title'] }</BlockTitle>
    <Card content={`${base['format'].replace('%d', props.clock.date).replace('%t', period)}`} />
  </div>;
}

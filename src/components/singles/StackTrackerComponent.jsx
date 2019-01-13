import React from 'react';
import { BlockTitle, Card, CardContent } from 'framework7-react';
import I18n from '../../i18n';

export default function StackTrack(props) {
  return props.stack.length > 0 ? <div>
    <BlockTitle>{ I18n.pages.live.stack.title }</BlockTitle>
    {
      props.stack.map((stack, i) => <Card key={i} title={stack.event.name}>
        <CardContent>

        </CardContent>
      </Card>)
    }
  </div> : null;
}

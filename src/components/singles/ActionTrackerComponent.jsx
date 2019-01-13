import React from 'react';
import { BlockTitle } from 'framework7-react';
import TargetComponent from '../singles/TargetComponent';
import MessageComponent from '../singles/MessageComponent';
import I18n from '../../i18n';

export default function ActionTracker(props) {
  return props.actions.length > 0 ? <div>
    <BlockTitle>{ I18n.pages.live.actions.title }</BlockTitle>
    {
      props.actions.map((action, i) => {
        switch (action.type) {
          case 'Target': return <TargetComponent key={i} event={action} />
          case 'Message': return <MessageComponent key={i} event={action} />
          default: return null;
        }
      })
    }
  </div> : null;
}

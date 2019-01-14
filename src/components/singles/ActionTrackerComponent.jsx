import React from 'react';
import { BlockTitle } from 'framework7-react';
import TargetComponent from '../singles/TargetComponent';
import MessageComponent from '../singles/MessageComponent';
import I18n from '../../i18n';

export default function ActionTracker(props) {
  const decorateEvent = function(event) {
    const applyHelpers = (text, helpers) => helpers.reduce((memo, helper, i) => memo.replace(`$${i}`, helper), text);
    const messageKey = typeof event.id === 'string' ?
                        event.id.split('.') :
                        event.id;
    const eventDict = messageKey.reduce((previous, key) => previous[key], I18n.events) || {};

    return Object.assign({
      name: applyHelpers(eventDict.name || event.id, event.helpers),
      description: applyHelpers(eventDict.description, event.helpers)
    }, event);
  }

  return props.actions.length > 0 ? <div>
    <BlockTitle>{ I18n.pages.live.actions.title }</BlockTitle>
    {
      props.actions.map((action, i) => {
        switch (action.type) {
          case 'Target': return <TargetComponent key={i} event={decorateEvent(action)} />
          case 'Message': return <MessageComponent key={i} event={decorateEvent(action)} />
          default: return null;
        }
      })
    }
  </div> : null;
}

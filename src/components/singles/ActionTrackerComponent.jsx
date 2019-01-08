import React from 'react';
import { BlockTitle } from 'framework7-react';
import TargetComponent from '../singles/TargetComponent';

export default function ActionTracker(props) {
  return props.actions.length > 0 ? <div>
    <BlockTitle>Ações</BlockTitle>
    {
      props.actions.map((target, i) => <TargetComponent key={i} event={target} />)
    }
  </div> : null;
}

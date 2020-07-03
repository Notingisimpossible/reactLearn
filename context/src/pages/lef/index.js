import React from 'react';
import ContextColor from '../../utils/context'
function Lef() {
  return (
    <div>
      <ContextColor.Consumer>
        {
          ({count, addCount}) => <h1 onClick={addCount}>{count}</h1>
        }
      </ContextColor.Consumer>
    </div>
  );
}

export default Lef;

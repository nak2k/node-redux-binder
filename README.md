# redux-binder

Keep bound action creators.

## Installation

```
npm i redux-binder -S
```

## Usage

In initialization:

``` javascript
import { bindActionCreators } from 'redux-binder';
import * as actions from './actions';

const store = configureStore();

bindActionCreators(actions, store.dispatch);
```

In a component:

``` javascript
import React from 'react';
import actions from 'redux-binder';

export default class MyComponent extends React.Component {
  render() {
    return (
      <button onClick={ actions.myAction }>Click</button>
    );
  }
}
```

## API

### default

This object keeps bound action creators.

### bindActionCreators(actionCreators, dispatch)

This function binds action creators, and put into the `default`.

Actions in `actionCreators` are ignored, and `actionCreators.default`
are also ignored for Ducks.

## License

MIT

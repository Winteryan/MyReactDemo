import * as React from 'react';
import { render } from 'react-dom';
import { Provider} from 'react-redux';
import store from './redux-root/store';

import app from './router/index.js';

import 'font-awesome/css/font-awesome.css';

render(<Provider store={store}>
  {app}
</Provider>, document.getElementById('app'));

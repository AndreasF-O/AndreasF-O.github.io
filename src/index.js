import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { LightTheme, BaseProvider } from "baseui";

const engine = new Styletron();


// const primitives = {
//   accent: '#F127E4', // hot pink
//   accent50: '#FDEDFC',
//   accent100: '#FCD3F9',
//   accent200: '#F89FF3',
//   accent300: '#F45AEA',
//   accent400: '#F127E4',
//   accent500: '#B71DAD',
//   accent600: '#901788',
//   accent700: '#600F5B',
// };
// const theme = createTheme(primitives);

ReactDOM.render(
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BaseProvider>
  </StyletronProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

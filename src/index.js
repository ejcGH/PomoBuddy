import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducer/rootReducer'
import { BrowserRouter } from 'react-router-dom';


const store = createStore(
    rootReducer
)
// ReactDOM.render(<App />, document.getElementById("root"));

  
// ReactDOM.render(
//   <Provider store={store}>
//     <App/>
//   </Provider>,
//   document.getElementById('root')
// )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>

  
);


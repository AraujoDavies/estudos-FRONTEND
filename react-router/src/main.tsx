import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// deve-se importar esse componente e colocar o App dentro dele para funcionar em todos arquivos
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

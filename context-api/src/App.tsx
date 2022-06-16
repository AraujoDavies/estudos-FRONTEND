import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { TelaCadastro } from './pages/cadastro';
import { TelaExibir } from './pages/exibir';

import { ContextProvider } from './contexts/context';
const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <h1> Título da Page </h1>
        <hr/>
        <Routes>
          <Route path="/" element={<TelaCadastro />}/>
          <Route path="/exibir" element={<TelaExibir/>} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App

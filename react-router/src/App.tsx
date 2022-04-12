import { CriandoRota } from './components/criando_primeira_rota'
import { PdeQuery } from './components/parametros_de_query';
import { RotaDinamica } from './components/rota-dinamica';

function App() {
  return (
    <>
      <CriandoRota />
      <hr/>
      <RotaDinamica />    
      <hr/>
      <PdeQuery />
    </>
  );
}

export default App

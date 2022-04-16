import { CriandoRota } from './components/criando_primeira_rota'
import { PdeQuery } from './components/parametros_de_query';
import { RotaDinamica } from './components/rota-dinamica';
import { RotaPrivada } from './components/rota-privada';

function App() {
  return (
    <>
      <h1 className='font-black text-3xl pl-8 pt-2'>
        Cada componente tem suas próprias rotas.. ENJOY IT :D
      </h1>
      <CriandoRota />
      <hr/>
      <RotaDinamica />    
      <hr/>
      <PdeQuery />
      <hr/>
      <RotaPrivada />
    </>
  );
}

export default App

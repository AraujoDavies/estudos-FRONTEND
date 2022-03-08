import { Header } from './components/header';
import { Photo } from './components/photo';
import { ClickEvent } from './components/clickEvent';
import { State } from './components/state';
import { Contador } from './components/contador';
import { InputArea } from './components/input';
import { Exercise } from './components/exercicio';
import { Comms } from './components/comunicacao';
import { List } from './components/renderList';
import { Condicionais } from './components/renderCondicionais';

function App() {
  const btnEvent = ()=>{
    alert ('o children se comunicou com o parent')
  }
  return (
    <div>
      <Header title = 'page in react'/> 
      <Header title = 'página em React JS 2.0'/> 
      Olá Mundo!
      
      <Photo legend = 'Legenda da foto'>
        {/*usando Children: */}
        <img src="https://www.google.com.br/google.jpg" alt="" /> 
      </Photo>

      <ClickEvent />
      <State />
      <hr/>
      <Contador />
      <hr/>
      <InputArea />
      <hr/>
      <h3>Exercício Forms</h3>
      <Exercise />
      <Comms text="Clica ai doidin" clickFn={btnEvent}/>
      <hr/>
      <List  />
      <hr/>
      <Condicionais />
    </div>
  );
}

export default App

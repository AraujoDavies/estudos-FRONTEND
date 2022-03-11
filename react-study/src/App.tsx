import { Header } from './components/states_e_events/header';
import { Photo } from './components/states_e_events/photo';
import { ClickEvent } from './components/states_e_events/clickEvent';
import { State } from './components/states_e_events/state';
import { Contador } from './components/states_e_events/contador';
import { InputArea } from './components/states_e_events/input';
import { Exercise } from './components/states_e_events/exercicio';
import { Comms } from './components/states_e_events/comunicacao';
import { List } from './components/states_e_events/renderList';
import { Condicionais } from './components/states_e_events/renderCondicionais';
import { Btnstylesheet } from './components/Usando_stylesheet';
import { Btnmodules } from './components/Usando_cssmodules'
import * as C from './Appstyle'
import { Tailwindtest } from './components/tailwindcss'

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
      <hr/>
      <Btnstylesheet />
      <hr/>
      <Btnmodules />
      <hr/>
      <C.Container bgcolor='#444'> Salve 
        <span> Salve Quebrada </span>
        <a href="" className="link">Link para ganhar dinheiro</a>
        <C.Botao bg='#00F'>Clique</C.Botao>
        <C.Botao bg='#F00' small>Clique small</C.Botao>
      </C.Container>
      <hr/>
      <Tailwindtest />
    </div>
  );
}

export default App
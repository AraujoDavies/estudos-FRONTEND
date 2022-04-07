import { UseEffectStudy } from "./components/useEffect";
import { FilmesEmCartaz } from "./components/RequisicaoGET";
import { FilmesEmCartazEASY } from "./components/Req_asyn_await"
import { JsonPlaceHolder } from "./components/JSONpholder";
import { EnviandoPOST } from "./components/enviando_Req";
import { api } from "./api";
import { ReducerLesson } from "./components/useReducer";
import { PeopleList } from "./components/peopleList";

function App() {
  // a requisição a seguir é da aula EnviandoPOST
  const addPOST = async (title: string, body: string) => {
    let json = await api.addNewPost(title, body, 1)

    if (json.id){
        alert('POST realizado com sucesso! :D')
    } else{
        alert('erro ao enviar dados')
    }
} 

  return (
    <div>
      {/*Cada componente é uma aula :D*/}
      <UseEffectStudy />

      <FilmesEmCartaz />

      <FilmesEmCartazEASY />

      <JsonPlaceHolder />

      <EnviandoPOST onAdd={addPOST}/> {/*quando for receber a prop colocar o nome dela, nesse caso "onAdd" */}

      <ReducerLesson />

      <PeopleList />
    </div>
  );
}

export default App;

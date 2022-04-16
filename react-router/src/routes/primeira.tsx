// ORGANIZANDO ROTAS EM ARQUIVOS SEPARADOS - DUAS FORMAS DE FAZER:

import { Routes, Route, useRoutes } from "react-router-dom";
import { Home } from "./../pages/home/home";
import { About } from "./../pages/about/about";
import { AboutProgramacao } from "./../pages/about/aboutProgramacao";
import { AboutSonhos } from "./../pages/about/aboutSonhos";
import { NoteFound } from "./../pages/noteFound";

export const PrimeiraRotaOrg = () => {
    
    return(
        /*
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/sobre" element={<About />}/>
            <Route path="/sobre/sonhos" element={<AboutSonhos />}/>
            <Route path="/sobre/programacao" element={<AboutProgramacao />}/>
            <Route path="*" element={<NoteFound />} />
        </Routes>
        */

        // É IGUAL A:
        useRoutes([
            {path:"/", element:<Home />},
            {path:"/sobre", element:<About/>},
            {path:"/sobre/sonhos", element:<AboutSonhos/>},
            {path:'/sobre/programacao', element:<AboutProgramacao />},
            {path:'*', element:<NoteFound />}
        ])
    );
}
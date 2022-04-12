// ROUTES E ROUTE => faz referência dos locais que quero ir path + element

import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/home/home";
import { About } from "../../pages/about/about";
import { AboutProgramacao } from "../../pages/about/aboutProgramacao";
import { AboutSonhos } from "../../pages/about/aboutSonhos";
import { NoteFound } from "../../pages/noteFound";

export const CriandoRota = () => {
    return(
        <div className='p-8 text-red-600'>
            <header>
                <h1 className='font-black'>Criando primeira Rota</h1>
            </header>
            <div className='py-5'>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/sobre" element={<About />}/>
                    <Route path="/sobre/sonhos" element={<AboutSonhos />}/>
                    <Route path="/sobre/programacao" element={<AboutProgramacao />}/>
                    <Route path="*" element={<NoteFound />} />
                </Routes>
            </div>
            <footer>
                todos os direitos reservados.
            </footer>
        </div>
    );
}
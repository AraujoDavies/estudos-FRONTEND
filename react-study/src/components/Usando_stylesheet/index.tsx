import './botao.css'

export const Btnstylesheet = () => {
    return (
        <div className='stsquare'>
            <button className='stbotao'> Botão qualquer </button>

            <p className='stlegend'> Legenda </p>
        </div>
        //Dessa maneira as classes css podem conflitar ao compilar - melhor usar css module
    )
}
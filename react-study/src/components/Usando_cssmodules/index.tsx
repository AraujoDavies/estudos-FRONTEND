import style from './style.module.css';

export const Btnmodules = () => {
    return (
        <div className={style.stsquare}>
            <button className={style.stbotao}>Botão estilizado em modules</button>

            <p className={style.stlegend}> Legnda </p>
        </div>
    )
}
//comunicação entre COMPONENTES
type Props = {
    text: string;
    clickFn: () => void;
}
export const Comms = ({text, clickFn}: Props) => {
    return <button onClick={clickFn}>{text}</button>
}
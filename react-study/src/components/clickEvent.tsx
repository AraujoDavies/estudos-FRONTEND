export const ClickEvent = () => {
    function click(){
        alert('clicou no botão!');
    }
    return (
        <button onClick = {click}>Clique Aqui</button>
    )
};


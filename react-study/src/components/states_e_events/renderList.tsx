//renderizando listas...

export const List = () => {
    let list = [
        {name: 'Davies', age: 24},
        {name: 'Zilo', age: 50},
        {name: 'Sirlei', age: 40},
        {name: 'Toia', age: 22},
        {name: 'Alice', age: 80}
    ]

    return(    
        <div>
            <h2>Lista de Presença</h2>
            <ul>
                {list.map((item, index)=>{
                    return <li key={index}>{item.name.toUpperCase()} - {item.age} Anos</li>
                })//é necessário usar o Key para ajudar na identificação do item
            }
                
            </ul>
        </div>
    )
}
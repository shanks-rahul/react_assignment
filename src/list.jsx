function List(props){

    const propsItem = props.items.map((item) => 
        <li key={item}>{item}</li>
    )
    return <ul>{propsItem}</ul>
}

export default List;
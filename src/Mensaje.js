
const Mensaje = (props) =>{
    const colors = props.color
    return (
        <h1 style={{colors}}> {props.message}</h1>
    )
}

export default Mensaje
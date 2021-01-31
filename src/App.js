import './App.css';

import Mensaje from './Mensaje'

const Description = () =>{
    return <p>Esta es la app del Bootcamp</p>
}
const App = () => {

    return (
        <div className="App">
            <Mensaje color='green' message='estamos trabajando '/>
            <Mensaje color='red' message='en un curso  '/>
            <Mensaje color='blue' message='de react ' />
            <Description/>
        </div>
    );
}

export default App;

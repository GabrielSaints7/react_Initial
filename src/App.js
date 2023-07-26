import { useState } from "react";
import './style.css'

const App = () => {

    const [usuario, setUsuario] = useState('');
    const [usuarios, setUsuarios] = useState(["Paulo", "João", "José"]);

    const handleAddUser = () => {
        setUsuarios([...usuarios,usuario])
        setUsuario("")
    }

    return (
        <div className="App">
            <h1>Hello DIO</h1>
            <div>
                <input value={usuario} onChange={(event) => setUsuario(event.target.value)} />
                <button onClick={handleAddUser}>Adicionar</button>
            </div>
            <hr />
            {usuarios.map((item) =>
                <p>{item}</p>
            )}

        </div>
    )
}

export default App;
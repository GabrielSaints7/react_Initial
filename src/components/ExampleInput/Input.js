import react, { useState } from 'react'

const [usuario, setUsuario] = useState('')
const [usuarios, setUsuarios] = useState(["Paulo", "João", "José"])

const Input = () => {

    return (
        <div>

            <h1>Hello DIO</h1>
            <div>
                <input value={usuario} onChangeText={(event) => setUsuario(event.target.value)} />
                <button>Adicionar</button>
            </div>
            <hr />
            {usuarios.map((item) => {
                <p>{item}</p>
            })}

        </div>
    )
}

export default Input
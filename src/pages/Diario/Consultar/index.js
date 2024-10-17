import axios from 'axios'

import { useEffect, useState } from 'react'
import './index.scss'
import { Link, useNavigate } from 'react-router-dom';



export default function Consultar() {    
    const [lista, setLista] = useState([]);

    const navigate = useNavigate();
    
    useEffect(() => {
        buscar()
    }, [])

    async function buscar() {
        let resp = await axios.get('http://localhost:3010/diario');

        setLista(resp.data);
    }

    async function excluir(id) {
        await axios.delete('http://localhost:3010/diario/' + id);
        alert('Registro excluído');

        await buscar();
    }


    return (
        <div className='pagina-ln-consultar'>
            <Link to='/diario'> Voltar</Link>

            <h1> Diário </h1>

            <h1> Anotações no Diário </h1>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Texto</th>
                        <th>Data</th>
                        <th>Autor</th>
                    </tr>
                </thead>

                <tbody>

                    {lista.map(item => 
                        <tr>
                            <td>{item.idAnotacao}</td>
                            <td>{item.textoAnotacao}</td>
                            <td>{new Date(item.dataAnotacao).toLocaleDateString()}</td>
                            <td>{item.autor}</td>
                            <td>
                                <button onClick={() => navigate('/diario/inserir/' + item.idAnotacao) }>Alterar</button>
                            </td>
                            <td>
                                <button onClick={() => excluir(item.idAnotacao)}>Excluir</button>
                            </td>
                        </tr>
                    )}
                        
                </tbody>
            </table>


        </div>
    )
}
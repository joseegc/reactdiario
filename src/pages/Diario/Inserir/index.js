import './index.scss';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


export default function Inserir() {
    const [textoAnotacao, setTextoAnotacao] = useState('');
    const [dataAnotacao, setDataAnotacao] = useState('');
    const [autor, setAutor] = useState(0);

    const { id } = useParams();
    
    
    // funcao que executa assim que a tela carrega
    useEffect(() => {
        if (id != undefined) {
            buscarPorId();
        }
    }, [])


    async function buscarPorId() {
        let resp = await axios.get('http://localhost:3010/diario/' + id);

        setTextoAnotacao(resp.data.textoAnotacao);
        setDataAnotacao(resp.data.dataAnotacao.substr(0, 10));
        setAutor(resp.data.autor);
        
    }
    

    async function salvar() {
        let body = {
            "texto": textoAnotacao,
            "data": dataAnotacao,
            "idAutor": autor
        }


        if (id == undefined) {
            let resp = await axios.post('http://localhost:3010/diario', body);
            alert('Novo registro inserido: ' + resp.data.novoId);
        }
        else {
            let resp = await axios.put('http://localhost:3010/diario/' + id, body);
            alert('Registro alterado');
        }
    }


    return (
        <div className='pagina-ln-inserir'>
                        <Link to='/diario'> Voltar</Link>

            <h1> Diário </h1>

            <h1>{id == undefined ? 'Inserir' : 'Alterar'}</h1>
            <div className='form'>
                <div>
                    <label>Texto</label>
                    <input type='text' value={textoAnotacao} onChange={e => setTextoAnotacao(e.target.value)} />
                </div>
               
                <div>
                    <label>Data da Anotação</label>
                    <input type='date' value={dataAnotacao} onChange={e => setDataAnotacao(e.target.value)} />
                </div>
                <div>
                    <label>Autor</label>
                    <input type='number' value={autor} onChange={e => setAutor(e.target.value)}  />
                </div>

                <div>
                    <button onClick={salvar}> {id == undefined ? 'Salvar' : 'Alterar'} </button>
                </div>
            </div>
        </div>
    )
}
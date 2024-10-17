import './index.scss'
import axios from 'axios'

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Diario() {
    return (
        <div className='pagina-lista-negra'>
            
            <h1> Diário </h1>

            <Link to='/diario/inserir'> Inserir</Link>
            <Link to='/diario/consultar'> Consultar</Link>           

        </div>
    )
}
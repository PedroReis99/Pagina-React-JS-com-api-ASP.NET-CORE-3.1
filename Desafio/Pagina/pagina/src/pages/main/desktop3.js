import React, { Components } from 'react';
import Title from '../../componentes/Titulos/TituloDesktop3';//Componente
import styled from 'styled-components';
import {CloudUpload} from '@styled-icons/material-rounded/CloudUpload';
import {Link, BrowserRouter} from 'react-router-dom';


const IconCloud = styled(CloudUpload)`
width: 130px;
height: 130px;
color: rgb(105,105,105);
margin-top: 60px;
`

const Upload = () => (

    <div clasName="Div-Geral">
        <Title />
        <div className="Lobby-Upload">
            <button id="enviar">enviar</button>
                <div className="Div-Upload">
                    <center>
                        <BrowserRouter>
                            <Link>
                                <IconCloud />
                            </Link>
                        </BrowserRouter>
                        <h4>Arraste um arquivo ou <a href="#">clique aqui</a></h4>
                        <h4>para enviar um arquivo</h4>
                    </center>
                </div>
            </div>
    </div>
);

export default Upload;
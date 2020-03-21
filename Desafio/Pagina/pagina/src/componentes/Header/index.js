import React from 'react';
import styled from 'styled-components';
import {Link, BrowserRouter, Switch, Route} from 'react-router-dom';
import {CloudUpload} from '@styled-icons/material-rounded/CloudUpload';
import {ListAlt} from '@styled-icons/material-twotone/ListAlt';
import Main from '../../pages/main/index';
import Rota from '../../pages/main/desktop2';

//Color: rg(255,255,255); Deixa o icone com a cor branca
//Declarei uma constante para o icone, nela declaro o tamanho, largura, cor distancia das margens, etc...
    const IconUpload = styled(CloudUpload)`
        width: 35px;
        height: 35px;
        color rgb(255,255,255);
        margin-top: 5px;
        margin-left:20px;
    `

    const IconList = styled(ListAlt)`
        width: 35px;
        height: 35px;
        color rgb(255,255,255);
        margin-left:20px;
    `

const Header = () => (

    <div className="Div-lateral">
        <button id="btn1" />
        <Switch>
            <Route exact path="/ListaProdutos" component={Main}/>
            <Route exact path="/ImportacaoProdutos" component={Rota}/>
        </Switch>
            <BrowserRouter>
                <Link to="/ListaProdutos">
                    <IconList />
                </Link>
            </BrowserRouter>
            <BrowserRouter>
                <Link to="/ImportacaoProdutos">
                    <IconUpload />
                </Link>
        </BrowserRouter>
    </div>
);

export default Header;
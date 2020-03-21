import React from 'react';
import "./Styles.css";//Estilos Css
import "./css/FlexDiv.css";//Estilos Css
import './css/Lateral.css';//Estilos Css
import './css/Titulo.css';//Estilo css
import './css/Table.css';//Estilo css
import './css/Desktop2.css';//Estilo css
import './css/Desktop3.css';//Estilo css
import Header from './componentes/Header/index';//Componente
import Main from './pages/main/index';//<Main />
import Rota from './pages/main/desktop2';//Pagina Desktop2
import Upload from './pages/main/desktop3';//Pagina Desktop3


function App() {
  return (
    <div className="Flex-div">
        <Header />
    </div>
  );
}

export default App;

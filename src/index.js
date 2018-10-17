import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Visualizacao from './paginas/visualizacao';
import TableStars from './componentes/tabelaStars'

ReactDOM.render(
<BrowserRouter>
    <App>
        <Switch>
            <Route exact path="/empty" />
            <Route exact path="/consulta" component={TableStars} />
            <Route exact path="/" component={Visualizacao} />
        </Switch>
    </App> 
</BrowserRouter>
, document.getElementById('root'))


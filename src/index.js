import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Switch, Route, BrowserRouter } from "react-router-dom";

import TableStars from './componentes/tabelaStars'


ReactDOM.render(
<BrowserRouter>
    <App>
        <Switch>
        <Route exact path="/" component={TableStars} />
        </Switch> 
    </App> 
</BrowserRouter>
, document.getElementById('root'))


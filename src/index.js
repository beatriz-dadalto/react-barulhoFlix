import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

// Colocar algo legal na página 404 (jogo da ImersaoGameDev ou Flappy Bird do Mario)
// https://www.youtube.com/watch?v=jOAU81jdi-c&list=PLTcmLKdIkOWmeNferJ292VYKBXydGeDej
function Pagina404() {
  return <div>Página 404</div>;
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" exact component={CadastroVideo} />
      <Route path="/cadastro/categoria" exact component={CadastroCategoria} />
      <Route path="/" component={Home} exact />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);

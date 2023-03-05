import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import Login from "pages/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UsuarioProvider } from "common/context/Usuario";
import { CarrinhoProvider } from "common/context/Carrinho";
import { PagamentoProvider } from "common/context/Pagamento";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {/*UsuarioProvider está provendo o contexto para a rota de Login, Feira e Carrinho.
          Não é uma boa prática abrir dois providers de um mesmo contexto. Isso pode gerar incosistência nas informações passadas pelo contexto*/}
        <UsuarioProvider>
          <Route exact path="/">
            <Login />
          </Route>
          {/*O contexto de carrinho engloba as rotas de feira e carrinho. Também recebe informações dos contextos de Usuário e Pagamento.  */}
          <CarrinhoProvider>
            {/*O contexto de pagamento engloba as rotas de feira e carrinho, e fornece variáveis e método de tipo de pagamento*/}
            <PagamentoProvider>
              <Route path="/feira">
                <Feira />
              </Route>
              <Route path="/carrinho">
                <Carrinho />
              </Route>
            </PagamentoProvider>
          </CarrinhoProvider>
        </UsuarioProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

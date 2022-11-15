import "./App.css";
import Layout from "./layout/Layout";
import { Route , Routes } from 'react-router-dom'

import Organizacoes from "./pages/Organizacoes";
import Voluntariados from "./pages/Voluntariados";
import Perfil from "./pages/Perfil";

function App() {

    return (
        <div>
            <Routes>
                <Route path="/Organizacoes" component={Organizacoes} />
                <Route path="/Voluntariados" component={Voluntariados} />
            </Routes>
            <Layout>
            </Layout>
        </div>
    );
}

export default App;

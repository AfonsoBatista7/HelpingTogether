import "./App.css";
import Layout from "./Layout/Layout";
import BoxVoluntariados from "./components/Box/BoxVoluntariados";
import BoxOrganizations from "./components/Box/BoxOrganizations";

import image from "./images/teste.jpg"

function App() {
    return (
        <div>
            <Layout>
                <div
                    style={{
                        minHeight: "72vh",
                    }}
                >

                    

                    <BoxOrganizations image={image} name="Ajudar Antilopes" desc="Os Antilopes são uma especie muito importante para a cadeia alimentar dos Leões temos que os salvar pois" getNumVoluntariados={1} />
                </div>
            </Layout>
        </div>
    );
}

export default App;

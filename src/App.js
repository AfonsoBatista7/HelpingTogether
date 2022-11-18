import "./App.css";
import Layout from "./Layout/Layout";
import BoxVoluntariados from "./components/Box/BoxVoluntariados";

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
                    <BoxVoluntariados image={image} name="Ajudar Antilopes" desc="Os Antolepes são uma especie muito importante para a cadeia alimentar dos Leões temos que os salvar" rating={4} />
                </div>
            </Layout>
        </div>
    );
}

export default App;

import { CardContent } from "@mui/material";
import "./App.css";
import BoxOrganization from "./components/StatsShowers/Box/BoxOrganization";
import BoxVoluntariado from "./components/StatsShowers/Box/BoxVoluntariado";
import MiniBoxCandidate from "./components/StatsShowers/Box/MiniBoxCandidate";
import MiniBoxVoluntariado from "./components/StatsShowers/Box/MiniBoxVoluntariado";
import CardComment from "./components/StatsShowers/Card/CardComment";
import Layout from "./Layout/Layout";

function App() {

    return (
        <div>
            <Layout>
                <div
                    style={{
                        minHeight: "66.6vh",
                    }}
                >







                    /*FOR TESTING ALL BOXES AND CARDS*/
                    {/* <CardComment name="Afonso" image="/afonso.gif" rating={5} comment="Adorei ajudar os animais! especialmente os Hamsters... até adotei um! Adorei mesmo foi uma boa experiência."/> */}
                    {/* <BoxVoluntariado image="/teste.jpg" name="Vamos salvar Antilopes! D:" desc="Porfavor!!! eles estão a morrer!! temos que os salvar... não têm pena!? olhem para a carinha linda dele a pedir ajuda :( pls..." rating={5}/> */}
                    {/* <BoxOrganization image="/afonso.gif" name="Salvemos os Animais!" getNumVoluntariados={76} desc="Esta organização tem como objetivo salvar o maior número de animais possível! Desde Antilopes a Hamsters! :D"/> */}
                    {/* <MiniBoxVoluntariado name="Bora Salvar Antilopes! (pls)" image="/teste.jpg" desc="Manos bora salvar antilopes porfavor eles são bué fofos e agora, infelizmente, estão em vias de extinção :("/> */}
                    {/* <MiniBoxCandidate image="/afonso.gif" name="Afonso" rating={4}/> */}

                </div>
            </Layout>
        </div>
    );
}

export default App;

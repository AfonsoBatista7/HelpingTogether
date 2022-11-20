import "./App.css";
import Layout from "./Layout/Layout";
import imageUser from "./images/afonso.gif";
import BoxVoluntariado from "./components/StatsShowers/Box/BoxVoluntariado";
import BoxOrganization from "./components/StatsShowers/Box/BoxOrganization";

import image from "./images/teste.jpg"
import CardComment from "./components/StatsShowers/Card/CardComment";

function App() {
    return (
        <div>
            <Layout>
                <div
                    style={{
                        minHeight: "72vh",
                    }}
                >

                   <CardComment name="Afonso" image={imageUser} rating={2} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra tempus nisl, id tincidunt felis consectetur quis. Aliquam eu fringilla diam, nec aliquam est. Aenean fermentum lorem eu ligula viverra facilisis. Proin a dolor quis dolor ullamcorper imperdiet. Aenean bibendum lacus et mi tincidunt porttitor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec euismod facilisis nisi ac suscipit. Proin convallis nibh sit amet nunc finibus, in cursus sem porttitor. Duis nunc tellus, auctor vulputate accumsan vel, mattis ut mi. Aenean elementum diam ac convallis congue. Ut vel enim viverra, luctus neque a, volutpat erat. Aenean."></CardComment> 

                    {/* <BoxOrganization image={image} name="Ajudar Antilopes" desc="Os Antilopes são uma especie muito importante para a cadeia alimentar dos Leões temos que os salvar pois" getNumVoluntariados={1} /> */}
                </div>
            </Layout>
        </div>
    );
}

export default App;

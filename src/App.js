import "./App.css";
import MiniBoxVoluntariado from "./components/StatsShowers/Box/MiniBoxVoluntariado";
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
                
                   <MiniBoxVoluntariado name="Ajudar Antilopes!" image="/teste.jpg" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet ligula ligula. Praesent at ullamcorper dolor, vulputate blandit lorem. Phasellus consequat eget turpis nec dignissim. Proin egestas tellus nibh, a lobortis augue fermentum et. Sed convallis augue ac iaculis dapibus. Pellentesque posuere mauris bibendum mollis pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas bibendum convallis consectetur. Phasellus sed erat nec metus consectetur tincidunt. Sed lobortis nulla dictum ante venenatis, at aliquam lectus auctor. Cras mollis tempus urna, quis faucibus neque bibendum eu. Praesent congue porttitor arcu vitae dignissim. Pellentesque vel dolor interdum."/>


                </div>
            </Layout>
        </div>
    );
}

export default App;

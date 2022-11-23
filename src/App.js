import { CardContent } from "@mui/material";
import "./App.css";
import Home from "./components/Home/Home";
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
                <Home/>
            </Layout>
        </div>
    );
}

export default App;

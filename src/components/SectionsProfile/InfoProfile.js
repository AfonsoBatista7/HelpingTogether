import { Title } from "@mui/icons-material";
import style from "./Profiles.module.css"
import image from "../../images/people/Maria.jpg";

import { Grid, Typography, Container, Avatar , Stack} from "@mui/material";
import { width } from "@mui/system";
import { blue } from "@mui/material/colors";

function InfoProfile(props) {
  return (
    <div style={{alignItems:'left'}}>
     
          <Avatar
            src={image}
            style={{ alignSelf: 'right' }}
            sx={{ width: 200, height: 200 }}
          />
          <Typography style={{
            fontWeight: 700,
            fontSize: 30,
            color: '#2E3B55',
            textTransform: "uppercase",
            textAlign: 'left'
          }}>Maria</Typography>

          <Typography style={{
            fontWeight: 700,
            fontSize: 30,
            color: '#2E3B55',
            textTransform: "uppercase",
            textAlign: 'left'
          }}>Leal</Typography>
     

    </div>
  );
}

export default InfoProfile

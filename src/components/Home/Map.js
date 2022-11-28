import { React, useState} from "react";
import { Box } from "@mui/material";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import ptJson from "./db3_Portugal.json";
import { Link } from 'react-router-dom'
import style from "./home.module.css";


export default function Map() {

  const defaultDistrict = "escolhe um distrito";

  const [mouseHoverDistrict, setMouseHoverDistrict] = useState(defaultDistrict)

  const onMouseEnterDistrict = (districtName) => {
    setMouseHoverDistrict(districtName)
}
const onMouseLeaveDistrict = () => {
    setMouseHoverDistrict(defaultDistrict)
}

  return (
    <div style={{maxHeight: "70vh"}}>
      <div
          style={{
              display: "flex",
              justifyContent: "flex-end",
              fontSize: "60px",
              top:"8vh",
              right: "5vw"
          }}
          className={style.subtitle}
      >
        AJUDA ONDE QUISERES
      </div>
      <div
          style={{
              display: "flex",
              justifyContent: "flex-end",
              fontSize: "30px",
              top:"15vh",
              right: "15vw"
          }}
          className={style.sloganSubtitle}
      >
        Encontra voluntaridos perto de ti!
      </div>
      <div
          style={{
              display: "flex",
              justifyContent: "center",
              top:"28vh",
              left: "19vw",
              textTransform: "uppercase",
              minHeight: "70px",
              fontSize: "50px",
          }}
          className={style.sloganSubtitle}
     >
          {mouseHoverDistrict}
      </div>
      <div style={{
          position:"relative",
          bottom: "18vh",
      }}>
            <Box
            sx={{
              width: 400,
              height: 800
            }}>
          <ComposableMap width={400} projectionConfig={{scale: 6000, center:[ -8.263495246008802, 39.774265042297884 ]}}>
            <Geographies geography={ptJson}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Link key={geo.rsmKey} to={"/Voluntariados?Região=" + geo.properties.region}
                    onMouseEnter={() => onMouseEnterDistrict(geo.properties.region)} 
                    onMouseLeave={() => onMouseLeaveDistrict()}>
                    <Geography geography={geo} 
                      style={{
                        default: { fill: "#344D67" },
                        hover: { fill: "#82C6C9" },
                        pressed: { fill: "#BDDCDE" },
                      }}
                      fillOpacity="0.7"
                      stroke="#FFF"
                      strokeWidth={1}/>
                    </Link>
                ))
              }
            </Geographies>
          </ComposableMap>
        </Box>
      </div>
      <img alt="beach" src="/beach.png"
        style={{
            display: "block",
            position: "relative",
            right: "10vw",
            bottom: "79vh",
            marginLeft: "auto",
            width: "40%",
        }}
      />
    </div>
  )
}

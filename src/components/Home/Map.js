import React from "react";
import { Box } from "@mui/material";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import ptJson from "./db3_Portugal.json";
import style from "./home.module.css";
import { ForkLeft } from "@mui/icons-material";

export default function Map() {

  const geoURL = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/portugal/portugal-districts.json";

  return (
    <div>
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
      <div>
        <Box
            sx={{
              width: 400,
              height: 800
            }}>
          <ComposableMap width={400} projectionConfig={{scale: 6000, center:[ -8.263495246008802, 39.774265042297884 ]}}>
            <Geographies geography={ptJson}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo} 
                    fill="#344d67"
                    fillOpacity="0.8"
                    stroke="#FFF"
                    strokeWidth={1}/>
                ))
              }
            </Geographies>
          </ComposableMap>
        </Box>
      </div>
    </div>
  )
}

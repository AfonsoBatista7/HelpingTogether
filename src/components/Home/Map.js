import React from "react";
import { Box } from "@mui/material";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import ptJson from "./db3_Portugal.json";
import { Link } from 'react-router-dom'

export default function Map() {

  const geoURL = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/portugal/portugal-districts.json";

  return (
    <Box
        sx={{
          width: 400,
          height: 800
        }}>
      <ComposableMap width={400} projectionConfig={{scale: 6000, center:[ -8.263495246008802, 39.774265042297884 ]}}>
        <Geographies geography={ptJson}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Link to="/Voluntariados"> {/* TODO adicionar filtro */}
                <Geography key={geo.rsmKey} geography={geo} 
                  style={{
                    default: { fill: "#00ABB3" },
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
  )
}

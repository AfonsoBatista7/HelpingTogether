import { React, useState} from "react";
import { Box, Typography } from "@mui/material";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import ptJson from "./db3_Portugal.json";
import { Link } from 'react-router-dom'

export default function Map() {
  const [mouseHoverDistrict, setMouseHoverDistrict] = useState("")

  const onMouseEnterDistrict = (districtName) => {
    setMouseHoverDistrict(districtName)
}
const onMouseLeaveDistrict = () => {
    setMouseHoverDistrict("")
}

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
              <Link key={geo.rsmKey} to={"/Voluntariados?Região=" + geo.properties.region}
                onMouseEnter={() => onMouseEnterDistrict(geo.properties.region)} 
                onMouseLeave={() => onMouseLeaveDistrict()}>
                <Geography geography={geo} 
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
      <Typography variant="h5" color="#344d67" sx={{fontWeight: 'bold'}}>
          {mouseHoverDistrict}
      </Typography>
    </Box>
  )
}

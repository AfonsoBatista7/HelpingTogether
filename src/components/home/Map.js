import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import ptJson from "./db3_Portugal.json";

export default function Map() {

  const geoURL = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/portugal/portugal-districts.json";

  return (
    <ComposableMap width={1200} projectionConfig={{scale: 6000, center:[ -8.263495246008802, 39.774265042297884 ]}}>
      <Geographies geography={ptJson}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} 
              fill="#5FD"
              fillOpacity="0.5"
              stroke="#FFF"
              strokeWidth={1}/>
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}

import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import ptJson from "../../images/db3_Portugal.json";

export default function Map() {
  return (
    <ComposableMap>
      <Geographies geography={ptJson}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}

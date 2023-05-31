import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [28.0, 20.0, 0],
        center: [-5, -3],
        scale: 670
      }}
      style={{width: "1300px", height: "100%", position: "relative", zIndex: "999"}}
    >
      <Geographies
        geography="/features.json"
        fill="#0f4b7c"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-47.4559, -23.5022]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#fff",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#fff">
          {"Sorocaba"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;

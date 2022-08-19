import React from "react";
import map from "./map.module.sass";
import { Placemark } from "@pbe/react-yandex-maps";
import imgg from "./1.jpg";
// import { useEffect } from "react";
// import { createPortal } from "react-dom";
const MapBalloon = ({ name, point, areas, photos }) => {
  const [point_, point_2] = point.split(" ");
  const point_1 = point_.slice(0, point_.length - 1);
  console.log(photos[0].name);

  return (
    <div>
      {/* <img
        src={require(`../../../../backend/uploads/images/${photos[0].name}`)}
      ></img> */}
      <Placemark
        options={{ iconColor: "green" }}
        geometry={[+point_1, +point_2]}
        properties={{
          balloonContent: `
            <h2 >${name}</h2>
            <h3>${areas.name}</h3>
            <img class=${map.image} src="http://localhost:3030/${photos[0].name}" alt=${name}>
            <a class=${map.ddd} href="">Подробнее</a>`,
        }}
      />
    </div>
  );
};

export default MapBalloon;

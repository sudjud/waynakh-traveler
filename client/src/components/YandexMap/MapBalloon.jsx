import React from "react";
import card from '../Cards/PlaceCards/card.module.sass'
import map from "./map.module.sass";
import { Placemark } from "@pbe/react-yandex-maps";
import imgg from "./1.jpg";
import SCard from "../Cards/PlaceCards/SCard";
// import { useEffect } from "react";
// import { createPortal } from "react-dom";
const MapBalloon = ({ name, point, areas, photos }) => {
  const [point_, point_2] = point.split(" ");
  const point_1 = point_.slice(0, point_.length - 1);

  function myFunction(e) {
    console.log(e.target);
  } 

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
          <div class=${card.s}>
          <div class=${card.s__image}>
            <img src='http://localhost:3030/${photos[0].name}' alt="" />
          </div>
          <div class=${card.s__name}>
            ${name}
          </div>
          <div class=${card.s__area}>
            ${areas.name}
          </div>
          <div class=${card.s__buttons}>
            <button onclick='location.href="http://localhost:3000/"' class=${card.s__viewAll}>Подробнее</button>
          </div>
        </div>`,
        }}
      />
    </div>
  );
};

export default MapBalloon;

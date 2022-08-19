import React from "react";
import { YMaps, Map, ListBox, SearchControl } from "@pbe/react-yandex-maps";
import Footer from "../Footer";
import { useSelector } from "react-redux";
import MapBalloon from "./MapBalloon";
import MapBalloonnn from "./MapBalloonnn";

const YandexMap = () => {
  const places = useSelector((state) => state.place.places);

  // console.log(places[0]);
  //   const han = () => {
  //     console.log("РАБОТАЕТ");
  //   };
  //   clickHandler={() => {
  //     console.log("РАБОТАЕТ");
  //   }}
  return (
    <div>
      <YMaps>
        <Map
          defaultState={{
            center: [43.16689676691209, 44.80166469187365],
            zoom: 10,
          }}
          width={"100%"}
          height={"70vh"}
        >
          <SearchControl
            options={{
              float: "right",
            }}
          />
          <ListBox
            data={{
              content: "Список отметок",
            }}
          >
            {places.map((item) => {
              return <MapBalloonnn name={item.name} />;
            })}
          </ListBox>
          {places.map((item) => {
            // console.log(item.photos[0].name);
            return (
              <MapBalloon
                point={item.point}
                name={item.name}
                areas={item.areas}
                photos={item.photos}
              />
            );
          })}
        </Map>
      </YMaps>
      {/* <Footer /> */}
    </div>
  );
};

export default YandexMap;

import React from "react";
import {
  YMaps,
  Map,
  Placemark,
  ListBox,
  ListBoxItem,
  SearchControl,
} from "@pbe/react-yandex-maps";
import Footer from "../Footer";

const YandexMap = () => {
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
            center: [42.80941197802916, 44.94017551330519],
            zoom: 17,
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
              content: "Select city",
            }}
          >
            <ListBoxItem
              data={{
                content: "Таргим",
              }}
            />
            <ListBoxItem
              data={{
                content: "Эрзи",
              }}
            />
            <ListBoxItem
              data={{
                content: "Тхаба-Ерды",
              }}
            />
            <ListBoxItem
              data={{
                content: "Маьт-Сели",
              }}
            />
            <ListBoxItem
              data={{
                content: "Шаройскй башенный комплекс",
              }}
            />
            <ListBoxItem
              data={{
                content: "Ушкалойские башни",
              }}
            />
          </ListBox>
          <Placemark
            geometry={[42.80941197802916, 44.94017551330519]}
            properties={{
              balloonContent: `
            <h2>Храм Тхаба-Ерды</h2>
            <div>Древнейший храм </div>
            <button clickHandler={han}>Перейти</button>`,
            }}
          />
          <Placemark geometry={[42.811804676132354, 44.93888805292685]} />
          <Placemark geometry={[42.803805352076246, 44.75950285913881]} />
          <Placemark geometry={[42.853273820724425, 44.71636531559617]} />
        </Map>
      </YMaps>
      <Footer />
    </div>
  );
};

export default YandexMap;

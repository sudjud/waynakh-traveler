import placeStyle from "./place.module.sass";
import { useNavigate, useParams } from "react-router-dom";
import PlaceMap from "../../components/YandexMap/PlaceMap";
import { useSelector } from "react-redux";
import { IoHomeOutline } from "react-icons/io5";
import SCard from "../../components/Cards/PlaceCards/SCard";

function PlacePage() {
  const { id } = useParams();
  const places = useSelector((state) => state.place.places);
  const place = places.find((item) => item._id === id);
  const loader = useSelector((state) => state.place.loader);
  const nearPlaces = places.filter((item) => {
    let [latitude, longitude] = place.point.split(", ");
    let [latitudeI, longitudeI] = item.point.split(", ");
    let calcedLatitude = Math.abs(+latitude - +latitudeI);
    let calcedLongitude = Math.abs(+longitude - +longitudeI);
    console.log(calcedLatitude, calcedLongitude)
    return (calcedLatitude < 0.151 && calcedLongitude < 0.151) && item._id !== place._id;
  });

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const navigate = useNavigate();
  if (place) {
    return (
      <div className={placeStyle.place}>
        <div
          style={{
            background: `url(http://localhost:3030/${
              place.photos[getRandomInt(place.photos.length)].name
            }) no-repeat center center`,
          }}
          className={placeStyle.place__main}
        >
          <div className="container">
            <div className={placeStyle.place__main_label}>
              <div className={placeStyle.place__categories}>
                {place.categories.map((item, idx, arr) =>
                  idx === arr.length - 1 ? (
                    <span
                      className="underline"
                      onClick={() => {
                        navigate(`/category/${item._id}`);
                      }}
                    >
                      {item.name}
                    </span>
                  ) : (
                    <div>
                      <span
                        className="underline"
                        onClick={() => {
                          navigate("/category/" + item._id);
                        }}
                      >
                        {item.name}
                      </span>
                      <div className={placeStyle.place__categories_andChar}>
                        &
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className={placeStyle.place__name}>{place.name}</div>
            </div>
          </div>
        </div>

        <div className={placeStyle.place__features}>
          <div className="container">
            <div className={placeStyle.place__area}>
              <IoHomeOutline
                style={{ cursor: "pointer" }}
                size={25}
                onClick={() => navigate("/")}
              />
              <span className={placeStyle.place__area_separator}>{">"}</span>
              <span
                onClick={() => {
                  navigate(`/area/${place.areas._id}`);
                }}
              >
                {place.areas.name}
              </span>
              <span className={placeStyle.place__area_separator}>{">"}</span>
              {place.name}
            </div>
            <div className={placeStyle.place__reactions}>
              <div className={placeStyle.place__reactions_like}>like</div>
              <div className={placeStyle.place__reactions_comment}>comment</div>
            </div>
          </div>
        </div>

        <div className={placeStyle.place__info}>
          <div>
            <div className={placeStyle.place__desc}>{place.description}</div>
            <div className={placeStyle.place__near}>
              <div className={placeStyle.place__subtitle}>Это рядом!</div>
              <div className={placeStyle.place__near_items}>
                {nearPlaces.map((item) => {
                  return <SCard key={item._id} id={item._id} />;
                })}
              </div>
            </div>
          </div>
          <div className={placeStyle.place__map}>
            <PlaceMap id={place._id} w="250px" h="350px" />
            <div className={placeStyle.place__map_area}>
              Район:
              <div className={placeStyle.place__map_area}>
                {place.areas.name}
              </div>
            </div>
          </div>
        </div>
        <div className={placeStyle.place_more}>
          <div className={placeStyle.place__subtitle}>Посмотрите еще</div>
        </div>
      </div>
    );
  }
}
export default PlacePage;

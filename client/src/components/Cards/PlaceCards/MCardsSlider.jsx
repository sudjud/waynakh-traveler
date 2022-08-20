import card from "./card.module.sass";
import MCard from "./MCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPlaces } from "../../../features/placeSlice";
import { motion } from "framer-motion";

function MCardSlider() {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.place.places);
  useEffect(() => {
    dispatch(fetchPlaces());
  }, [dispatch]);

  return (
    <div className={card.mSlider}>
      <img
        src={`http://localhost:3030/uploads/images/7689347649ushkaloy.jpg`}
        alt=""
      />
      {places.map((item) => {
        return (
          <MCard
            key={item._id}
            id={item._id}
            name={item.name}
            desc={item.description}
            author={item.author}
            likes={item.likes}
            comments={item.comments}
            photos={item.photos}
            area={item.areas}
          />
        );
      })}
    </div>
  );
}
export default MCardSlider;

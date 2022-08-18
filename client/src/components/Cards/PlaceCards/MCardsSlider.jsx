import card from './card.module.sass'
import MCard from "./MCard";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { fetchPlaces } from "../../../features/placeSlice";

function MCardSlider() {
  const dispatch = useDispatch();
  const places = useSelector(state => state.place.places);
  useEffect(() => {
    dispatch(fetchPlaces());
  }, [dispatch])

  return (
    <div className={card.mSlider}>
      {
        places.map(item => {
          return (
            <MCard 
              id={item._id}
              name={item.name}
              desc={item.description}
              author={item.author}
              likes={item.likes}
              comments={item.comments}
              photos={item.photos}
              area={item.areas}
            />
          )
        })
      }
    </div>
  )
};
export default MCardSlider;
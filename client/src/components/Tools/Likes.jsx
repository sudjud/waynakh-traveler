import card from '../Cards/PlaceCards/card.module.sass'
import { useDispatch, useSelector } from "react-redux";
import { postLikes } from "../../features/placeSlice";
import { BsHeartFill } from 'react-icons/bs';

const Likes = (props) => {
  const dispatch = useDispatch()
  const { id } = props;
  const likes = useSelector((state) => state.place.places.find(item => item._id === id).likes);
  const user = useSelector((state) => state.user.userId)
  const addLike = (id) => {
    dispatch(postLikes(id))
  }

  return (
    <>
      <div className={card.m__reactions_wrapper}>
        <div onClick={() => addLike(id)} className={card.m__toLike}>
        { likes.includes(user) ? <BsHeartFill className={card.m__heart} style={{color: 'red'}} />: <  BsHeartFill className={card.m__heart} style={{color: 'black'}} />}
        </div>
        <div className={card.m__likesCount}>{likes.length}</div>
      </div>
    </>
  );
};

export default Likes;

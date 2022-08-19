import card from './card.module.sass'
import { useSelector } from 'react-redux';

function SCard(props) {
  const { id } = props
  const cardItem = useSelector(state => state.place.places.find(item => item._id === id))

  if(card) {
    return (
      <div className={card.s}>
        <div className={card.s__image}>
          <img src={`http://localhost:3030/${cardItem.photos[0].name}`} alt="" />
        </div>
        <div className={card.s__name}>
          {cardItem.name}
        </div>
        <div className={card.s__area}>
          {cardItem.areas.name}
        </div>
        <div className={card.s__buttons}>
          <button className={card.s__viewAll}>Подробнее</button>
        </div>
      </div>
    )
  }
  
};
export default SCard;
import card from './card.module.sass'
import { BsShare } from 'react-icons'

function MCard(props) {
  const { id,
    name,
    area,
    desc,
    author,
    likes,
    comments,
    photos 
  } = props

  let images = photos.map(item => {
    return {
      url: `http://localhost:3030/uploads/image/${item.name}`
    }
  })

  return (
    <div className={card.m}>
      <div className={card.m__info}>
        <div className={card.m__name}>
          { name }
        </div>
        <div className={card.m__area}>
          { area.name }
        </div>
        <div className={card.m__desc}>
          { desc }
        </div>
        <div className={card.m__features}>
          <div className={card.m__author}>By { author.login }</div>
          <div className={card.m__reactions}>
            <div className={card.m__likes}>
              <div className={card.m__toLike}>
                LIKE
              </div>
              <div className={card.m__likesCount}>
                { likes.length }
              </div>
            </div>
            <div className={card.m__comments}>
              <div className={card.m__toComment}>
                COMMENT
              </div>
              <div className={card.m__commentsCount}>
                { comments.length }
              </div>
            </div>
          </div>
        </div>
        <div className={card.m__buttons}>
          <div className={card.m__share}>{ BsShare }</div>
          <button className={card.m__viewAll}>Подробнее</button>
        </div>
      </div>
      <div className={card.m__img}>
        <SimpleImageSlider
          width={100}
          height={250}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
    </div>
  )
};
export default MCard;
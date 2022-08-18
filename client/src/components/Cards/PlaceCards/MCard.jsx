import card from './card.module.sass'

function MCard(props) {
  const {  } = props

  return (
    <div className={card.m}>
      <div className={card.m__info}>
        <div className={card.m__name}>
          Ушкалойские башни
        </div>
        <div className={card.m__area}>
          Шатойский район
        </div>
        <div className={card.m__desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel rerum ad debitis delectus beatae minus non quisquam dignissimos maxime excepturi voluptates nobis iusto sed at animi ratione veniam, aperiam, vitae asperiores! Amet alias mollitia dolorum dicta ratione praesentium iusto sequi et dignissimos vitae illo, tenetur, laudantium, quia consequatur consequuntur excepturi sit quae optio asperiores aspernatur corporis magni accusantium?
        </div>
        <div className={card.m__features}>
          <div className={card.m__author}>By admin</div>
          <div className={card.m__reactions}></div>
        </div>
        <div className={card.m__buttons}>
          <div className={card.m__share}></div>
          <button className={card.m__viewAll}>Подробнее</button>
        </div>
      </div>
      <div className={card.m__img}>

      </div>
    </div>
  )
};
export default MCard;
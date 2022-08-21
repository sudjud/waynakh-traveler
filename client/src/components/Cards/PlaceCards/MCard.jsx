import card from "./card.module.sass";
import { motion } from "framer-motion";
import { BsShare } from "react-icons/bs";
import SimpleImageSlider from "react-simple-image-slider";
import { FaComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import Likes from '../../Tools/Likes';

function MCard(props) {
  const { id, name, area, desc, author, likes, comments, photos } = props;

  let images = photos.map((item) => {
    return {
      url: `http://localhost:3030/${item.name}`,
    };
  });

  return (
    <motion.div className={card.m}>
      <div className={card.m__info}>
        <div className={card.m__name}>
          { name }
        </div>
        <div className={card.m__area}>
          { area.name }
        </div>
        <div className={card.m__desc}>
          { desc.length > 220 ? desc.substring(0, 260) + '...' : desc }
        </div>
        <div className={card.m__features}>
          <div className={card.m__author}>By { author.login }</div>
          <div className={card.m__reactions}>
            <div className={card.m__reactions_wrapper}>
              <div className={card.m__toComment}>
                <FaComment />
              </div>
              <div className={card.m__commentsCount}>
                { comments.length }
              </div>
            </div>
            <div className={card.m__reactions_separator}></div>
            <Likes id={id}/>
          </div>
        </div>
        <div className={card.m__buttons}>
          <div className={card.m__share}>
            <BsShare />
          </div>
          <button className={card.m__viewAll}>Подробнее</button>
        </div>
      </div>
      <div className={card.m__img}>
        <SimpleImageSlider
          width={360}
          height={540}
          navSize={20}
          navStyle={2}
          images={images}
          showBullets={true}
          bgColor={"transparent"}
          showNavs={true}
        />
      </div>
    </motion.div>
  );
}
export default MCard;

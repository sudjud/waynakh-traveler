import FadeIn from '../../components/Blocks/FadeInBlock';
import PlacesBlock from '../../components/Blocks/PlacesBlock';
import TripsBlock from '../../components/Blocks/TripsBlock';
import Welcome from '../../components/Blocks/WelcomeBlock';
import TripCard from '../../components/Cards/TripCards/MTrip';
import main from './main.module.sass'

function MainPage() {

  return (
    <div className={main.main}>
      <Welcome />
      <div className={main.fadeInBlock}>
        <FadeIn />
      </div>
      <div className={main.placeBlock}>
        <PlacesBlock />
      </div>
      <div className={main.beforeTrip}></div>
      <TripCard />
    </div>
  )
};
export default MainPage;
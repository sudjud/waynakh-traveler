import PlacesBlock from '../../components/Blocks/PlacesBlock';
import main from './main.module.sass'

function MainPage() {

  return (
    <div className={main.main}>
      <PlacesBlock />
    </div>
  )
};
export default MainPage;
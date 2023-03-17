import HomeContainer from '../src/containers/HomeContainer'
import { CmpA } from './components/PropDrilling/CmpA';
import HeaderContainer, { } from './containers/HeaderContainer'
function App() {
  return (
    <div>
      <HeaderContainer />
      <HomeContainer />
      {/* <CmpA/> */}
    </div>
  );
}

export default App;

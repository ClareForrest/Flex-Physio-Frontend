import 'bootstrap/dist/css/bootstrap.min.css';
import { Template } from './components/template';
import { HomePage } from './components/homepage';
import { Authorisation} from './components/authorisation';
import { HomePageLoggedIn } from './components/homepageloggedin';
import { Profile } from './components/profile';


function App() {

  //Need to set up a switch:case statement here to switch between views

  return (
    <>
      <Template>
        {/* <HomePage></HomePage> */}
        {/* <Authorisation></Authorisation> */}
        {/* <HomePageLoggedIn></HomePageLoggedIn> */}
        <Profile></Profile>
      </Template>
    </>
  );
}

export default App;

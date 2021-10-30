import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import Home from "./Containers/Home/Home";
import ChangeLog from "./Containers/Changelog/ChangeLog";
import MiniGames from "./Containers/MiniGames/MiniGames";
/*import './App.css';*/
/*import './Style/Main.scss'*/

import './Style/Themes.scss'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {



    return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/changelog">
                    <ChangeLog/>
                </Route>
                <Route exact path="/mini-games">
                    <MiniGames/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;

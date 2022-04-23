import Header from './components/Header';
import SwipeButtons from './components/SwipeButtons';
import TinderCards from "./components/TinderCards";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Chats from "./components/Chats";
import ChatScreen from './components/ChatScreen';
import ProfileScreen from './components/ProfileScreen';
import UpdateProfile from "./components/UpdateProfile"
function App() {
  return (
    <div className="app">
        <Router>
         
            <Switch>
              <Route  exact path="/" >
                 <Header />
                 <TinderCards/>
                 <SwipeButtons/>
              </Route>

              <Route path="/chats"> 
                 <Header backButton ="/" />
                 <Chats/>
              </Route>
              <Route path="/chat/:person">
                 <Header backButton ="/chats" />
                   <ChatScreen/>
              </Route>

              <Route path="/profile">
                 <ProfileScreen/>
              </Route>

              <Route path="/update/:id">
                 <UpdateProfile/>
              </Route>

            </Switch>
        </Router>

      
           
    </div>
  );
}

export default App;

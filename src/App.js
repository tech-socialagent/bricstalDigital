import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home'
import Services from './Pages/Services'
import  ContactPage from './Pages/Contact'
import  Career  from './Pages/Career'
import  PrivacyPage  from './Pages/Privacy'
import  Terms  from './Pages/Terms'
import AboutPage from "./Pages/About";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          <Home />
        </Route>
        <Route path="/service">
          <Services />
        </Route>
        <Route path="/about" component={AboutPage} >
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/career">
          <Career />
        </Route>
        <Route path="/privacy">
          <PrivacyPage />
        </Route>
        <Route path="/term">
          <Terms />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

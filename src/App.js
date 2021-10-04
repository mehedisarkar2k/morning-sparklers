import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import News from "./components/News/News";
import NotFound from "./components/NotFound/NotFound";
import Review from "./components/Review/Review";
import Services from "./components/Services/Services";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/services">
            <Services />
          </Route>

          <Route exact path="/news">
            <News />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/enroll">
            <Review />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

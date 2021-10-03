import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Nav from "./Components/Navbar/Nav";
import NotFound from "./Components/NotFound/NotFound";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Container>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

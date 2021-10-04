import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/About/About";
import Courses from "./Components/Courses/Courses";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Nav from "./Components/Navbar/Nav";
import NotFound from "./Components/NotFound/NotFound";
import "./App.css";
import CourseDetails from "./Components/CourseDetails/CourseDetails";
import Contact from "./Components/Contact/Contact";

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
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/courses/:courseId">
              <CourseDetails />
            </Route>
            <Route path="/courses">
              <Courses />
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

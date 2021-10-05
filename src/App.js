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
import { createContext } from "react";
/*
<---------------------------- Using Context API ---------------------------->
*/
export const WishContext = createContext("wish");

function App() {
  /*
<---------------------------- Using Context API ---------------------------->
*/
  const wish = "Hope you will join us very soon !";
  return (
    <WishContext.Provider value={wish}>
      <div>
        <Router>
          <Nav />
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
          <Footer />
        </Router>
      </div>
    </WishContext.Provider>
  );
}

export default App;

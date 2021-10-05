import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import useCourses from "../../Hooks/useCourses";
import Search from "../SearchField/Search";
import Course from "./../Course/Course";
import "./home.css";

const Home = () => {
  /*
<---------------------------- Useing Custom Hoook ---------------------------->
*/
  const [courses] = useCourses();
  const [foundCourses, setFoundCourses] = useState([]);
  /*
<---------------------------- Filtering Data to New Array ---------------------------->
*/
  const homeCourses = courses.filter((course) => course.key <= 4);
  const imgSize = "homeImg";
  const handleSearch = (e) => {
    const SearchText = e.target.value;
    /*
<---------------------------- Filtering Data to New Array ---------------------------->
*/
    const matchedCourses = courses.filter((course) =>
      course.name.toLowerCase().includes(SearchText.toLowerCase())
    );
    setFoundCourses(matchedCourses);
  };
  console.log();
  return (
    <div>
      <div className="banner d-flex flex-column align-items-center justify-content-center">
        <h1 className="secondaryText mb-3">
          Learn more with, <span className="primaryText">Skill Up !</span>{" "}
        </h1>
        <Search handleSearch={handleSearch} />
      </div>
      {/*
<---------------------------- Conditional Rendering ---------------------------->
*/}
      <Container>
        {foundCourses.length !== courses.length && foundCourses.length !== 0 && (
          <div>
            <h2 className="primaryText mt-3">
              Number of Course Found: {foundCourses.length}
            </h2>
            <Row xs={1} sm={1} md={2} lg={3} className="g-3 mt-2">
              {foundCourses.map((course) => (
                <Course key={course.key} course={course} imgSize={imgSize} />
              ))}
            </Row>
          </div>
        )}
        <h2 className="mt-4 secondaryText">Our Popular Courses</h2>
        <Row xs={1} sm={1} md={2} lg={3} className="g-3 mt-3 mb-5">
          {homeCourses.map((course) => (
            <Course key={course.key} course={course} imgSize={imgSize} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;

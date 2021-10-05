import { useState } from "react";
import { Row } from "react-bootstrap";
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
      <Search handleSearch={handleSearch} />
      {/*
<---------------------------- Conditional Rendering ---------------------------->
*/}
      {foundCourses.length !== courses.length && foundCourses.length !== 0 && (
        <div>
          <h2 className="primaryText">
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
    </div>
  );
};

export default Home;

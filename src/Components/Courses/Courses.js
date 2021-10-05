import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import useCourses from "../../Hooks/useCourses";
import Search from "../SearchField/Search";
import Course from "./../Course/Course";
import "./courses.css";

const Courses = () => {
  /*
<---------------------------- Useing Custom Hoook ---------------------------->
*/
  const [courses] = useCourses();
  const [foundCourses, setFoundCourses] = useState([]);
  const imgSize = "coursesImg";
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
  return (
    <Container>
      <div>
        <Search handleSearch={handleSearch} />
        {/*
<----------------------------- Conditional Rendering ----------------------------->
*/}
        {foundCourses.length !== courses.length && foundCourses.length !== 0 ? (
          <div>
            <h2 className="primaryText">
              Number of Course Found: {foundCourses.length}
            </h2>
            <Row xs={1} sm={1} md={2} lg={3} className="g-3 mt-2 mb-5">
              {foundCourses.map((course) => (
                <Course key={course.key} course={course} imgSize={imgSize} />
              ))}
            </Row>
          </div>
        ) : (
          <div>
            <h2 className="mt-4 secondaryText">All Courses</h2>
            <Row xs={1} sm={1} md={2} lg={3} className="g-3 mt-3 mb-5">
              {courses.map((course) => (
                <Course key={course.key} course={course} imgSize={imgSize} />
              ))}
            </Row>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Courses;

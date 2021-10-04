import { Row } from "react-bootstrap";
import useCourses from "../../Hooks/useCourses";
import Course from "./../Course/Course";
import "./home.css";

const Home = () => {
  const [courses] = useCourses();
  const homeCourses = courses.filter((course) => course.key <= 4);
  const imgSize = "homeImg";
  return (
    <Row xs={1} sm={1} md={2} lg={2} className="g-3 min-vh-100 my-4">
      {homeCourses.map((course) => (
        <Course key={course.key} course={course} imgSize={imgSize} />
      ))}
    </Row>
  );
};

export default Home;
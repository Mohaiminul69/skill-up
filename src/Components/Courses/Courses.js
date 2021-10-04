import { Row } from "react-bootstrap";
import useCourses from "../../Hooks/useCourses";
import Course from "./../Course/Course";
import "./courses.css";

const Courses = () => {
  const [courses] = useCourses();
  const imgSize = "coursesImg";
  return (
    <div>
      <h2 className="mt-4">All Courses</h2>
      <Row xs={1} sm={1} md={2} lg={3} className="g-3 min-vh-100 my-4">
        {courses.map((course) => (
          <Course key={course.key} course={course} imgSize={imgSize} />
        ))}
      </Row>
    </div>
  );
};

export default Courses;

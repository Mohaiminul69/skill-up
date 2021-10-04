import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useCourses from "../../Hooks/useCourses";
import Course from "../Course/Course";
import "./about.css";

const About = () => {
  const [courses] = useCourses();
  const popularCourses = courses.filter((course) => course.popular === true);
  const imgSize = "aboutImg";

  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} lg={8}>
          <h1 className="mb-3">About</h1>
          <h4 className="mb-4">
            Get to know more about the team of
            <span className="primaryText"> Skill Up</span>. <br />
            Learn a little history of how, why and when the project started and
            how you can be a part of it.
          </h4>
          <h1 className="my-3">Team</h1>
          <h4 className="mb-4">
            <span className="primaryText"> Skill Up</span> is maintained by a
            team of developers and designers. <br /> We have a growing team and
            if you are interested in teaming up with us. And love to share your
            skills with others, we would love to hear from you.
          </h4>
          <h1 className="my-3">What we do</h1>
          <h4 className="mb-4">
            <span className="primaryText"> Skill Up</span> is teaching platform.{" "}
            <br />
            We are a group of developers and designers, who teamed up and
            started an online teaching platform. <br />
            Where we mainly teach programming ranging from basic to advanced.
          </h4>
          <h1 className="my-3">Contributors</h1>
          <h4 className="mb-4">
            We welcome community support with both feature and bug reporting.
            Please don't hesitate to jump in. Join our growing list of
            <span className="primaryText"> contributors</span>.
          </h4>
        </Col>
        <Col className="mb-2" xs={12} sm={12} lg={4}>
          <h1>Popular Courses</h1>
          <Row lg={1} className="g-3 min-vh-100 my-1">
            {popularCourses.map((course) => (
              <Course key={course.key} course={course} imgSize={imgSize} />
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

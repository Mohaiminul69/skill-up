import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./course.css";

const Course = (props) => {
  const { course, imgSize } = props;
  const { name, img, intructor, duration, courseFee, key } = course;
  return (
    <Col>
      <Card className="customCard">
        <Card.Img variant="top" className={`bg-warning ${imgSize}`} src={img} />
        <Card.Body>
          <h4 className="fw-bold secondaryText">{name}</h4>
          <table className="table fw-bold">
            <tbody>
              <tr>
                <td>Intructor:</td>
                <td>{intructor}</td>
              </tr>
              <tr>
                <td>Duration:</td>
                <td>{duration}</td>
              </tr>
              <tr>
                <td>Course Fee:</td>
                <td>
                  <span>BDT</span> {courseFee}
                </td>
              </tr>
            </tbody>
          </table>
          <Link to={`/courses/${key}`}>
            <button className="mt-2 btn btn-orange">View Details</button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Course;

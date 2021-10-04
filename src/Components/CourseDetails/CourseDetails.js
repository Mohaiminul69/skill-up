import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import DetailsView from "../DetailsView/DetailsView";

const CourseDetails = () => {
  const params = useParams();
  const { courseId } = params;
  const [courses, setCourse] = useState([]);
  useEffect(() => {
    fetch("../course.JSON")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);
  const course = courses.filter((course) => course.key === courseId);

  return (
    <Container className="d-flex justify-content-center">
      {course.map((courseProps) => (
        <DetailsView key={courseProps.key} courseProps={courseProps} />
      ))}
    </Container>
  );
};

export default CourseDetails;

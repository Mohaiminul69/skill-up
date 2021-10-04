import React from "react";
import { Card } from "react-bootstrap";

const DetailsView = (props) => {
  const { courseProps } = props;
  const { name, img, intructor, duration, courseFee, details } = courseProps;
  return (
    <Card className="customCard w-50 mb-4">
      <Card.Img className={`bg-warning`} variant="top" src={img} />
      <Card.Body>
        <h2 className="fw-bold mb-2 secondaryText">{name}</h2>
        <table className="table text-whitish fw-bold">
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
        <h5 className="mt-3 mb-2">Desciription</h5>
        <h6>{details}</h6>
        <button className="mt-3 btn btn-green">Purchase Course</button>
      </Card.Body>
    </Card>
  );
};

export default DetailsView;

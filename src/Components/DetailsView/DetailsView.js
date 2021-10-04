import React from "react";
import { Card } from "react-bootstrap";

const DetailsView = (props) => {
  const { courseProps } = props;
  const { name, img, intructor, duration, courseFee, details } = courseProps;
  return (
    <Card className="customCard w-50 mb-4">
      <Card.Img className={`bg-warning`} variant="top" src={img} />
      <Card.Body>
        <h4 className="fw-bold">{name}</h4>
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
        <h5 className="mt-3">{details}</h5>
      </Card.Body>
    </Card>
  );
};

export default DetailsView;

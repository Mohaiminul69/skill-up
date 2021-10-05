import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { WishContext } from "../../App";

const DetailsView = (props) => {
  const { courseProps } = props;
  const { name, img, intructor, duration, courseFee, details } = courseProps;
  /*
<---------------------------- Using Context API ---------------------------->
*/
  const wish = useContext(WishContext);
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
          </tbody>
        </table>
        <h5 className="mt-3 mb-2">Desciription</h5>
        <h6>{details}</h6>
        <div className="d-flex align-items-center justify-content-between mt-4">
          <h4 className="text-success mb-0">BDT {courseFee}</h4>
          <button className="btn btn-green">Purchase Course</button>
        </div>
        {/* <---------------------- Using Context API ----------------------> */}
        <p className="text-muted mt-2">{wish}</p>
      </Card.Body>
    </Card>
  );
};

export default DetailsView;

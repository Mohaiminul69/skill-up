import React from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";

const Search = (props) => {
  const { handleSearch } = props;
  return (
    <InputGroup className="my-4 mx-auto w-75">
      <FormControl
        placeholder="Search Course..."
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={handleSearch}
      />
      <Button className="btn-green" id="button-addon2">
        Button
      </Button>
    </InputGroup>
  );
};

export default Search;

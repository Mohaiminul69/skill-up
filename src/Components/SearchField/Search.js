import React from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";

const Search = (props) => {
  const { handleSearch } = props;
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Search Course..."
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={handleSearch}
      />
      <Button variant="danger" id="button-addon2">
        Button
      </Button>
    </InputGroup>
  );
};

export default Search;

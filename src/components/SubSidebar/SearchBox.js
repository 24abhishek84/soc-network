import React from 'react';
import { Form } from 'react-bootstrap';
import { StyledInput, StyledForm } from "./Sidebar.style";

const SearchBox = () => {
  return (
    <StyledForm className="rounded">
      <Form>
        <Form.Group controlId="search" className="m-0">
          <StyledInput className="border-0 pl-3 pr-3 pt-4 pb-4 bg-transparent" type="text" placeholder="Search" />
        </Form.Group>
      </Form>
    </StyledForm>
  );
};

export default SearchBox;
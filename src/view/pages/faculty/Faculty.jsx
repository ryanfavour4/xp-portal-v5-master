import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import FacultyList from "./FacultyList";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import FormModal, { useModal } from "../../shared/FormModal";
import FacultyForm from "./FacultyForm";
import { FacultyInterface } from "../../../controller/Interface/FacultyInterface.js";
import { useState } from "react";

function Faculty() {
  const { faculties } = useSelector((store) => store.faculty);
  const { show, handleClose, handleShow } = useModal();
  const [facultyObject, setFacultyObject] = useState();

  const requestModal = (facultyObject) => {
    setFacultyObject(facultyObject);
    handleShow();
  };

  return (
    <>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
            <Button onClick={() => requestModal(FacultyInterface)}>Add</Button>
          </Container>
        </Navbar>
      </Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {faculties?.map((faculty) => {
            return (
              <FacultyList
                requestModal={requestModal}
                key={faculty.id}
                faculty={faculty}
              />
            );
          })}
        </tbody>
      </Table>
      <FormModal show={show} handleClose={handleClose}>
        {<FacultyForm faculties={faculties} handleClose={handleClose} setFacultyObject={setFacultyObject} facultyObject={facultyObject} />}
      </FormModal>
    </>
  );
}

export default Faculty;

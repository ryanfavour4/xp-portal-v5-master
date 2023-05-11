import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { HandleInputChange } from "../../../controller/helpers/InputHandler";
import { useDispatch } from "react-redux";
import { addFaculty, editFaculty } from "../../../model/store/features/FacultySlice";
import { checkIsDuplicate } from "../../../controller/validation/CheckDuplicate";

const FacultyForm = ({
  faculties,
  facultyObject,
  setFacultyObject,
  handleClose,
}) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const isDuplicate =
      checkIsDuplicate(faculties, facultyObject).length === 0 && handleClose();
    if (facultyObject.id !== 0) {
      dispatch(editFaculty(facultyObject));
      handleClose();
      return;
    }
    dispatch(addFaculty(facultyObject));
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <input hidden type="text" name="id" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <input
          type="text"
          onChange={(e) =>
            HandleInputChange(e, setFacultyObject, facultyObject)
          }
          name="name"
          value={facultyObject.name}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <input
          type="email"
          onChange={(e) =>
            HandleInputChange(e, setFacultyObject, facultyObject)
          }
          name="email"
          value={facultyObject.email}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Gender</Form.Label>
        <input
          type="text"
          onChange={(e) =>
            HandleInputChange(e, setFacultyObject, facultyObject)
          }
          name="gender"
          value={facultyObject.gender}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Company</Form.Label>
        <input
          type="text"
          onChange={(e) =>
            HandleInputChange(e, setFacultyObject, facultyObject)
          }
          name="company"
          value={facultyObject.company}
        />
      </Form.Group>

      <Button onClick={handleSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FacultyForm;

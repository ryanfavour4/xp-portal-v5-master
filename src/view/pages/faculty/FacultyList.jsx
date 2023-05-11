import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deletePopUp } from "../../shared/Popup";
import { removeFaculty } from "../../../model/store/features/FacultySlice";

const FacultyList = ({ faculty, requestModal }) => {
  const dispatch = useDispatch();

  const confirmDelete = (facultyId, facultyName) => {
    deletePopUp(facultyName).then((res) => res.isConfirmed && dispatch(removeFaculty(facultyId)));
  };

  return (
    <tr key={faculty.id}>
      <td>{faculty.id}</td>
      <td>{faculty.name}</td>
      <td>{faculty.company}</td>
      <td>{faculty.email}</td>
      <td>
        <Button
          onClick={() => {
            confirmDelete(faculty.id, faculty.name);
          }}
          className="m-2"
          variant="danger"
        >
          delete
        </Button>
        <Button
          onClick={() => {
            requestModal(faculty);
          }}
          className="m-2"
          variant="warning"
        >
          edit
        </Button>
      </td>
      <td></td>
    </tr>
  );
};

export default FacultyList;

import { createSlice } from "@reduxjs/toolkit";
import faculties from "../../db/Faculty.json";
import { checkIsDuplicate } from "../../../controller/validation/CheckDuplicate";
import Swal from "sweetalert2";

const initialState = {
  faculties: faculties,
  errorMessage: "",
};

const facultySlice = createSlice({
  name: "Faculties",
  initialState,
  reducers: {
    addFaculty: function (state, action) {
      const isDuplicate = checkIsDuplicate(state.faculties, action.payload);
      if (isDuplicate.length) {
        state.errorMessage = isDuplicate.join(", ");
        Swal.fire(state.errorMessage + " Already exists");
      } else {
        action.payload.id = crypto.randomUUID().slice(0, 3);
        state.faculties.push(action.payload);
        Swal.fire(action.payload.name + " added");
      }
    },
    editFaculty: function (state, action) {
      const index = state.faculties.findIndex(
        (faculty) => faculty.id === action.payload.id
      );
      if (index !== -1) {
        state.faculties[index] = action.payload;
        Swal.fire(action.payload.name + " Updated");
      }
    },
    removeFaculty: function (state, action) {
      const newfaculties = state.faculties.filter(
        (faculty) => faculty.id !== action.payload
      );
      state.faculties = newfaculties;
    },
  },
});

// export const facultySliceState = facultySlice.getInitialState();

export const { addFaculty, removeFaculty, editFaculty } = facultySlice.actions;
export default facultySlice.reducer;

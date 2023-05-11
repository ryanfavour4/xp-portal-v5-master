import Swal from "sweetalert2";

export const deletePopUp = (facultyName) => Swal.fire({
  title: `Deleting ${facultyName}`,
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!",
})

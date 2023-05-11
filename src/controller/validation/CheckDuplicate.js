export const checkIsDuplicate = (arrays, payload) => {
    let errorArray = [];

    arrays.forEach((array) => {

    if (array.name === payload.name) {
        errorArray.push(array.name)
    }
    if (array.email === payload.email) {
        errorArray.push(array.email)
    }else{
        return;
    }
  });

  console.log(errorArray);
  return errorArray;
};

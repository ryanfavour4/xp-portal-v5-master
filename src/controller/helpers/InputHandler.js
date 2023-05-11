//? @CONTROLLER ==== //

//? change any input form object
export const HandleInputChange = (event, setInputs, inputs) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
};

//? change single input form
export const HandleSingleInputChange = (event, setInputs) => {
    const { value } = event.target;
    setInputs(value);
};

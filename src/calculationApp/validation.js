import React from "react";
function Validate(p) {
  let errors = {};
  if (!values.number) {
    errors.number = 'number is required';
  } else if (test(values.number) <= -1) {
    errors.number = 'neagitive numbers are not allowed';
  }
  if (!values.option) {
    errors.option = 'number is required';
  } else if (values.option.length > 4) {
    errors.option = 'you canot enter more then 9';
  }
  return errors;
};

export default Validate;
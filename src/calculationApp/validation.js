 function Validate(values) {
    let errors = {};
    if (!values.number) {
      errors.number = 'number is required';
    } else if (test(values.number) <= -1) {
      errors.number = 'neagitive numbers are not allowed';
    }
    if (!values.option) {
      errors.password = 'Password is required';
    } else if (values.option.length > 9) {
      errors.option = 'you canot enter more then 9';
    }
    return errors;
  };

  export default Validate;
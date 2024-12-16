export const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'El campo es requerido';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Debe tener 15 caracteres o menos';
  }

  if (!values.lastName) {
    errors.lastName = 'El campo es requerido';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Debe tener 20 caracteres o menos';
  }

  if (!values.email) {
    errors.email = 'El campo es requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email es inválido';
  }

  if (!values.password) {
    errors.password = 'El campo es requerido';
  }
   
  if(!values.repeatPass){
    errors.repeatPass = 'El campo es requerido';
  }

  if (values.repeatPass !== values.password) {
    errors.repeatPass = 'Error, las contraseñas deben ser iguales.';
  }

  if(!values.country){
    errors.country = "Seleccione un país"
  }
  
  return errors;
};

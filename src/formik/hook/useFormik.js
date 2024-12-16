import { useFormik } from 'formik';
import { validate } from '../validations/validate';

export const useFormiks = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repeatPass: '',
      country:""
    },
    validate,
    onSubmit: (values) => {
    //  console.log(values); // Imprime todos los valores del formulario
      formik.resetForm();
      alert("Enviado")
      //alert(JSON.stringify(values, null, 2)); // Alerta con los valores formateados
    },
  });

  return { formik };
};

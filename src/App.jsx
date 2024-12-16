import './styles/form.css';
import './styles/app.css';
import { input } from './data/input';
import SelectCountries from './components/SelectCountries';
import Buttons from './components/Buttons';
import { useFormiks } from './formik/hook/useFormik'; // Asegúrate de que el hook esté bien importado

const App = () => {
  const { formik } = useFormiks();
  return (
    <section className="container">
      <h1>Registro</h1>
      <h2 className="subtitle">Introduzca sus datos</h2>
      <form className="container_form" onSubmit={formik.handleSubmit}>
        {input.map((item) => (
          <div className="form_group" key={item.id}>
            <label htmlFor={item.name}>{item.label}</label>
            <input
              type={item.type}
              placeholder={item.placeholder}
              value={formik.values[item.name] || ''}
              name={item.name}
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              {...(item.type === 'password' ? { minLength: 6 } : {})}
            />
            {/* Errores */}
            {formik.errors[item.name] && formik.touched[item.name] ? (
              <i className="errors">*{formik.errors[item.name]}</i>
            ) : null}
          </div>
        ))}
        <SelectCountries formik={formik} />
        <Buttons />
      </form>
    </section>
  );
};

export default App;

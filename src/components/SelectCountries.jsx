import { countries } from 'countries-list';
import '../styles/form.css';

const SelectCountries = ({ formik }) => {
  const selectCountry = Object.entries(countries).map(
    ([code, country]) => ({
      code,
      name: country.name,
    })
  );

  return (
    <div className="form_group">
      <label htmlFor="countryCode">País</label>
      <select
        name="country"
        value={formik.values.country}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        required
      >
        <option value="">Seleccione su país</option>
        {selectCountry.map((country) => (
          <option key={country.code} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      {formik.errors.country && formik.touched.country ? (
        <i className="errors">*{formik.errors.country}</i>
      ) : null}
    </div>
  );
};

export default SelectCountries;

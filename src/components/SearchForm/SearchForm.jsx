import { Formik, Form, Field } from 'formik';
import { IoMdSearch } from 'react-icons/io';
import css from './SearchForm.module.css';

export default function SearchForm({ onSearch }) {
  const handleSubmit = (values, actions) => {
    onSearch(values.query);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <Field
          className={css.input}
          type="text"
          name="query"
          placeholder="Search..."
        ></Field>

        <button type="submit" className={css.btn}>
          <IoMdSearch className={css.icon} />
        </button>
      </Form>
    </Formik>
  );
}

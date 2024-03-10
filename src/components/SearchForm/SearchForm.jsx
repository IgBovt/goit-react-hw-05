import { Formik, Form, Field } from 'formik';
import { IoMdSearch } from 'react-icons/io';
import css from './SearchForm.module.css';
import { useSearchParams } from 'react-router-dom';

export default function SearchForm({ onSearch }) {
  const handleSubmit = (values, actions) => {
    onSearch(values.query.toLowerCase());
    actions.resetForm();
  };

  const [params] = useSearchParams();
  const filmSearch = params.get('query') ?? '';

  return (
    <Formik initialValues={{ query: filmSearch }} onSubmit={handleSubmit}>
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

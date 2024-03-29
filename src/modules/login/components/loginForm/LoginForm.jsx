import { Formik, Form, Field } from 'formik';
import styles from './LoginForm.module.scss';
import validationsSchema from '../../helpers/validationsSchema';
import FormError from '../FormError/FormError';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationsSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.loginForm}>
        <label className={styles.loginLable}>
          <Field
            className={styles.loginInput}
            type="email"
            name="email"
            placeholder="Email address"
          />
          <FormError fieldName="email" />
        </label>
        <label className={styles.loginLable}>
          <Field
            className={styles.loginInput}
            type="password"
            name="password"
            placeholder="Password"
          />
          <FormError fieldName="password" />
        </label>
        <button type="submit" className={styles.loginButton}>
          Log in
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;

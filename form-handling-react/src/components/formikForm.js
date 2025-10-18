import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

function FormikForm() {
  const initialValues = { username: '', email: '', password: '' };

  const handleSubmit = (values, { resetForm }) => {
    console.log('Formik Submitted:', values);
    alert('User registered via Formik!');
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4">
        <h2 className="text-2xl font-bold text-center text-green-600">Register with Formik</h2>

        <div>
          <label className="block mb-1 font-medium">Username</label>
          <Field name="username" className="w-full border p-2 rounded" />
          <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <Field name="email" type="email" className="w-full border p-2 rounded" />
          <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
        </div>

        <div>
          <label className="block mb-1 font-medium">Password</label>
          <Field name="password" type="password" className="w-full border p-2 rounded" />
          <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
        </div>

        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Submit
        </button>
      </Form>
    </Formik>
  );
}

export default FormikForm;

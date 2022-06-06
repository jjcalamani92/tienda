// import React from 'react';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// class FormikForm extends React.Component {
//     render() {
//         return (
//             <Formik
//                 initialValues={{
//                     firstName: '',
//                     lastName: '',
//                     email: '',
//                     password: '',
//                     confirmPassword: ''
//                 }}
//                 validationSchema={Yup.object().shape({
//                     firstName: Yup.string()
//                         .required('First Name is required'),
//                     lastName: Yup.string()
//                         .required('Last Name is required'),
//                     email: Yup.string()
//                         .email('Email is invalid')
//                         .required('Email is required'),
//                     password: Yup.string()
//                         .min(6, 'Password must be at least 6 characters')
//                         .required('Password is required'),
//                     confirmPassword: Yup.string()
//                         .oneOf([Yup.ref('password'), null], 'Passwords must match')
//                         .required('Confirm Password is required')
//                 })}
//                 onSubmit={fields => {
//                     alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
//                 }}
//                 render={({ errors, status, touched }) => (
//                     <Form>
//                         <div className="form-group">
//                             <label htmlFor="firstName">First Name</label>
//                             <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
//                             <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="lastName">Last Name</label>
//                             <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
//                             <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="email">Email</label>
//                             <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
//                             <ErrorMessage name="email" component="div" className="invalid-feedback" />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="password">Password</label>
//                             <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
//                             <ErrorMessage name="password" component="div" className="invalid-feedback" />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="confirmPassword">Confirm Password</label>
//                             <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
//                             <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
//                         </div>
//                         <div className="form-group">
//                             <button type="submit" className="btn btn-primary mr-2">Register</button>
//                             <button type="reset" className="btn btn-secondary">Reset</button>
//                         </div>
//                     </Form>
//                 )}
//             />
//         )
//     }
// }

// export { FormikForm };

import * as React from 'react';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';

interface MyFormValues {
  firstName: string;
}

export const FormikForm: React.FC<{}> = () => {
  const initialValues: MyFormValues = { firstName: '' };
  return (
    <div>
      <h1>My Example</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="First Name" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
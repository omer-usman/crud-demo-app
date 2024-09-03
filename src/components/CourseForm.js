import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addCourse } from '../redux/actions';
import { Input, Button } from 'antd';

const CourseSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
});

const CourseForm = () => {
  const dispatch = useDispatch();
  const userRole = useSelector(state => state.userRole);

  if (userRole !== 'admin') {
    return <div>You do not have permission to access this page.</div>;
  }

  return (
    <Formik
      initialValues={{ title: '', description: '' }}
      validationSchema={CourseSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(addCourse(values));
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="title">
            {({ field }) => <Input {...field} placeholder="Title" />}
          </Field>
          {errors.title && touched.title ? <div>{errors.title}</div> : null}
          <Field name="description">
            {({ field }) => <Input {...field} placeholder="Description" />}
          </Field>
          {errors.description && touched.description ? <div>{errors.description}</div> : null}
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default CourseForm;
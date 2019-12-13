import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const OnboardForm = ({ values, errors, touched, status }) => {
    console.log("values", values);
    console.log("errors", errors);
    console.log("touched", touched);

    const [users, setUsers] = useState([]); // This will hold form submission data

    useEffect(() => {
        console.log("change was made", status)
    },[status]);

    return (
        <Form>
            <label>
                First Name:
                <Field type="text" id="fname" name="fname" placeholder="Johny"/>
                {touched.fname && errors.fname && (
                    <p className="form_error">{errors.fname}</p>
                )}
            </label>

            <label>
                Last Name:
                <Field type="text" id="lname" name="lname" placeholder="Appleseed"/>
                    {touched.lname && errors.lname && (
                        <p className="form_error">{errors.lname}</p>
                    )}
            </label>

            <label>
                Email:
                <Field type="email" id="email" name="email" placeholder="jappleseed@mail.com"/>
                {touched.email && errors.email && (
                    <p className="form_error">{errors.email}</p>
                )}
            </label>

            <label>
                Password:
                <Field type="password" id="password" name="password"/>
                {touched.password && errors.password && (
                    <p className="form_error">{errors.password}</p>
                )}
            </label>

            <Field type="checkbox" id="tos" name="tos" checked="values.tos" />
            {touched.tos && errors.tos && (
                <p className="form_error">{errors.tos}</p>
            )}
            <button type="submit">Sign Up</button>

        </Form>
    )
}

const FormikOnboardForm = withFormik({
    mapPropsToValues(props) {
        return {
            fname: props.fname || "sssasa",
            lname: props.lname || "sffdfd",
            email: props.email || "adfsa",
            password: props.password || "asdfasf",
            tos: props.tos || false
        };
    },

    validationSchema: Yup.object().shape({
        fname: Yup.string().required("aaaahhhhhhhhhh"),
        lname: Yup.string().required("aaaahhhhhhhhhh"),
        email: Yup.string().required("aaaahhhhhhhhhh"),
        password: Yup.string().required("aaaahhhhhhhhhh"),
    })
}) (OnboardForm);

export default FormikOnboardForm;
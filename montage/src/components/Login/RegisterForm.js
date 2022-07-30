import React, {useContext, useState} from "react";
import {BoxContainer, FormContainer, BoldLink, MutedLink, Input, SubmitButton,
FieldContainer, FieldError, FormSuccess, FormError} from "./Common";
import {LoginContext} from "./LoginContext";
import {useFormik} from "formik";
import * as yup from "yup";
import axios from "axios";

const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const validationSchema = yup.object({
  fullName: yup.string().min(2, "Please enter your real name").required("Full name is required"),
  email: yup.string().email("Please enter your email").required("Email is required"),
  password: yup.string().matches(PASSWORD_REGEX, "Please enter a strong password").required("Password is required"),
  confirmPassword: yup.string().when("password", {
    is: val => (val && val.length > 0 ? true : false),  // val is the password value
    then: yup.string().oneOf([yup.ref("password")], "Password does not match") // checking the password is matched or not
  }),
});

export function RegisterForm(props) {
  const {switchToLogin} = useContext(LoginContext);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    const {confirmPassword, ...data} = values;
    const response = await axios.post('https://cpsc455montageserver.herokuapp.com/users/signup', data)
    .catch((error) => {
      if (error && error.response) {
        setError(error.response.data.message);
        setSuccess(null);
      }
    });
    if (response && response.data) {
      setError(null);
      setSuccess(response.data.message);
      formik.resetForm();
    }
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <BoxContainer>
      <FormContainer onSubmit = {formik.handleSubmit}>
        <FieldContainer>
          <Input className="formInput" name="fullName" type="text"
          placeholder="Full Name"
          value={formik.values.fullName} onChange={formik.handleChange}
          onBlur={formik.handleBlur} />
          <FieldError>
            {formik.touched.fullName && formik.errors.fullName
              ? formik.errors.fullName : ""}
          </FieldError>
        </FieldContainer>

        <FieldContainer>
          <Input className="formInput" name="email" type="email"
          placeholder="Email" required
          value={formik.values.email} onChange={formik.handleChange}
          onBlur={formik.handleBlur} />
          <FieldError>
            {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
          </FieldError>
        </FieldContainer>

        <FieldContainer>
          <Input className="formInput" name="password" type="password"
          placeholder="Password" required
          value={formik.values.password} onChange={formik.handleChange}
          onBlur={formik.handleBlur} />
          <FieldError>
            {formik.touched.password && formik.errors.password
              ? formik.errors.password : ""}
          </FieldError>
        </FieldContainer>

        <FieldContainer>
          <Input className="formInput" name="confirmPassword" type="password"
          placeholder="Confirm Password"
          required value={formik.values.confirmPassword}
          onChange={formik.handleChange} onBlur={formik.handleBlur} />
          <FieldError>
            {formik.touched.confirmPassword && formik.errors.confirmPassword
              ? formik.errors.confirmPassword : ""}
          </FieldError>
        </FieldContainer>

        <SubmitButton type="submit" disabled={!formik.isValid} onClick={switchToLogin}>
        Sign Up
        </SubmitButton>
        {!error && <FormSuccess>{success ? success : ""}</FormSuccess>}
        {!success && <FormError>{error ? error : ""}</FormError>}
        <FormError>{}</FormError>
      </FormContainer>
      <MutedLink href="#" onClick={switchToLogin}>
        Already have an account?
        <BoldLink href="#" onClick={switchToLogin}>Sign In</BoldLink>
      </MutedLink>
    </BoxContainer>
  )
}

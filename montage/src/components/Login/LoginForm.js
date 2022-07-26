import React, {useContext, useState} from "react";
import {BoxContainer, FormContainer, BoldLink, MutedLink, Input, SubmitButton,
FieldContainer, FieldErrorLogin, FormError} from "./Common";
import {LoginContext} from "./LoginContext";
import {useFormik} from "formik";
import * as yup from "yup";
import axios from "axios";
import jwt from "jwt-decode";
import {useDispatch} from "react-redux";
import {getUserId} from "../../actions/index.js";

const validationSchema = yup.object({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required")
});

export function LoginForm(props) {
  const {switchToSignup} = useContext(LoginContext);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    setError(null);
    const response = await axios.post('http://localhost:3001/users/signin', values)
    .then((res) => {
      if (res.data.token) {
        const token = res.data.token;
        const decoded = jwt(token);
        console.log(res.data.token);
        console.log(token);
        console.log(decoded);
        localStorage.setItem("token", res.data.token);
        dispatch(getUserId(decoded));
      }
    })
    .catch((error) => {
      if (error && error.response) {
        setError(error.response.data.message);
      }
    });
    if (response && response.data) {
      alert("Welcome Back!");
      formik.resetForm();
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      isAdmin: false
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
  <BoxContainer>
    <FormContainer onSubmit={formik.handleSubmit}>
      <FieldContainer>
        <Input className="formInput" type="email" name="email"
        placeholder="Email" required
        value={formik.values.email} onChange={formik.handleChange}
        onBlur={formik.handleBlur}/>
        <FieldErrorLogin>
          {formik.touched.email && formik.errors.email
            ? formik.errors.email : ""}
        </FieldErrorLogin>
      </FieldContainer>

      <FieldContainer>
        <Input className="formInput" type="password" name="password"
        placeholder="Password" required
        value={formik.values.password} onChange={formik.handleChange}
        onBlur={formik.handleBlur} />
        <FieldErrorLogin>
          {formik.touched.password && formik.errors.password
            ? formik.errors.password : ""}
        </FieldErrorLogin>
      </FieldContainer>

      <MutedLink href="#">Forget your password?</MutedLink>
      <SubmitButton type="submit" disabled={!formik.isValid}>Login</SubmitButton>
      <FormError>{error ? error : ""}</FormError>
    </FormContainer>
    <MutedLink href="#" onClick={switchToSignup}>
      Don't have an account?
      <BoldLink href="#" onClick={switchToSignup}>Sign Up</BoldLink>
    </MutedLink>
  </BoxContainer>
  );
}

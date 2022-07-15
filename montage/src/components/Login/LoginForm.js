import React, {useContext, useState} from "react";
import {BoxContainer, FormContainer, BoldLink, MutedLink, Input, SubmitButton,
FieldContainer, FieldErrorLogin, FormError} from "./Common";
import {LoginContext} from "./LoginContext";
import {useFormik} from "formik";
import * as yup from "yup";
import axios from "axios";

// class LoginForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading: true,
//       token: '',
//       signUpError: '',
//       signInError: '',
//       signInEmail: '',
//       signInPassword: '',
//     };
//   }
//
//   componentDidMount() {
//      const token = getFromStorage('the_main_app');
//      if (token) {
//        fetch('/users/verify?token=' + token)
//        .then(res => res.json())
//        .then(json => {
//          if (json.success) {
//            this.setState({
//              token: token,
//              isLoading: false
//            });
//          } else {
//            this.setState({
//              isLoading: false
//            });
//          }
//        });
//      } else {
//        this.setState({
//          isLoading: false,
//        });
//      }
//   }
//
//   switchToSignup = useContext(LoginContext);
//
//   render() {
//     const {
//       isLoading,
//       token,
//       signInError,
//       signInEmail,
//       signInPassword,
//     } = this.state;
//
//     if (isLoading) {
//       return (<div><p>Loading...</p></div>);
//       // show the loading page.
//     }
//
//     return (
//       <BoxContainer>
//         <FormContainer>
//           <Input type="email" placeholder="Email" required value={signInEmail}/>
//           <Input type="password" placeholder="Password" required value={signInPassword}/>
//         </FormContainer>
//           <MutedLink href="#">Forget your password?</MutedLink>
//           <SubmitButton type="submit">Login</SubmitButton>
//           <MutedLink href="#">
//             Don't have an account?
//             <BoldLink href="#" onClick={switchToSignup}>Sign Up</BoldLink>
//           </MutedLink>
//       </BoxContainer>
//     );
//   }
// }
const validationSchema = yup.object({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required")
});

export function LoginForm(props) {
  const {switchToSignup} = useContext(LoginContext);
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    setError(null);
    const response = await axios.post('http://localhost:3001/users/signin', values)
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
      password: ""
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
  <BoxContainer>
    <FormContainer onSubmit={formik.handleSubmit}>
      <FieldContainer>
        <Input type="email" name="email" placeholder="Email" required
        value={formik.values.email} onChange={formik.handleChange}
        onBlur={formik.handleBlur}/>
        <FieldErrorLogin>
          {formik.touched.email && formik.errors.email
            ? formik.errors.email : ""}
        </FieldErrorLogin>
      </FieldContainer>

      <FieldContainer>
        <Input type="password" name="password" placeholder="Password" required
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
    <MutedLink href="#">
      Don't have an account?
      <BoldLink href="#" onClick={switchToSignup}>Sign Up</BoldLink>
    </MutedLink>
  </BoxContainer>
  );
}

import React, {useContext} from "react";
import {BoxContainer, FormContainer, BoldLink, MutedLink, Input, SubmitButton}
from "./Common";
import {LoginContext} from "./LoginContext";
import {getFromStorage, setInStorage} from "./storage";

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

export function LoginForm(props) {
  const {switchToSignup} = useContext(LoginContext);
  return <BoxContainer>
    <FormContainer>
      <Input type="email" placeholder="Email" required/>
      <Input type="password" placeholder="Password" required />
    </FormContainer>
      <MutedLink href="#">Forget your password?</MutedLink>
      <SubmitButton type="submit">Login</SubmitButton>
      <MutedLink href="#">
        Don't have an account?
        <BoldLink href="#" onClick={switchToSignup}>Sign Up</BoldLink>
      </MutedLink>
  </BoxContainer>
}

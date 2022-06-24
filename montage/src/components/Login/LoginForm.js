import React, {useContext} from "react";
import {BoxContainer, FormContainer, BoldLink, MutedLink, Input, SubmitButton}
from "./Common";
import {LoginContext} from "./LoginContext";

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

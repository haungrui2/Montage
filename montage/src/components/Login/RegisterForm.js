import React, {useContext} from "react";
import {BoxContainer, FormContainer, BoldLink, MutedLink, Input, SubmitButton}
from "./Common";
import {LoginContext} from "./LoginContext";

export function RegisterForm(props) {
  const {switchToLogin} = useContext(LoginContext);
  return <BoxContainer>
    <FormContainer>
      <Input type="text" placeholder="Full Name" required />
      <Input type="email" placeholder="Email" required/>
      <Input type="password" placeholder="Password" required/>
      <Input type="password" placeholder="Confirm Password" required/>
    </FormContainer>
      <SubmitButton type="submit">Sign Up</SubmitButton>
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToLogin}>Sign In</BoldLink>
      </MutedLink>
  </BoxContainer>
}

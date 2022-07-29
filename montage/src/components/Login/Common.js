import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MutedLink = styled.a`
  font-size: 12px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
  direction: vertical;
  margin-left: 30px;
`;

export const BoldLink = styled.a`
  font-size: 12px;
  color: rgb(241, 196, 15);
  font-weight: 500;
  text-decoration: none;
  padding-left: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 20px;
  margin-bottom: 30px;
  margin-top: -26px;
  border-bottom: 1.4px solid transparent;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px
  cursor: pointer;
  transition: all, 200ms ease-in-out;
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );

  &:hover {
    filter: brightness(1.14);
  }

  &:disabled {
    filter: contrast(0.7);
  }
`;

export const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FieldError = styled.span`
  color: red;
  font-size: 14px;
  min-height: -20px;
  margin-bottom: 22px;
  margin-left: 30px;
`;

export const FieldErrorLogin = styled.span`
  color: red;
  font-size: 14px;
  margin-bottom: 24px;
  margin-left: 30px;
`;

export const FormSuccess = styled.span`
  color: #28a828;
  font-size: 15px;
  min-height: 20px;
  margin-left: 30px;
`;

export const FormError = styled.span`
  color: red;
  font-size: 15px;
  min-height: 20px;
  margin-left: 30px;
`;

import React from "react";
import jwt from 'jwt-decode';

export default function AuthHeader() {
  const token = localStorage.getItem("token");
  const decode = jwt(token);

  if (token) {
    return {"authToken": token};
  } else {
    return {};
  }
}

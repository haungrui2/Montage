import React from "react";

export default function AuthHeader() {
  const token = localStorage.getItem("token");

  if (token) {
    return {"authToken": token};
  } else {
    return {};
  }
}

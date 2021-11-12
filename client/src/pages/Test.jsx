import React from "react";
import { Button } from "@mui/material";
import Request from "../api/Request";
import { Helmet } from "react-helmet";

function Test() {
  const useLogin = () => {
    Request.getUsers()
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <>
      {" "}
      <Helmet title="test" />
      <Button onClick={useLogin}>Test</Button>
    </>
  );
}

export default Test;

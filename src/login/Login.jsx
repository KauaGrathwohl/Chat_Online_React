import React from "react";
import Input from "../components/input/Input";
import Button from "../components/button/Button";

function Login(props) {


  console.log(props);

  return (
    <div>
      <Input/>
      <Button> 
        Logar
      </Button>

    </div>
  );
}

export default Login
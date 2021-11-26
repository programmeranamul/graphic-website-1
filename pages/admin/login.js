import { useContext, useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { MenuContext } from "./../_app";

function Login() {
  const { showMenu, setShowMenu } = useContext(MenuContext);

  const handelChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    process.browser && console.log("Process Happend")
  }, [])
  

  //login functionality
  const [data, setData] = useState({});
  const handelLogIn = (e) => {
    e.preventDefault();
    const message = document.getElementById("message");
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (
      data.email === "" ||
      data.password === "" ||
      data.password.length < 4 ||
      !data.email.match(mailformat)
    ) {
      message.classList.add("d-block");
      message.classList.remove("d-none");
      setTimeout(() => {
        message.classList.remove("d-none");
        message.classList.add("d-none");
      }, 3000);
    }
  };
  return (
    <div className="container  ">
      <Form
        className="col-md-6 offset-3 border px-4 pt-4 rounded shadow-sm mt-5 pb-4"
        onSubmit={handelLogIn}
      >
        <h4 className="text-center font-livvic main-color fs-24 fw-600 lh-32 mb-3">
          Login
        </h4>
        <Alert id="message" className="d-none" variant="danger">
          Provide correct email and password
        </Alert>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="email"
            onChange={handelChange}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            onChange={handelChange}
            placeholder="Password"
            autoComplete="false"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;

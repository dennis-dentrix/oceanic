import { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import supabase from "../services/supabase";
import { Link } from "react-router-dom";

function Register() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef(null);
  const nameRef = useRef("");

  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const register = (email, password) => {
    supabase.auth.signUp({ email, password });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !passwordRef.current?.value ||
      !emailRef.current?.value ||
      !confirmPasswordRef.current?.value ||
      !nameRef.current?.value
    ) {
      setErrorMsg("Please fill all the fields");
    }

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setErrorMsg("Passwords doesn't match");
      return;
    }

    try {
      setErrorMsg("");
      setLoading(true);
      const { data, error } = await register(
        emailRef.current.value,
        passwordRef.current.value,
        nameRef.current.value
      );
      if (!error && data) {
        setMsg(
          "Registration Successful. Check your email to confirm your account"
        );
      }
    } catch (error) {
      setErrorMsg(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="grid place-content-center my-8">
      <Card className="w-full">
        <Card.Body>
          <h2 className="text-center mb-4">Register</h2>

          <Form onSubmit={handleSubmit}>
            <Form.Group id="name">
              <Form.Label>Full name</Form.Label>
              <Form.Control type="text" ref={nameRef} required />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="confirm-password">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" ref={confirmPasswordRef} required />
            </Form.Group>

            {errorMsg && (
              <Alert
                variant="danger"
                onClose={() => setErrorMsg("")}
                dismissible
              >
                {errorMsg}
              </Alert>
            )}
            {msg && (
              <Alert variant="success" onClose={() => setMsg("")} dismissible>
                {msg}
              </Alert>
            )}

            <div className="text-center mt-2 space-x-2">
              <Button
                disabled={loading}
                type="submit"
                className="w-full  bg-blue border-blue"
              >
                Register
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        Already a User? <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );
}

export default Register;

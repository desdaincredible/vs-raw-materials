import Layout from "../../components/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Form } from "reactstrap";
import Input from "../../components/form/input";
import { useState } from "react";

const Login = () => {
  const router = useRouter();

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function submit(e) {
    e.preventDefault();
    if (data.username && data.password) {
      const response = await fetch(`/api/user/${data.username}`, {
        method: "POST",
        body: JSON.stringify({ data }),
      });
      const json = await response.json();
      console.log(json);
      if (response.status === 200) {
        router.push("/reports/new");
      } else {
        setError(true);
        setErrorMessage("Incorrect login credentials.");
      }
    } else {
      setError(true);
      setErrorMessage("Please fill in username and password.");
    }
  }

  return (
    <Layout>
      <h1 className="text-center">Login</h1>

      <Form className="w-50 mx-auto" onSubmit={submit}>
        <div className="mb-3">
          <Input
            label="Username"
            value={data.username}
            setValue={(value) => {
              setData((data) => ({
                ...data,
                username: value,
              }));
            }}
          />
        </div>
        <div className="mb-3">
          <Input
            label="Password"
            value={data.password}
            setValue={(value) => {
              setData((data) => ({
                ...data,
                password: value,
              }));
            }}
          />
        </div>
        <div className="d-flex justify-content-between">
          <Button type="submit" className="btn btn-primary">
            Sign in
          </Button>
          <Link href="/">
            <a>
              <small className="my-auto text-muted">Forgot password?</small>
            </a>
          </Link>
        </div>
        {error && <p className="text-danger mt-2">{errorMessage}</p>}
      </Form>
    </Layout>
  );
};

export default Login;

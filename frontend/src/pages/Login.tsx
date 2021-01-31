import React from "react";
import Layout from "../components/layout/Layout";
import Form from "../components/Form";

interface ILogin {
  path: string;
}
const Login = ({ path }: ILogin) => {
  return (
    <Layout>
      <Form />
    </Layout>
  );
};

export default Login;

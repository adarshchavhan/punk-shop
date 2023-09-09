import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/userAction";

const Login = () => {
  const [data, setData] = useState({ name: "", password: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(data))
  };

  return (
    <StyledLogin>
      <Form onSubmit={handleSubmit}>
        <Heading>Log In</Heading>

        <Input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={data.name}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={data.password}
          onChange={handleChange}
          required
        />

        <Button type="submit">Log In</Button>
      </Form>
    </StyledLogin>
  );
};


const StyledLogin = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.colors.light};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 40px;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
`;

const Heading = styled.h2`
  font-weight: 900;
  color: ${({ theme }) => theme.colors.dark};
`;

const Input = styled.input`
  width: 100%;
  padding: 15px 10px;
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  font-size: 14px;
  outline: none;
  border: 2px solid ${({ theme }) => theme.colors.shadow};
  border-radius: 5px;
  &:focus {
    border-color: ${({ theme }) => theme.colors.dark};
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 15px 10px;
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  font-weight: 600;
  font-size: 14px;
  border: 2px solid;
  outline: none;
  border-radius: 5px;
  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.colors.dark};
  }
`;

export default Login;

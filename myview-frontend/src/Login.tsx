import React, { useState } from 'react';
import './App.css';
import 'antd/dist/reset.css';
import { Button, Form, Input, Alert } from 'antd';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Login Success:', data);
      localStorage.setItem('username', username); //This is the place to store the login status
      localStorage.setItem('isLoggedIn', 'true'); 
      navigate(`/dashboard/${username}`, { replace: true });
    } else {
      setError('Login failed. Please check your username and password.');
    }
  };

  return (
    <div className="Login">
      {error && (
        <Alert
          message="Error"
          description={error}
          type="error"
          showIcon
          closable
          style={{ marginBottom: '20px' }}
        />
      )}
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        style={{ maxWidth: '300px', margin: '100px auto' }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;

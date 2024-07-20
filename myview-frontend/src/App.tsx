import React, { useState } from 'react';
import './App.css';
import 'antd/dist/reset.css';
import { Button, Form, Input } from 'antd';

function App() {
  const [username,setUsername] = useState('');
  const [password, setPassword] = useState('');

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
    } else {
      console.error('Login Failure');
    }
  };

  return (
    <div className="App">
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
          <Input value={username} onChange={(e) => setUsername(e.target.value)}/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password value={password} onChange={(e) => setPassword(e.target.value)}/>
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

export default App;

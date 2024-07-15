import React from 'react';
import './App.css';
import 'antd/dist/reset.css';
import { Button, Form, Input } from 'antd';

function App() {
  return (
    <div className="App">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        style={{ maxWidth: '300px', margin: '100px auto' }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
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

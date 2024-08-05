import React, { useState } from 'react';
import { Layout, Form, Input, Button, Alert, Typography,Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import kermitImage from './img/Kermit.jpg';

const { Content } = Layout;
const { Title } = Typography;

const Login: React.FC = () => {
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
      localStorage.setItem('username', username); // This is the place to store the login status
      localStorage.setItem('isLoggedIn', 'true');
      navigate(`/dashboard/${username}`, { replace: true });
    } else {
      setError('Login failed. Please check your username and password.');
    }
  };

  return (
    <Layout style={{ minHeight: '100vh', background:'white'}}>
      <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Flex wrap="wrap" align="center" justify="center" style={{ width: '100%'}}>
          <Flex vertical={true} align="center" style={{ flex: 1, marginRight: '20px', minWidth: '200px' }}>
            <div style={{ textAlign: 'center' }}>
              <Title>Sign in to your Community</Title>
              <p>If you don't have a community register</p>
              <a href="/register" style={{ color: '#1890ff', fontSize: '16px' }}>Register here!</a>
            </div>
            <div style={{ textAlign: 'end', marginTop: '20px' }}>
              <img src={kermitImage} alt="Kermit" style={{ width: '200px' }} />
            </div>
          </Flex>
          <div style={{ flex: 1, textAlign: 'center', minWidth: '300px' }}>
            <Title level={3}>Sign in</Title>
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
              style={{ maxWidth: '300px', margin: '0 auto' }}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input placeholder="Community Name" value={username} onChange={(e) => setUsername(e.target.value)} />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </Form.Item>
              <Form.Item>
                <a href="/forgot-password">Forgot password?</a>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: '100%', backgroundColor: '#722ed1', borderColor: '#722ed1' }}>
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Flex>
      </Content>
    </Layout>
  );
};

export default Login;

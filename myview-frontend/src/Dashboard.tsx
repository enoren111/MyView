import React from 'react';
import { UserOutlined, VideoCameraOutlined, HomeOutlined, SettingOutlined, ShopOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Row, Col, Typography, Button, Card, Avatar } from 'antd';
import { useParams, Link } from 'react-router-dom';

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

const Dashboard: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const items = [
    { key: '1', icon: React.createElement(HomeOutlined), label: <Link to={`/dashboard/${username}`}>Home</Link> },
    { key: '2', icon: React.createElement(UserOutlined), label: <Link to={`/character-panel/${username}`}>Character Panel</Link> },
    { key: '3', icon: React.createElement(VideoCameraOutlined), label: <Link to={`/story-creation/${username}`}>Story Creation</Link> },
    { key: '4', icon: React.createElement(ShopOutlined), label: <Link to={`/community-overview/${username}`}>Community Overview</Link> },
    { key: '5', icon: React.createElement(SettingOutlined), label: <Link to={`/settings/${username}`}>Settings</Link> },
];
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{ background: "white" }}
      >
        <div className="navigator">
          <div style={{ padding: '16px', fontSize: '24px' }}>{username}</div>
          <div style={{ padding: '16px', fontSize: '16px' }}>navigator</div>
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} items={items} />
        </div>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: '#fff' }}>
          <Title level={1} style={{ textAlign: 'center' }}>
            Welcome Back To {username}'s Home
          </Title>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: '#fff',
              borderRadius: '8px',
            }}
          >

            <Title level={3} style={{ textAlign: 'center' }}>
              Your Team Recent Activities
            </Title>
            <Row gutter={16} style={{ marginTop: '24px' }}>
              <Col span={8}>
                <Card title="Add X Figure" extra={<Avatar src="https://api.dicebear.com/9.x/pixel-art/svg?seed=Zoe" alt='avatar' />}>
                  <p>Name</p>
                  <p>Time</p>
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Modify Settings" extra={<Avatar src="https://api.dicebear.com/9.x/pixel-art/svg?seed=Max" alt="avatar" />}>
                  <p>Name</p>
                  <p>Time</p>
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Add a new scenario" extra={<Avatar src="https://api.dicebear.com/9.x/pixel-art/svg?seed=Bob" alt="avatar" />}>
                  <p>Name</p>
                  <p>Time</p>
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Update X character" extra={<Avatar src="https://api.dicebear.com/9.x/pixel-art/svg?seed=George" alt="avatar" />}>
                  <p>Name</p>
                  <p>Time</p>
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Release a New Story" extra={<Avatar src="https://api.dicebear.com/9.x/pixel-art/svg?seed=Kitty" alt="avatar" />}>
                  <p>Name</p>
                  <p>Time</p>
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Create a new story" extra={<Avatar src="https://api.dicebear.com/9.x/pixel-art/svg?seed=Jasper" alt="avatar" />}>
                  <p>Name</p>
                  <p>Time</p>
                </Card>
              </Col>
            </Row>
            <div style={{ textAlign: 'center', marginTop: '24px' }}>
              <Button type="primary" style={{ marginRight: '16px' }}>
                Create A New Story
              </Button>
              <Button type="primary">
                Create A Character
              </Button>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;

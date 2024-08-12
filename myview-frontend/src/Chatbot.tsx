import React, { useState } from 'react';
import { Layout, Menu, Input, Card, Button, Row, Col, Typography } from 'antd';
import { UserOutlined, VideoCameraOutlined, HomeOutlined, SettingOutlined, ShopOutlined } from '@ant-design/icons';
import { useParams, Link as RouterLink} from 'react-router-dom';
import './App.css'; // Create a CSS file for your styles


const { Header, Content, Sider } = Layout;
const { Title } = Typography;
const { TextArea } = Input;


const Chatbot: React.FC = () => {
    const { username } = useParams<{ username: string }>();
    const [selectedKey, setSelectedKey] = useState('2'); // Set initial selected key
    const [prompt, setPrompt] = useState(''); // State for the input prompt

    const items = [
        { key: '1', icon: React.createElement(HomeOutlined), label: <RouterLink to={`/dashboard/${username}`}>Home</RouterLink> },
        { key: '2', icon: React.createElement(UserOutlined), label: <RouterLink to={`/character-panel/${username}`}>Character Panel</RouterLink> },
        { key: '3', icon: React.createElement(VideoCameraOutlined), label: <RouterLink to={`/story-panel/${username}`}>Story Panel</RouterLink> },
        { key: '4', icon: React.createElement(ShopOutlined), label: <RouterLink to={`/community-panel/${username}`}>Community Panel</RouterLink> },
        { key: '5', icon: React.createElement(SettingOutlined), label: <RouterLink to={`/settings/${username}`}>Settings</RouterLink> },
      ];

    const handleMenuClick = (e: any) => {
        setSelectedKey(e.key);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPrompt(e.target.value);
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
                style={{ background: "white" }}>
                <div className="navigator">
                    <div style={{ padding: '16px', fontSize: '24px' }}>{username}</div>
                    <div style={{ padding: '16px', fontSize: '16px' }}>navigator</div>
                    <Menu
                        theme="light"
                        mode="inline"
                        selectedKeys={[selectedKey]}
                        onClick={handleMenuClick}
                        items={items}
                    />
                </div>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <div>
                        <Title level={2} style={{ margin: 0 }}>Seek your Inspirations</Title>
                    </div>
                </Header>
                <Content style={{ padding: '0 24px', background: '#ffffff' }}>
                    <Row gutter={24}>
                        <Col span={16}>
                        <div>
                            <Title level={3} style={{ margin: 0 }}>Please write down what you want to do</Title>
                        </div>
                            <TextArea
                                placeholder="This is the place to write a prompt."
                                autoSize={{ minRows: 4, maxRows: 6 }}
                                value={prompt} // Bind the state to TextArea
                                onChange={handleInputChange}
                                style={{ marginBottom: 16, borderRadius: 8 }}
                            />
                        </Col>
                        <Col span={8}>
                            <Card style={{ borderRadius: 10 }}>
                                <h3>Get Your Suggestions!</h3>
                                <p style={{ color: '#666666' }}>
                                    A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.
                                </p>
                                <Button type="primary" style={{ marginRight: 8 }}>Proceed</Button>
                                <Button>Save</Button>
                            </Card>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Chatbot;

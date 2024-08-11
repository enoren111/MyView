import React, { useState } from 'react';
import { Layout, Menu, Input, Card, Avatar, Button, Row, Col, Typography } from 'antd';
import { UserOutlined, VideoCameraOutlined, HomeOutlined, SettingOutlined, ShopOutlined } from '@ant-design/icons';
import { SearchOutlined } from '@ant-design/icons';
import { useParams, Link as RouterLink } from 'react-router-dom';
import './App.css'; // Create a CSS file for your styles


const { Header, Content, Sider } = Layout;
const { Meta } = Card;
const { Link } = Typography;


const CharacterPanel: React.FC = () => {
    const { username } = useParams<{ username: string }>();
    const [selectedKey, setSelectedKey] = useState('2'); // Set initial selected key

    const items = [
        { key: '1', icon: React.createElement(HomeOutlined), label: <RouterLink to={`/dashboard/${username}`}>Home</RouterLink> },
        { key: '2', icon: React.createElement(UserOutlined), label: <RouterLink to={`/character-panel/${username}`}>Character Panel</RouterLink> },
        { key: '3', icon: React.createElement(VideoCameraOutlined), label: <RouterLink to={`/story-panel;/${username}`}>Story Panel</RouterLink> },
        { key: '4', icon: React.createElement(ShopOutlined), label: <RouterLink to={`/community-panel/${username}`}>Community Panel</RouterLink> },
        { key: '5', icon: React.createElement(SettingOutlined), label: <RouterLink to={`/settings/${username}`}>Settings</RouterLink> },
    ];

    const handleMenuClick = (e: any) => {
        setSelectedKey(e.key);
    };

    const luppets = [
        { name: 'Luppet 1', description: 'Description of luppet', img: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Felix' },
        { name: 'Luppet 2', description: 'Description of luppet', img: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Annie' },
        { name: 'Luppet 3', description: 'Description of luppet', img: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Gracie' },
        { name: 'Luppet 4', description: 'Description of luppet', img: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Willow' },
    ];

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
                    <Input
                        placeholder="Search your luppets"
                        prefix={<SearchOutlined />}
                        style={{ width: 300, marginLeft: 24 }}
                    />
                </Header>
                <Content
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    <Row gutter={24}>
                        <Col span={16}>
                            <h3>Recent Search:</h3>
                            <Row gutter={[16, 16]}>
                                {luppets.map((luppet, index) => (
                                    <Col span={12} key={index}>
                                        <Card
                                            style={{ width: '100%' }}
                                            cover={
                                                <Avatar
                                                    src={luppet.img}
                                                    size={64}
                                                    style={{
                                                        verticalAlign: 'middle',
                                                        marginTop: 16,
                                                        marginLeft: 16,
                                                    }}
                                                >
                                                    {luppet.name[0]}
                                                </Avatar>
                                            }
                                        >
                                            <Meta
                                                title={luppet.name}
                                                description={luppet.description}
                                            />
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                        <Col span={8}>
                            <h3>Search Result:</h3>
                            <Card style={{ width: '100%' }}>
                                <Meta
                                    avatar={<Avatar size={64} icon={<SearchOutlined />} />}
                                    title="Sesayu Street"
                                    description="Brief introduction"
                                />
                            </Card>
                            <div style={{ marginTop: 16, display: 'flex', alignItems: 'center' }}>
                                <Link href="#" style={{ marginRight: 16 }}>See Details</Link>
                                <Button type="primary">Create New</Button>
                            </div>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </Layout>
    );
};

export default CharacterPanel;

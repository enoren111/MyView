import React, { useState } from 'react';
import { Layout, Menu, Card, Row, Col, Button, Typography, Input, Avatar } from 'antd';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { UserOutlined, VideoCameraOutlined, HomeOutlined, SettingOutlined, ShopOutlined, SearchOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;
const { Title } = Typography;
const { Search } = Input;
const { Meta } = Card;

const Dashboard: React.FC = () => {
    const { username } = useParams<{ username: string }>();
    const [selectedKey, setSelectedKey] = useState('3'); // Set initial selected key
    const navigate = useNavigate();

    const items = [
        { key: '1', icon: React.createElement(HomeOutlined), label: <Link to={`/dashboard/${username}`}>Home</Link> },
        { key: '2', icon: React.createElement(UserOutlined), label: <Link to={`/character-panel/${username}`}>Character Panel</Link> },
        { key: '3', icon: React.createElement(VideoCameraOutlined), label: <Link to={`/story-panel/${username}`}>Story Panel</Link> },
        { key: '4', icon: React.createElement(ShopOutlined), label: <Link to={`/community-panel/${username}`}>Community Panel</Link> },
        { key: '5', icon: React.createElement(SettingOutlined), label: <Link to={`/settings/${username}`}>Settings</Link> },
    ];

    const handleMenuClick = (e: any) => {
        setSelectedKey(e.key);
    };

    const handleChatbotRedirect = () => {
        navigate(`/story-panel/chatbot/${username}`);  
    };

    const onSearch = (value: string) => console.log(value);

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
                    <Menu theme="light"
                        mode="inline"
                        selectedKeys={[selectedKey]}
                        onClick={handleMenuClick}
                        items={items} />
                </div>
            </Sider>
            <Layout>
                <Header style={{ padding: '0 16px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                        <Title level={2} style={{ margin: 0 }}>Curricula</Title>
                    </div>
                    <Search
                        placeholder="Curriculum Name/Characters"
                        allowClear
                        enterButton={<SearchOutlined />}
                        size="large"
                        onSearch={onSearch}
                        style={{ width: '300px' }}
                    />
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
                        <Row gutter={16} style={{ marginTop: '24px' }}>
                            <Col span={6}>
                                <Card
                                    style={{ width: 300 }}
                                    cover={
                                        <img
                                            alt="example"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                        />
                                    }
                                    actions={[
                                        <SettingOutlined key="setting" />,
                                        <EditOutlined key="edit" />,
                                        <EllipsisOutlined key="ellipsis" />,
                                    ]}
                                >
                                    <Meta
                                        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                                        title="Card title"
                                        description="This is the description"
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card
                                    style={{ width: 300 }}
                                    cover={
                                        <img
                                            alt="example"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                        />
                                    }
                                    actions={[
                                        <SettingOutlined key="setting" />,
                                        <EditOutlined key="edit" />,
                                        <EllipsisOutlined key="ellipsis" />,
                                    ]}
                                >
                                    <Meta
                                        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                                        title="Card title"
                                        description="This is the description"
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card
                                    style={{ width: 300 }}
                                    cover={
                                        <img
                                            alt="example"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                        />
                                    }
                                    actions={[
                                        <SettingOutlined key="setting" />,
                                        <EditOutlined key="edit" />,
                                        <EllipsisOutlined key="ellipsis" />,
                                    ]}
                                >
                                    <Meta
                                        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                                        title="Card title"
                                        description="This is the description"
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card
                                    style={{ width: 300 }}
                                    cover={
                                        <img
                                            alt="example"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                        />
                                    }
                                    actions={[
                                        <SettingOutlined key="setting" />,
                                        <EditOutlined key="edit" />,
                                        <EllipsisOutlined key="ellipsis" />,
                                    ]}
                                >
                                    <Meta
                                        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                                        title="Card title"
                                        description="This is the description"
                                    />
                                </Card>
                            </Col>
                        </Row>
                        <div style={{ textAlign: 'center', marginTop: '24px' }}>
                            <Title level={4}>Start with a new Topic?</Title>
                            <Button type="primary">Add it manually</Button>
                            <Button type="primary" onClick={handleChatbotRedirect}>Start with talking to bot</Button>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Dashboard;

import { useEffect, useState } from "react";
import { Layout, Menu, Avatar, Typography, Button, Spin } from "antd";
import {
    UserOutlined,
    DashboardOutlined,
    BookOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../style/style.css";
const { Sider } = Layout;
const { Title, Text } = Typography;
import { API_BASE_URL } from "../../constants";
const Sidebar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [userProfile, setUserProfile] = useState<any | null>([]);
    const [error, setError] = useState<string | null>(null);
    const fetchUserData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${API_BASE_URL}users/2`);
            if (!response.ok) throw new Error("Failed to fetch user data");
            console.log("Response=", response);
            const data: any = await response.json();
            setUserProfile(data);
            data?.name ? setLoading(false) : setLoading(true);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <Sider
            collapsible
            collapsed={collapsed}
            trigger={null} // Remove default trigger
            width={250}
            className={`sider-collapse ${collapsed ? "collapse-end" : "collapse-center"}`}
        >
            {/* Toggle Button */}
            < Button
                type="text"
                onClick={() => setCollapsed(!collapsed)}
                className={`sider-collapse-btn ${collapsed ? "collapse-end" : "collapse-end"}`}

            >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button >

            {/* User Profile (Shown only when expanded) */}
            <Spin size="large" spinning={loading} tip="Loading..."></Spin>
            {

                !collapsed && userProfile?.name && (
                    <div style={{ textAlign: "center", marginBottom: 20 }}>
                        <Avatar size={64} icon={<UserOutlined />} />
                        <Title level={4} style={{ marginTop: 10 }}>{userProfile.name}</Title>
                        <Text type="secondary">{userProfile.email}</Text>
                    </div>
                )

            }
            {error && (<Text type="danger">{error}</Text>)}

            {/* Navigation Menu */}
            <Menu mode="vertical" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1" icon={<DashboardOutlined />}>
                    <Link to="/">Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<BookOutlined />}>
                    <Link to="/blogs">Blogs</Link>
                </Menu.Item>
            </Menu>
        </Sider >
    );
};

export default Sidebar;

import { Layout, Input, Button, Badge, Avatar, Dropdown, Menu } from "antd";
import { PlusOutlined, BellOutlined, UserOutlined } from "@ant-design/icons";
import "../style/style.css";
const { Header } = Layout;

const ProfileMenu = (
  <Menu>
    <Menu.Item key="1">Profile</Menu.Item>
    <Menu.Item key="2">Settings</Menu.Item>
    <Menu.Item key="3">Logout</Menu.Item>
  </Menu>
);

const AppHeader: React.FC = () => {
  return (
    <Header className="header-class">
      {/* Search Bar */}
      <Input.Search placeholder="Search..." className="header-searchbox" />

      {/* Actions: Add Button, Notification, Profile */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {/* Add Button */}
        <Button type="primary" icon={<PlusOutlined />}>Add</Button>

        {/* Notification Icon */}
        <Badge count={3} size="small">
          <BellOutlined style={{ fontSize: 20, cursor: "pointer" }} />
        </Badge>

        {/* Profile Picture */}
        <Dropdown overlay={ProfileMenu} trigger={["click"]}>
          <Avatar size="large" icon={<UserOutlined />} style={{ cursor: "pointer" }} />
        </Dropdown>
      </div>
    </Header>
  );
};

export default AppHeader;

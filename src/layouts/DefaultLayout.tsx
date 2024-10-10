import { DoubleLeftOutlined } from "@ant-design/icons";
import {
  Avatar,
  Col,
  Divider,
  Dropdown,
  Image,
  Layout,
  Menu,
  MenuProps,
  Row,
} from "antd";
import img_logo from "assets/img_logo.svg";
import { CommonIcons } from "components/CommonIcons";
import { CustomTypography } from "components/CustomTypography";
import { isEmpty } from "lodash";
import { useAuth } from "providers/AuthenticationProvider";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import routes from "routers";
import { IRoute } from "routers/interface.router";
import LocalStorage from "utils/LocalStorage";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  //! state
  const { Header, Sider, Content } = Layout;
  const { SubMenu } = Menu;

  const auth = useAuth();
  const user = LocalStorage.get("user");
  const [collapsed, setCollapsed] = useState(false);

  //! function
  const renderTrigger = (
    <>
      <Divider className="m-0" />
      {collapsed ? <CommonIcons.RightOutlined /> : <CommonIcons.LeftOutlined />}
    </>
  );

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div>
          <CommonIcons.LogoutOutlined />
          <CustomTypography.Text title=" Đăng Xuất" />
        </div>
      ),
      onClick: () => auth.logout(),
    },
  ];

  const renderMenu = (data: IRoute[]) => {
    const dataLayout = data.filter((item) => item.isPrivateRoute);
    return dataLayout.map((route) => {
      return !isEmpty(route.routeChild) ? (
        <SubMenu key={route.key} title={route.name} icon={route.icon}>
          {renderMenu(route.routeChild)}
        </SubMenu>
      ) : (
        <Menu.Item key={route.key} icon={route.icon}>
          <Link to={route.path}>{route.name}</Link>
        </Menu.Item>
      );
    });
  };

  //! useEffect

  //! render
  return (
    <Layout className="h-screen">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={270}
        trigger={renderTrigger}
      >
        <div className="h-[64px] flex justify-center items-center bg-[#2579F2]">
          <DoubleLeftOutlined style={{ fontSize: "30px" }} />
          {!collapsed && (
            <CustomTypography.Text
              strong
              title="Trở về DoardBoard"
              className="text-white"
            />
          )}
        </div>
        <Divider className="m-0" />
        <Menu theme="light" mode="inline">
          {renderMenu(routes)}
        </Menu>
      </Sider>
      <Layout>
        <Header className="p-4 bg-[#2579F2] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              width={50}
              height={50}
              preview={false}
              src={img_logo}
              className="color-white"
            />
            <CustomTypography.Text
              strong
              title="Admin quản lý"
              className="text-white"
            />
          </div>
          <div className="flex items-center gap-2">
            <CustomTypography.Text
              title={user?.username || "User"}
              className="text-white"
            />
            <Dropdown
              placement="bottomRight"
              menu={{ items }}
              trigger={["click"]}
              className="cursor-pointer "
            >
              <Avatar />
            </Dropdown>
          </div>
        </Header>
        <Content className="m-4 p-6 min-h-[280px] bg-[#fff] rounded-[8px]">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;

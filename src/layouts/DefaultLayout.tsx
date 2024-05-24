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
import LOGO_BCA from "assets/icons/logo_BCA.svg";
import { CommonIcons } from "components/CommonIcons";
import { CustomTypography } from "components/CustomTypography";
import { isEmpty } from "lodash";
import { useAuth } from "providers/AuthenticationProvider";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import routes, { IRoute } from "routers";
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
        <div className="h-[64px] flex justify-center items-center bg-white">
          {!collapsed && <CustomTypography.Text strong title="Huy" />}
        </div>
        <Divider className="m-0" />
        <Menu theme="light" mode="inline">
          {renderMenu(routes)}
        </Menu>
      </Sider>
      <Layout>
        <Header className="p-4 bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image width={50} height={50} preview={false} src={LOGO_BCA} />
            <CustomTypography.Text strong title="TRUNG TÂM" />
          </div>
          <div className="flex items-center gap-2">
            <CustomTypography.Text title={user?.username || "User"} />
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

import {
  LeftOutlined,
  RightOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Layout, MenuProps, Image, Button } from "antd";
import { CommonIcons } from "components/CommonIcons";
import { CustomTypography } from "components/CustomTypography";
import { useAuth } from "providers/AuthenticationProvider";
import LocalStorage from "utils/LocalStorage";
import LOGO_BCA from "assets/icons/logo_BCA.svg";
import Search from "antd/es/input/Search";
import { Footer } from "antd/es/layout/layout";
import { createContext, useEffect } from "react";
import useTopheader from "hooks/header/topHeader";
import useMidHeader from "hooks/header/midHeader";
import useBotHeader from "hooks/header/botHeader";

export const TopHeaderDataContext = createContext<any>({
  ListTopHeaderData: [],
});
export const MidHeaderDataContext = createContext<any>({
  ListMidHeaderData: [],
});
export const BotHeaderDataContext = createContext<any>({
  ListMidHeaderData: [],
});
const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  //top header
  const { data: topHeader } = useTopheader();
  //mid header
  const { data: midHeader } = useMidHeader();
  //bot header
  const { data: botHeader } = useBotHeader();
  //! state
  const { Header, Content } = Layout;
  const auth = useAuth();
  const user = LocalStorage.get("user");

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

  return (
    <Layout className="h-screen">
      <Header className="p-0 bg-blueHeader flex flex-col items-center justify-between text-white h-[auto]">
        <div className="w-full justify-center bg-[#0A59CC] h-[42px] hidden lg:flex">
          <div className="w-full xl:w-4/5  flex justify-between  h-[42px] mr-3 ml-3">
            <div className="flex items-center gap-1 hover:underline">
              <LeftOutlined />
              <RightOutlined />
              <CustomTypography.Text
                strong
                title="Giải trí cùng các sản phẩm mới"
                className="text-white"
              />
            </div>
            <div className="flex items-center gap-5 hover:underline">
              {topHeader.map((item, index) => (
                <div key={index} className="flex flex-row items-center gap-2">
                  <img
                    loading="lazy"
                    src={`https://divineshop.vn${item.icon}`}
                    className="max-h-[20px] max-w-[21px] filter-icon-white"
                    alt={item.text}
                  />
                  {/* <div className="text-white w-auto">{item.text}</div> */}
                  <CustomTypography.Text
                    strong
                    title={item.text}
                    className="text-white w-[170px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full xl:w-4/5">
          <div className="flex items-center gap-2 w-full justify-between pt-1">
            <div className="items-center gap-2 hidden sm:flex">
              <Image width={50} height={50} preview={false} src={LOGO_BCA} />
              <CustomTypography.Text
                title="ABC Gì gì đó"
                strong
                className="text-white"
              />
            </div>
            <div className="flex items-center gap-2 sm:hidden">
              <UnorderedListOutlined />
            </div>
            <Search
              placeholder="tìm kiếm"
              allowClear
              style={{ width: "300px" }}
            />
            <div className="hidden md:block">
              <Avatar size="large" icon={<UserOutlined />} />
              <CustomTypography.Text
                strong
                title=" Đăng nhập / Đăng kí"
                className="text-white"
              />
            </div>
            <>
              <Button
                type="primary"
                icon={<ShoppingCartOutlined style={{ fontSize: "20px" }} />}
                style={{ borderColor: "white" }}
              >
                Giở hàng {0}
              </Button>
            </>
          </div>
          <div className="hidden lg:flex items-center justify-between">
            {midHeader.map((item, index) => (
              <div
                className="flex flex-row gap-2 items-center"
                style={{ cursor: "pointer" }}
              >
                <img
                  className="filter-icon-white"
                  style={{
                    maxWidth: "100%",
                    width: "1.5rem",
                    height: "1.25rem",
                  }}
                  loading="lazy"
                  src={`https://divineshop.vn${item.icon}`}
                  alt={item.text}
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full hidden lg:flex justify-center  bg-[#fff] h-auto">
          <div
            className="w-full xl:w-4/5  flex items-center justify-between  h-[42px]"
            style={{ color: "black" }}
          >
            <div className="flex items-center gap-2 ">
              <UnorderedListOutlined />
              <CustomTypography.Text
                title="Danh mục sẩn phẩm"
                strong
                className="cursor-pointer"
              />
            </div>
            <div className="hidden lg:flex items-center justify-between">
              {botHeader.map((item, index) => (
                <div key={index} className="flex flex-row gap-2 items-center">
                  <img
                    loading="lazy"
                    src={`https://divineshop.vn${item.icon}`}
                    className="max-h-[35px] max-w-[35px] ml-5"
                    alt={item.text}
                  />
                  <p className="hidden lg:flex">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Header>
      <Content className="bg-[#f0f0f0] pt-4 h-[100%]">{children}</Content>
      {/* <Footer className="bg-[#000D21]">
        <div>Footer</div>
      </Footer> */}
    </Layout>
  );
};

export default DefaultLayout;

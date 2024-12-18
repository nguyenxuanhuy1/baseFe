import {
  LeftOutlined,
  RightOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Layout,
  MenuProps,
  Image,
  Button,
  Popover,
  Typography,
} from "antd";
import { CommonIcons } from "components/CommonIcons";
import { CustomTypography } from "components/CustomTypography";
import { useAuth } from "providers/AuthenticationProvider";
import Search from "antd/es/input/Search";
import { Footer } from "antd/es/layout/layout";
import { createContext, useEffect, useState } from "react";
import useTopheader from "hooks/header/topHeader";
import useMidHeader from "hooks/header/midHeader";
import useBotHeader from "hooks/header/botHeader";
import Login from "./Login/FormLogin";
import useMenu from "hooks/menu/menu";

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
  //call menu khi màn hình về chế độ điện thoại tưucs là kích thước sm
  const { data: menu } = useMenu();
  //! state

  const [openModal, setOpenModal] = useState<boolean>(false);
  const { Header, Content } = Layout;
  const auth = useAuth();
  const [userName, setUserName] = useState("");
  // const { user, isAuthenticated } = useLogin();

  // đang fix cứng đoạn text header
  const titles = [
    "Giải trí cùng các sản phẩm mới",
    "Khám phá công nghệ hiện đại",
    "Sản phẩm độc đáo và ưu đãi lớn",
    "Anh xuân huy đây ",
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const user = localStorage?.getItem("user");
    if (user) {
      setUserName(JSON.parse(user)?.username);
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  // Hàm chuyển đến tiêu đề tiếp theo
  const handleNext = () => {
    setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
  };

  // Hàm quay lại tiêu đề trước đó
  const handlePrevious = () => {
    setCurrentTitleIndex(
      (prevIndex) => (prevIndex - 1 + titles.length) % titles.length
    );
  };

  //
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
  const [open, setOpen] = useState(false);
  const content = (
    <div className="container-menu-sm-login">
      <div
        className="menu-sm-login"
        onClick={() => {
          setOpen(false);
          setOpenModal(true);
        }}
      >
        <div className="icon-sm-login">
          <UserOutlined />
        </div>
        {userName ? <div>Sếp - {userName}</div> : <div>Đăng nhập/đăng kí</div>}
      </div>
      {menu.map((menuItem, index) => (
        <a key={index} href={menuItem.link} className="item-image">
          <img
            className="ic-img-menu"
            loading="lazy"
            src={`https://divineshop.vn${menuItem.icon}`}
            alt={menuItem.text}
          />
          <span className="sp-menu">{menuItem.text}</span>
        </a>
      ))}
      <div
        style={{
          // backgroundColor: "red",
          height: "2.5rem",
          borderRadius: "5px",
          // color: "white",
        }}
        onClick={() => {
          localStorage.clear();
          setUserName("");
        }}
      >
        Đăng xuất
      </div>
    </div>
  );
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  return (
    <Layout className="h-screen">
      <Header className="p-0 bg-blueHeader flex flex-col items-center justify-between text-white h-[auto]">
        <div className="w-full justify-center bg-[#0A59CC] h-[42px] hidden lg:flex">
          <div className="w-full xl:w-[1200px]  flex justify-between  h-[42px] mr-3 ml-3">
            <div className="flex items-center gap-1 hover:underline">
              <LeftOutlined onClick={handleNext} />
              <RightOutlined onClick={handlePrevious} />
              <Typography.Text
                strong
                title={titles[currentTitleIndex]}
                className="text-white"
              >
                {titles[currentTitleIndex]}
              </Typography.Text>
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
                  <div className="text-white w-auto">
                    <p className="w-auto min-w-[140px]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full xl:w-[1200px]">
          <div className="flex items-center gap-2 w-full justify-between pt-1">
            <div>
              <a
                href={process.env.REACT_APP_BASE_URL}
                className="items-center gap-2 hidden sm:flex"
              >
                <Image
                  className="hover-image"
                  width={50}
                  height={50}
                  preview={false}
                  src="https://images.vexels.com/content/279873/preview/dragon-high-contrast-head-de3570.png"
                />
                <CustomTypography.Text
                  title="TADA SH"
                  strong
                  className="hover-text"
                />
              </a>
            </div>
            <Popover
              className="menu-sm"
              trigger="click"
              open={open}
              onOpenChange={handleOpenChange}
              content={content}
              arrow={false}
            >
              <UnorderedListOutlined className="text-2xl pl-[24px]" />
            </Popover>
            <Search
              placeholder="tìm kiếm"
              allowClear
              className="input-search"
            />
            <div className="hidden md:block">
              <div style={{ cursor: "pointer" }}>
                <Avatar
                  size="large"
                  icon={<UserOutlined />}
                  onClick={() => setOpenModal(true)}
                />
                <CustomTypography.Text
                  strong
                  title="Đăng nhập / Đăng kí"
                  className="hidden lg:inline-block text-white"
                  onClick={() => setOpenModal(true)}
                />
                {openModal && (
                  <Login
                    open={openModal}
                    onCancel={() => setOpenModal(false)}
                  />
                )}
              </div>
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
          <div className="hidden lg:flex items-center justify-between h-[45px]">
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
            className="w-full xl:w-[1200px]  flex items-center justify-between h-[42px]"
            style={{ color: "black" }}
          >
            <div className="flex items-center gap-2 ">
              <UnorderedListOutlined className="text-2xl" />
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
      <Content
        className="bg-[#fefeff] pt-4"
        style={{
          // maxHeight: "calc(100vh)",
          // overflow: "auto",
          fontFamily: "sans-serif",
        }}
      >
        {children}
      </Content>
    </Layout>
  );
};

export default DefaultLayout;

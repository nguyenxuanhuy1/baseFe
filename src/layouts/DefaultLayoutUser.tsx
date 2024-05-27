import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CopyOutlined,
  CreditCardFilled,
  EnvironmentFilled,
  EyeFilled,
  FireFilled,
  PercentageOutlined,
  PhoneOutlined,
  ShoppingCartOutlined,
  StrikethroughOutlined,
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
const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
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
        <div className="w-4/5">
          <div className="flex items-center gap-2 w-full justify-between bg-[#0A59CC] h-[44px]">
            <div className="flex items-center gap-2">
              <ArrowLeftOutlined />
              <ArrowRightOutlined />
              <CustomTypography.Text
                strong
                title="Giải trí cực mạnh"
                className="text-white"
              />
            </div>
            <div className="flex items-center gap-5 hover:underline">
              <div>
                <StrikethroughOutlined />
                <CustomTypography.Text
                  strong
                  title="ưu đãi"
                  className="text-white"
                />
              </div>
              <div>
                <PhoneOutlined />
                <CustomTypography.Text
                  strong
                  title="thông tin liên hệ"
                  className="text-white"
                />
              </div>
              <div>
                <CopyOutlined />
                <CustomTypography.Text
                  strong
                  title="hướng dẫn"
                  className="text-white"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full justify-between">
            <div className="flex items-center gap-2">
              <Image width={50} height={50} preview={false} src={LOGO_BCA} />
              <CustomTypography.Text
                title="ABC Gì gì đó"
                strong
                className="text-white"
              />
            </div>
            <Search
              placeholder="tìm kiếm"
              allowClear
              style={{ width: "300px" }}
            />
            <div>
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
          <div className="flex items-center gap-2 w-full justify-between pb-3">
            <div className="flex items-center gap-2">
              <EyeFilled />
              <CustomTypography.Text
                title="Sản phẩm bạn vừa xem"
                strong
                className="text-white cursor-pointer"
              />
            </div>
            <div className="flex items-center gap-2">
              <FireFilled />
              <CustomTypography.Text
                title="Sản phẩm bạn mua nhiều"
                strong
                className="text-white cursor-pointer"
              />
            </div>

            <div className="flex items-center gap-2">
              <PercentageOutlined />
              <CustomTypography.Text
                title="Sản phẩm khuyến mại"
                strong
                className="text-white cursor-pointer"
              />
            </div>
            <div className="flex items-center gap-2">
              <EnvironmentFilled />
              <CustomTypography.Text
                title="Đại lý giao dịch"
                strong
                className="text-white cursor-pointer"
              />
            </div>
            <div className="flex items-center gap-2">
              <CreditCardFilled />
              <CustomTypography.Text
                title="Hình thức thành toán"
                strong
                className="text-white cursor-pointer"
              />
            </div>
          </div>
        </div>
      </Header>
      <Content className="p-0 bg-[#F3F4F6] flex flex-col items-center justify-between h-[auto] mt-4">
        <div className="w-4/5">{children}</div>
      </Content>
      <Footer className="bg-[#000D21]">
        <div>Footer</div>
      </Footer>
    </Layout>
  );
};

export default DefaultLayout;

import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CopyOutlined,
  CreditCardFilled,
  CreditCardOutlined,
  EnvironmentFilled,
  EnvironmentOutlined,
  EyeFilled,
  EyeOutlined,
  FireFilled,
  PercentageOutlined,
  PhoneOutlined,
  ShoppingCartOutlined,
  StrikethroughOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, Layout, MenuProps, Image, Button } from "antd";
import { CommonIcons } from "components/CommonIcons";
import { CustomTypography } from "components/CustomTypography";
import { useAuth } from "providers/AuthenticationProvider";
import LocalStorage from "utils/LocalStorage";
import LOGO_BCA from "assets/icons/logo_BCA.svg";
import Search from "antd/es/input/Search";
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
      <Layout>
        <Header className="p-0  bg-blueHeader flex flex-col items-center justify-between text-white h-[auto]">
          <div className="flex items-center gap-2 w-full justify-between bg-[#0A59CC]">
            <div className="flex items-center gap-2">
              <ArrowLeftOutlined />
              <ArrowRightOutlined />
              <CustomTypography.Text
                strong
                title="Giải trí cực mạnh"
                className="text-white"
              />
            </div>
            <div className="flex items-center gap-2  hover:underline">
              <StrikethroughOutlined />
              <CustomTypography.Text
                strong
                title="ưu đãi"
                className="text-white"
              />
              <>
                <PhoneOutlined />
                <CustomTypography.Text
                  strong
                  title="thông tin liên hệ"
                  className="text-white"
                />
              </>
              <>
                <CopyOutlined />
                <CustomTypography.Text
                  strong
                  title="hướng dẫn"
                  className="text-white"
                />
              </>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full justify-between mt-4">
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
                className="text-white"
              />
            </div>
            <div className="flex items-center gap-2">
              <FireFilled />
              <CustomTypography.Text
                title="Sản phẩm bạn mua nhiều"
                strong
                className="text-white"
              />
            </div>

            <div className="flex items-center gap-2">
              <PercentageOutlined />
              <CustomTypography.Text
                title="Sản phẩm khuyến mại"
                strong
                className="text-white"
              />
            </div>
            <div className="flex items-center gap-2">
              <EnvironmentFilled />
              <CustomTypography.Text
                title="Đại lý giao dịch"
                strong
                className="text-white"
              />
            </div>
            <div className="flex items-center gap-2">
              <CreditCardFilled />
              <CustomTypography.Text
                title="Hình thức thành toán"
                strong
                className="text-white"
              />
            </div>
          </div>
        </Header>
        <Content className="p- min-h-[280px] bg-[#fff] rounded-[8px]">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;

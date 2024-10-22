import {
  BarcodeOutlined,
  DropboxOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  TagOutlined,
} from "@ant-design/icons";
import { useContext, useEffect, useState } from "react";
import { SyncDataContext } from "..";
import { useLocation } from "react-router-dom";
import httpMethod from "services/httpMethod";

const Details = () => {
  const { productId, productSlug } = useContext(SyncDataContext);

  const [data, setData] = useState(null);
  const [tags, setTags] = useState([]);
  const [productInfo, setProductInfo] = useState("");
  const location = useLocation();
  //

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await httpMethod.get(
          `https://divineshop.vn/page-data/${location.state.slug}/page-data.json`
        );
        const result = response.data;
        setData(result);
        setTags(result?.result.data.product.tags);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [location.state.slug]); // Hoặc [productSlug] nếu sử dụng productSlug

  //
  // call api lấy dữ liệu cho mô tả chi tiết
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://divineshop.vn/api/product/description?id=${location.state.id}`
        );
        const result = await response.json();
        setProductInfo(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [productId]);

  // call ippai ìnor sản phẩm

  //
  return (
    <div className="container-page-details">
      <div>
        <div className="details-content">
          <div className="image-container">
            <img
              loading="lazy"
              src={`https://divineshop.vn/${data?.result?.data?.product?.image}`}
              className="image"
            />
            <p className="image-caption" onClick={() => {}}>
              Xem thêm ảnh
            </p>
          </div>
          <div className="text-content">
            <div>
              <div>Sản phẩm</div>
              <div style={{ fontSize: "1.5rem" }}>
                {data?.result?.data?.product?.name}
              </div>
            </div>
            <div>
              <div className="flex text-status">
                <DropboxOutlined />
                <div>Tình trạng:{"còn hàng"}</div>
              </div>

              <div className="flex text-code">
                <BarcodeOutlined />
                <div>Mã sản phẩm</div>
              </div>

              <div className="flex text-category">
                <TagOutlined />
                <div>Thể loại</div>
                {tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex text-price">
              <div>{data?.result?.data?.product?.price}</div>
              <HeartOutlined />
              <div>{data?.result?.data?.product?.originalPrice}</div>
            </div>
            <hr
              style={{
                borderTop: "1px solid #ddd",
                margin: "20px auto",
              }}
            />
            <div className="btn-addToCart">
              <div
                style={{
                  backgroundColor: "#2579F2",
                  width: "50%",
                  height: "40px",
                  color: "white",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "10px",
                  cursor: "pointer",
                }}
              >
                <ShoppingCartOutlined style={{ fontSize: "25px" }} />
                <button>Mua ngay</button>
              </div>
            </div>
          </div>
          <div className="share-content">
            <div>Giới thiệu bạn bè</div>
            <div>Giảm giá 5% cho bạn bè được giới thiệu.</div>
            <div>mã là abcxyz</div>
          </div>
        </div>
        <div className="details-text">
          <div
            className="details-tutorial"
            dangerouslySetInnerHTML={{ __html: productInfo.tutorial }}
          ></div>
          <div className="details-decription">
            <div className="details-sanpham">Chi tiết sản phẩm</div>
            <div
              className="details-show"
              dangerouslySetInnerHTML={{ __html: productInfo.description }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;

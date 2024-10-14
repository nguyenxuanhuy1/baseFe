import {
  BarcodeOutlined,
  DropboxOutlined,
  HeartOutlined,
  TagOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";

const Details = () => {
  const [data, setData] = useState(null);
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://divineshop.vn/page-data/cho-thue-tai-khoan-steam-black-myth-wukong-gia-re/page-data.json"
        );
        const result = await response.json();
        setData(result);
        setTags(result?.result.data.product.tags);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="details-container">
      <div className="details-content">
        <div className="image-container">
          <img
            loading="lazy"
            src="https://cdn.divineshop.vn/image/catalog/Anh-SP-New/Thang/black myth wukong-1d-22302.png?hash=1724216887"
            className="image"
          />
          <p className="image-caption">Xem thêm ảnh</p>
        </div>
        <div className="text-content">
          <div>
            <div>Sản phẩm</div>
            <div style={{ fontSize: "1.5rem" }}>
              {data?.result.data.product.name}
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
            <div>490.000{}</div>
            <HeartOutlined />
            <div>990.000{}</div>
          </div>
        </div>
        <div className="share-content">
          <div>Giới thiệu bạn bè</div>
          <div>Giảm giá 5% cho bạn bè được giới thiệu.</div>
          <div>mã là abcxyz</div>
        </div>
      </div>
    </div>
  );
};
export default Details;

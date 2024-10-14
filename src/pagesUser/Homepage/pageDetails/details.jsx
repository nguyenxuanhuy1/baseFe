import {
  BarcodeOutlined,
  DropboxOutlined,
  HeartOutlined,
  TagOutlined,
} from "@ant-design/icons";

const Details = () => {
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
          <div>Sản phẩm</div>
          <h1>YouTube Premium + YouTube Music 1 năm - Gia hạn chính chủ</h1>
          <div className="flex text-status">
            <DropboxOutlined />
            <div>tình trạng{}</div>
          </div>
          <div className="flex text-code">
            <BarcodeOutlined />
            <div>Mã sản phẩm{}</div>
          </div>
          <div className="flex text-category ">
            <TagOutlined />
            <div>Thể loại{}</div>
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

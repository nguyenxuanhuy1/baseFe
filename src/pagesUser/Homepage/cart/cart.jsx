const Cart = () => {
  return (
    <div className="container-cart">
      <div className="cart-body">
        <div className="item-cart">
          <div className="text">Giỏ hàng [{12} sản phẩm]</div>
          <div className="container-detail-item">
            <div className="img-item">
              <img
                // wit275
                // hai 130
                loading="lazy"
                src={`https://cdn.divineshop.vn/image/catalog/Anh-SP/Kh%C3%A1c/NETFLIX-1thang-88147.png?hash=1715588534`}
                className="image"
              />
            </div>
            <div className="text-item">
              <div className="infor-price">
                <div className="infor">
                  <div> Black Myth: Wukong - Thuê game (1 ngày)</div>
                  <div>Action, Adventure, RPG</div>
                </div>
                <div className="act">
                  <button className="btn sub">-</button>
                  <input className="view" type="text" />

                  <button className="btn add">+</button>
                </div>
                <div className="price">
                  <div className="new">40.000</div>
                  <div className="old">90.000</div>
                </div>
              </div>
              <div className="status-item">tình trạng - còn hàng</div>
            </div>
          </div>
        </div>
        <div className="pay">
          <div className="">Thanh toán</div>
          <div className="">Tổng giá trị sản phẩm</div>
          <div className="">Tổng giá trị phải thanh toán</div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};
export default Cart;

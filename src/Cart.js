import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CartQuality from "./CartQuality";
import { RemoveCart } from "./redux/CartAction";

function Cart() {
  const dispatch = useDispatch();
  const [myData, setmyData] = useState([]);
  const cartData = useSelector((state) => state.CartReducer.data);
  const [itemcount, setItemCount] = useState(null);
  useEffect(() => {
    console.log("carttttt", cartData);
    setmyData(cartData);
  }, [cartData]);
  return (
    <>
      {console.log(myData)}
      {myData
        ? myData.map((elemnt, i) => {
            return (
              <>
                <div className="cartWrapper">
                  <div className="cart">
                    <div className="imgWrapper">
                      <img src={elemnt.img} alt="itemImage" />
                    </div>
                    <CartQuality />
                    <button
                      onClick={() => dispatch(RemoveCart(i))}
                      style={{ margin: "15px" }}
                    >
                      remove
                    </button>
                  </div>
                </div>
              </>
            );
          })
        : "no data"}
      <div className="continDiv">CART ITEM AND TOTEL</div>
    </>
  );
}

export default Cart;

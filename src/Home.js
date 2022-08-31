import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Test from "./Test";
import { CartAction } from "./redux/CartAction";
import { useDispatch } from "react-redux";
import axios from "axios";

function Home() {
  const [myarr, setArr] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:3002/arr").then((res) => setArr(res.data));
  }, []);
  return (
    <>
      <div className="cartWrapper">
        {myarr?.map((ele, i) => {
          return (
            <>
              <div key={i} className="cart">
                <div className="imgWrapper">
                  <img src={ele.img} alt="itemImage" />
                </div>
                <div className="contentWrapper">
                  <h4>{ele.tittle}</h4>
                  <p className="itemDesc">{ele.price}</p>
                  <button
                    onClick={() => dispatch(CartAction(ele))}
                    className="cartBtn"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Home;

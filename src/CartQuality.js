import React, { useState } from "react";

function CartQuality() {
  const [count, setCount] = useState(1);

  return (
    <>
      <div>Quantity{count}</div>
      <span>
        <button
          style={{ margin: "5px" }}
          onClick={() =>
            count >= 5 ? alert("not more then 5 ") : setCount(count + 1)
          }
        >
          +
        </button>
        <button
          style={{ margin: "5px" }}
          onClick={() =>
            count < 2 ? alert("not lessthen  0 ") : setCount(count - 1)
          }
        >
          -
        </button>
      </span>
    </>
  );
}

export default CartQuality;

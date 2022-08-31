import React from "react";

function Test() {
  const arr = [1, 2, [3, 4, [5, 6, [7, 3, 6, 45]]]];

  return (
    <>
      {arr[2][2][2].map((el) => {
        return (
          <>
            <h1>{el}</h1>
          </>
        );
      })}
      <div className="mainDiv">
        <div className="pdiv">1</div>
        <div className="pdiv">2</div>
        <div className="pdiv">3</div>
        <div className="pdiv">4</div>
        <div className="pdiv">5</div>
      </div>
    </>
  );
}

export default Test;

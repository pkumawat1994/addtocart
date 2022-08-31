const initialData = {
  data: [],
};

const CartReducer = (state = initialData, action) => {
  console.log("pyload", action.payload);
  switch (action.type) {
    case "ADD_CART":
      const dat = [...state.data];
      //const mydt = dat.find(action.payload.tittle);
      const myres = state.data.find(
        (el) => el.tittle === action.payload.tittle
      );
      console.log("myressss", myres);

      if (myres === undefined) {
        dat.push(action.payload);
        alert("cart item added");
        return { data: dat };
      } else {
        alert("Item Already in Your Cart");
        return { data: dat };
      }
    case "REMOVE_CART":
      return {
        data: state.data.filter((ele, i) => i !== action.payload),
      };

    default:
      return state;
  }
};
export default CartReducer;

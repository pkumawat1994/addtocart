export const CartAction = (data) => {
  console.log(1111, data);

  return {
    type: "ADD_CART",
    payload: data,
  };
};
export const RemoveCart = (data) => {
  console.log(1111, data);

  return {
    type: "REMOVE_CART",
    payload: data,
  };
};

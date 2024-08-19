
export const ADD_PRODUCT = (product) => {
    return {
      type: "ADD_PRODUCT",
      payload: product,
    };
  };
export const DELETE_PRODUCT = (productdelete) => {
    return {
      type: "DELETE_PRODUCT",
      payload: productdelete
    };
  };

  export const MINUS_PRODUCT = (productminus) => {
    return {
      type: "MINUS_PRODUCT",
      payload: productminus
    };
  };
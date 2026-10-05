const initialState = {
  CartAr: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const productInCart = state.CartAr.find(
        (p) => p.idsanpham === action.payload.idsanpham
      );

      if (productInCart) {
        return {
          ...state,
          CartAr: state.CartAr.map((p) =>
            p.idsanpham === action.payload.idsanpham
              ? { ...p, quantity: p.quantity + action.payload.quantity }
              : p
          ),
        };
      } else {
        return {
          ...state,
          CartAr: [...state.CartAr, action.payload],
        };
      }
    case "DELETE_PRODUCT":
      return {
        ...state,
        CartAr: state.CartAr.map((product) => {
          if (product.idsanpham === action.payload.idsanpham) {
              return null;
          }
          return product;
        }).filter((product) => product !== null),
      };

    case "MINUS_PRODUCT":
      const updatedCart = state.CartAr.map((product) => {
        if (product.idsanpham === action.payload.idsanpham) {
          if (product.quantity > 1) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          } else {
            return product;
          }
        }
        return product;
      });

      return {
        ...state,
        CartAr: updatedCart,
      };
    case "CLEAR_CART":
      return initialState;
      
    default:
      return state;
  }
};

export default cartReducer;

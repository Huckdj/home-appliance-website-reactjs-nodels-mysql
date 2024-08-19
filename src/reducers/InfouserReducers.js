const initialStates = {
    infousers: [],
  };
  
  const cartReducer = (state = initialStates, action) => {
    switch (action.type) {
      case "INFO_USER":
        const infoUserinStore = state.infousers.find(
          (user) => user.idtaikhoan === action.payload.idtaikhoan
        );

        if (infoUserinStore) {
          return {
            ...state,
            infousers: state.infousers.map((user) =>
              user.idtaikhoan === action.payload.idtaikhoan
                ? { ...user, ...action.payload } // Cập nhật thông tin user với payload mới
                : user
            ),
          };
        } else {
          return {
            ...state,
            infousers: [...state.infousers, action.payload], // Thêm user mới vào danh sách
          };
        }
  
      case "REMOVE_INFOUSER":
        return initialStates
      default:
        return state;
    }
  };
  
  export default cartReducer;
  
import db from '../config/database.js';

export const post_api_orders_1 = (req, res) => {
  const { idtaikhoan, trangthai, tenkhachhang, sdt, email, tinhthanhpho, quanhuyen, phuongxa, sonhatenduong, ghichu, kieuthanhtoan, tongdonhang } = req.body;

  // Thêm thông tin đơn hàng vào bảng orders
  db.query('INSERT INTO donhang (idtaikhoan, trangthai, tenkhachhang, sdt, email, tinhthanhpho, quanhuyen, phuongxa, sonhatenduong, ghichu, kieuthanhtoan, tongdonhang, thoigiandathang) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())', 
  [idtaikhoan, trangthai, tenkhachhang, sdt, email, tinhthanhpho, quanhuyen, phuongxa, sonhatenduong, ghichu, kieuthanhtoan, tongdonhang], (error, results) => {
    if(error) return console.log(error);
    const iddonhang = results.insertId;

    // Thêm thông tin sản phẩm vào bảng order_items
    const orderItems = req.body.products.map(product => [
      iddonhang ,
      product.idsanpham,
      product.tensanpham,
      product.quantity,
      product.giahientai,
      product.giahientai * product.quantity
    ]);

    db.query('INSERT INTO chitietdonhang (iddonhang , idsanpham, tensanpham, soluong, giahientai, tonggiasanpham) VALUES ?', 
    [orderItems], (error) => {
      if (error) return res.status(500).json({ error: error.message });
      return res.status(201).json({ message: 'Order placed successfully', Status: 'Success' ,}); 
    });
  });
};

export const get_infoorder_id_1 = (req, res)=>{
  const id = req.params.id;
  const sql = "SELECT * FROM donhang WHERE idtaikhoan=" + id + " ORDER BY thoigiandathang DESC";
  db.query(sql,(err,result)=>{
      if(err) return res.json({Message: "lấy thông tin đơn hàng lỗi"})
      return res.json(result);
  })
};

export const get_infoorder_1 = (req, res)=>{
  const id = req.params.id;
  const sql = "SELECT * FROM donhang ORDER BY thoigiandathang DESC";
  db.query(sql,(err,result)=>{
      if(err) return res.json({Message: "lấy thông tin đơn hàng lỗi"})
      return res.json(result);
  })
};

export const get_fulorderproduct_id_1 = (req, res)=>{
  const id = req.params.id;
  const sql = "SELECT * FROM chitietdonhang LEFT JOIN sanpham ON sanpham.idsanpham = chitietdonhang.idsanpham WHERE chitietdonhang.iddonhang =" + id ;
  db.query(sql,(err,result)=>{
      if(err) return res.json({Message: "lấy thông tin đơn hàng lỗi"})
      return res.json(result);
  })
};

export const post_api_cannceledorder_id_1 = (req, res) => {
  const id = req.params.id;
  const sql = 'UPDATE donhang SET trangthai = "Đã Hủy" WHERE iddonhang = ' + id;
  db.query(sql,id, (err, result) => {
    if (err) return res.json({Message: "Không thể hủy liên hệ hỗ trợ"})
    return res.json({Status: "Success", message: "Huỷ đơn hàng thành công"});
  });
};

export const post_api_update_1 = (req, res) => {
  const iddonhang = req.body.iddonhang;
  const trangthai = req.body.trangthai;

  // Sử dụng câu lệnh chuẩn với các tham số để tránh SQL Injection
  const sql = 'UPDATE donhang SET trangthai = ? WHERE iddonhang = ?';
  
  // Truyền các tham số vào mảng thứ hai
  db.query(sql, [trangthai, iddonhang], (err, result) => {
    if (err) {
      // Xử lý lỗi khi thực hiện truy vấn
      console.error(err);
      return res.json({ err, Message: "Không thể cập nhật trạng thái đơn hàng" });
    }
    // Trả về kết quả thành công nếu không có lỗi
    return res.json({ Status: "Success", message: "Cập nhật trạng thái đơn hàng thành công" });
  });
};

import db from '../config/database.js';

export const post_addcart_1 = (req, res) => {
  const sql = 'INSERT INTO giohang (idtaikhoan,idsanpham) VALUES (?,?)';
  db.query(sql, [req.body.idtaikhoan, req.body.idsanpham], (err, data) => {
      if(err) return res.json({Error: "Lỗi hệ thống hãy thử lại"});
      return res.json({Status:"Success"})
  })
};

export const get_getcount_idtaikhoan_1 = (req, res) => {
  const { idtaikhoan } = req.params; // Lấy giá trị idtaikhoan từ req.params

  const sql = "SELECT COUNT(*) AS count FROM giohang WHERE idtaikhoan = ?";
  db.query(sql, [idtaikhoan], (err, result) => {
    if (err) {
      console.error('Error querying database:', err);
      return res.status(500).json({ Message: "Lỗi hệ thống, hãy thử lại" });
    }
    // Trả về số lượng giỏ hàng
    res.json({ count: result[0]?.count || 0 });
  });
};

export const get_cart_idtaikhoan_1 = (req, res) => {
  const idtaikhoan = req.params.idtaikhoan;

  // Truy vấn để lấy tất cả idsanpham và số lượng từ giỏ hàng
  const sqlCart = `
    SELECT idsanpham, COUNT(*) AS soluong
    FROM giohang
    WHERE idtaikhoan = ?
    GROUP BY idsanpham
  `;

  db.query(sqlCart, [idtaikhoan], (err, cartItems) => {
    if (err) return res.status(500).json({ message: 'Error fetching cart data', error: err });

    // Lấy tất cả thông tin sản phẩm cho các idsanpham trong giỏ hàng
    const productIds = cartItems.map(item => item.idsanpham);
    if (productIds.length === 0) return res.json({ products: [], total: 0 });

    const sqlProducts = `
      SELECT sanpham.idsanpham, sanpham.tensanpham, sanpham.giasanpham, sanpham.images, sanpham.phantramgiamgia, sanpham.hang
      FROM sanpham
      WHERE sanpham.idsanpham IN (?)
    `;

    db.query(sqlProducts, [productIds], (err, products) => {
      if (err) return res.status(500).json({ message: 'Error fetching products data', error: err });

      // Tạo một đối tượng để nhóm các sản phẩm theo idsanpham
      const productsMap = products.reduce((acc, product) => {
        const giasanpham = product.giasanpham;
        const phantramgiamgia = product.phantramgiamgia;
        const giahientai = giasanpham - (giasanpham * phantramgiamgia) / 100;

        if (!acc[product.idsanpham]) {
          acc[product.idsanpham] = {
            ...product,
            giahientai: giahientai,
            soluong: 0 // placeholder, sẽ được cập nhật sau
          };
        }
        return acc;
      }, {});

      // Cập nhật số lượng cho các sản phẩm
      cartItems.forEach(item => {
        if (productsMap[item.idsanpham]) {
          productsMap[item.idsanpham].soluong = item.soluong;
        }
      });

      // Truy Vấn Dữ Liệu Từ Bảng Hãng
      const hangIds = Object.values(productsMap).map(product => product.hang);
      if (hangIds.length === 0) return res.json({ products: Object.values(productsMap), total: 0 });

      const sqlHang = `
        SELECT idhang, tenhang
        FROM hang
        WHERE idhang IN (?)
      `;

      db.query(sqlHang, [hangIds], (err, hangs) => {
        if (err) return res.status(500).json({ message: 'Error fetching hang data', error: err });

        // Tạo một đối tượng để nhóm các hãng theo idhang
        const hangsMap = hangs.reduce((acc, hang) => {
          acc[hang.idhang] = hang.tenhang;
          return acc;
        }, {});

        // Cập nhật tên hãng cho các sản phẩm
        Object.values(productsMap).forEach(product => {
          product.tenhang = hangsMap[product.hang] || 'Unknown';
        });

        // Tính tổng giá hiện tại
        const total = Object.values(productsMap).reduce((sum, product) => {
          return sum + (product.giahientai * product.soluong);
        }, 0);

        // Trả về kết quả cuối cùng
        const result = {
          products: Object.values(productsMap),
          total: total
        };

        res.json(result);
      });
    });
  });
};

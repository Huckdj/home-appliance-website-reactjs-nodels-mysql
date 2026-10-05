import db from '../config/database.js';

export const post_addproduct_1 = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ Message: "No file uploaded" });
  }
  const sql =
    "INSERT INTO sanpham (tensanpham, giasanpham, images, hang, phantramgiamgia, loaimay) VALUES (?);";
  const values = [
    req.body.tensanpham,
    req.body.giasanpham,
    req.file.filename,
    req.body.hang,
    req.body.phantramgiamgia,
    req.body.loaimay,
  ];

  db.query(sql, [values], (err, result) => {
    if (err) {
      console.error(err);
      return res.json({ Status: "Error" });
    }
    return res.json({ Status: "Success" });
  });
};

export const get_infoproduct_1 = (req, res) => {
  const sql = `
        SELECT * FROM sanpham 
    `;
  db.query(sql, (err, result) => {
    if (err) return res.json({ Message: "Error" });
    // const products = result.map(product => ({
    //     ...product,
    //     images: `../src/assets/publicimg/imgproduct/${product.images}`
    // }));
    // res.json(products);
    return res.json(result);
  });
};

export const get_infoproductadmin_1 = (req, res) => {
  const sql = `
        SELECT sanpham.*, hang.tenhang, loaisp.tenloaisp
        FROM sanpham
        LEFT JOIN hang ON sanpham.hang = hang.idhang
        LEFT JOIN loaisp ON sanpham.loaimay = loaisp.idloaisanpham
    `;
  db.query(sql, (err, result) => {
    if (err) return res.json({ Message: "Error" });

    // Tính giá hiện tại và thêm vào dữ liệu sản phẩm
    const products = result.map((product) => {
      const giasanpham = product.giasanpham;
      const phantramgiamgia = product.phantramgiamgia;
      const giahientai = giasanpham - (giasanpham * phantramgiamgia) / 100;

      return {
        ...product,
        giahientai: giahientai,
      };
    });

    res.json(products);
  });
};

export const get_maylanhpublic_1 = (req, res) => {
  const sql = `
        SELECT * FROM sanpham WHERE loaimay = 2 LIMIT 10;
    `;
  db.query(sql, (err, result) => {
    if (err) return res.json({ Message: "Error" });

    // Tính giá hiện tại và thêm vào dữ liệu sản phẩm
    const products = result.map((product) => {
      const giasanpham = product.giasanpham;
      const phantramgiamgia = product.phantramgiamgia;
      const giahientai = giasanpham - (giasanpham * phantramgiamgia) / 100;

      return {
        ...product,
        giahientai: giahientai,
      };
    });

    res.json(products);
  });
};

export const get_hotsaleweek_1 = (req, res) => {
  // Câu lệnh SQL để lấy 30 sản phẩm có phần trăm giảm giá cao nhất
  const sql = `
        SELECT * FROM sanpham 
        ORDER BY phantramgiamgia DESC
        LIMIT 30
    `;

  db.query(sql, (err, result) => {
    if (err) return res.json({ Message: "Error" });

    // Tính giá hiện tại và thêm vào dữ liệu sản phẩm
    const products = result.map((product) => {
      const giasanpham = product.giasanpham;
      const phantramgiamgia = product.phantramgiamgia;
      const giahientai = giasanpham - (giasanpham * phantramgiamgia) / 100;

      return {
        ...product,
        giahientai: giahientai,
      };
    });

    // Random 10 sản phẩm từ 30 sản phẩm đã lấy
    const shuffled = products.sort(() => 0.5 - Math.random());
    const selectedProducts = shuffled.slice(0, 10);

    res.json(selectedProducts);
  });
};

export const get_percenttop_1 = (req, res) => {
  // Câu lệnh SQL để lấy 30 sản phẩm có phần trăm giảm giá cao nhất
  const sql = `
        SELECT *
FROM sanpham
ORDER BY phantramgiamgia DESC
LIMIT 10;

    `;

  db.query(sql, (err, result) => {
    if (err) return res.json({ Message: "Error" });

    // Tính giá hiện tại và thêm vào dữ liệu sản phẩm
    const products = result.map((product) => {
      const giasanpham = product.giasanpham;
      const phantramgiamgia = product.phantramgiamgia;
      const giahientai = giasanpham - (giasanpham * phantramgiamgia) / 100;

      return {
        ...product,
        giahientai: giahientai,
      };
    });
    res.json(products);
  });
};

export const get_product_info_id_1 = (req, res) => {
  const id = req.params.id;
  const sql = `
    SELECT * 
    FROM sanpham
    LEFT JOIN hang ON sanpham.hang = hang.idhang 
    LEFT JOIN loaisp ON sanpham.loaimay = loaisp.idloaisanpham
    WHERE sanpham.idsanpham = ?
  `;

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error", error: err });
    }

    const products = result.map((product) => {
      const giasanpham = product.giasanpham;
      const phantramgiamgia = product.phantramgiamgia;
      const giahientai = giasanpham - (giasanpham * phantramgiamgia) / 100;

      return {
        ...product,
        giahientai: giahientai,
      };
    });

    res.json(products);
  });
};

export const get_fullproduct_1 = (req, res) => {
  const sql = "SELECT * FROM sanpham";
  db.query(sql, (err, result) => {
    if (err) {
      // Nếu có lỗi xảy ra, gửi phản hồi lỗi
      return res.status(500).json({ Message: "Lấy thông tin lỗi" });
    }

    // Xử lý dữ liệu để tính toán giá hiện tại
    const products = result.map((product) => {
      const giasanpham = product.giasanpham;
      const phantramgiamgia = product.phantramgiamgia;
      const giahientai = giasanpham - (giasanpham * phantramgiamgia) / 100;

      return {
        ...product,
        giahientai: giahientai,
      };
    });

    // Gửi dữ liệu sản phẩm đã được xử lý
    res.json(products);
  });
};

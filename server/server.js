import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import mysql from "mysql";
import cors from "cors";
import  jwt  from "jsonwebtoken";
import cookieParser from "cookie-parser"

const app = express();
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods:["POST", "GET"],
  credentials: true
}));
app.use(cookieParser());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "housewareshop",
});


app.get("/loaimay", (req, res) => {
  const sql = "SELECT * FROM loaisp";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Message: "Error" });
    return res.json(result);
  });
});


app.post("/addmachine", (req, res) => {
  const machinecheck = req.body.tenloaisp;
  const checkmachine = "SELECT * FROM loaisp WHERE tenloaisp = ?";
  db.query(checkmachine, [machinecheck], (err, result) => {
    if (err) return console.log(err);
    if (result.length > 0) {
      return res.json({ Status: "duplicate" });
    } else {
      const sql = "INSERT INTO loaisp (`tenloaisp`) VALUES (?)";
      const values = [req.body.tenloaisp];
      db.query(sql, values, (err, result) => {
        if (err) return console.log(err);
        return res.json({ Status: "Success" });
      });
    }
  });
});


app.post("/addmanufacture", (req, res) => {
  const tenhangcheck = req.body.tenhang;

  const checkmachine = "SELECT * FROM hang WHERE tenhang = ?";
  db.query(checkmachine, [tenhangcheck], (err, result) => {
    if (err) return console.log(err);
    if (result.length > 0) {
      return res.json({ Status: "duplicate" });
    } else {
      const sql = "INSERT INTO hang (`tenhang`) VALUES (?)";
      const values = [req.body.tenhang, req.body.tenloaisp];
      db.query(sql, values, (err, result) => {
        if (err) return console.log(err);
        return res.json({ Status: "Success" });
      });
    }
  });
});

app.get("/hang", (req, res) => {
  const sql = `
        SELECT * FROM hang 
    `;
  db.query(sql, (err, result) => {
    if (err) return res.json({ Message: "Error" });
    return res.json(result);
  });
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../src/assets/publicimg/imgproduct"));
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post("/addproduct", upload.single("file"), (req, res) => {
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
});

app.get("/infoproduct", (req, res) => {
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
});

app.get("/infoproductadmin", (req, res) => {
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
});

app.get("/maylanhpublic", (req, res) => {
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
});

app.get("/hotsaleweek", (req, res) => {
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
});

app.get("/percenttop", (req, res) => {
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
});


app.post('/register',(req, res)=> {
  const emailcheck = req.body.email;
  const checkEmailDuplicate ="SELECT * FROM taikhoan WHERE email = ?";
  db.query(checkEmailDuplicate, [emailcheck],(err, result) => {
      if(err) return console.log(err)
      if(result.length > 0){
          return res.json({Status:"duplicate"})
      }else{
          const sql = "INSERT INTO taikhoan (`tentaikhoan`,`email`,`password`,`thoigiantaotaikhoan`) VALUES (?, ?, ?, NOW())";
          const values =[
                  req.body.tentaikhoan,
                  req.body.email,
                  req.body.password
              ]
              db.query(sql, values, (err, result) => {
                  if(err) return console.log(err)
                  return res.json({Status: "Success"})
              })
      } 
  })
})

app.post('/login', (req, res) => {
  const sql = 'SELECT * FROM taikhoan WHERE email = ? AND password = ?';
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
      if(err) return res.json({Error: "Lỗi hệ thống hãy thử lại"});
      if(data.length > 0){
              const tentaikhoan = data[0].tentaikhoan;
              const idtaikhoan  = data[0].idtaikhoan ;
              const email = data[0].email;
              const token = jwt.sign({tentaikhoan, idtaikhoan , email}, "jwt-secret-key", {expiresIn: '1d'});
              res.cookie('token', token);
              return res.json({Status: "Success"})
      } else {
          return res.json({Error:"Sai tài khoản hoặc mật khẩu"})
      }
  })
})

const verifyUser = (req,res, next) => {
  const token = req.cookies.token;
  if(!token) {
      return res.json({Error: "You not authen"})
  }else {
      jwt.verify(token, "jwt-secret-key", (err, decoded) => {
          if(err){
              return res.json({Error: "Token is not okey"});
          }else {
              req.tentaikhoan = decoded.tentaikhoan;
              req.idtaikhoan = decoded.idtaikhoan ;
              req.email = decoded.email;
              next();
          }
      })
  }
}

app.get('/', verifyUser,(req,res) => {
  return res.json({Status: "Success", tentaikhoan: req.tentaikhoan, idtaikhoan: req.idtaikhoan, emaill : req.email})
})

app.get('/logout',(req,res) =>{
  res.clearCookie('token');
  return res.json({Status: "Success"})
})


app.get('/product_info/:id', (req, res) => {
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
});

app.post('/login', (req, res) => {
  const sql = 'SELECT * FROM taikhoan WHERE email = ? AND password = ?';
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
      if(err) return res.json({Error: "Lỗi hệ thống hãy thử lại"});
      if(data.length > 0){
              const tentaikhoan = data[0].tentaikhoan;
              const idtaikhoan  = data[0].idtaikhoan ;
              const email = data[0].email;
              const token = jwt.sign({tentaikhoan, idtaikhoan , email}, "jwt-secret-key", {expiresIn: '1d'});
              res.cookie('token', token);
              return res.json({Status: "Success"})
      } else {
          return res.json({Error:"Sai tài khoản hoặc mật khẩu"})
      }
  })
})

app.post('/addcart', (req, res) => {
  const sql = 'INSERT INTO giohang (idtaikhoan,idsanpham) VALUES (?,?)';
  db.query(sql, [req.body.idtaikhoan, req.body.idsanpham], (err, data) => {
      if(err) return res.json({Error: "Lỗi hệ thống hãy thử lại"});
      return res.json({Status:"Success"})
  })
})


app.get("/getcount/:idtaikhoan", (req, res) => {
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
});



app.get('/cart/:idtaikhoan', (req, res) => {
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
});

app.post('/api/orders', (req, res) => {
  const { idtaikhoan, trangthai, tenkhachhang, sdt, email, tinhthanhpho, quanhuyen, phuongxa, sonhatenduong, ghichu, thanhtoan, tongdonhang, thoigiandathang } = req.body;

  // Thêm thông tin đơn hàng vào bảng orders
  db.query('INSERT INTO donhang (idtaikhoan, trangthai, tenkhachhang, sdt, email, tinhthanhpho, quanhuyen, phuongxa, sonhatenduong, ghichu, thanhtoan, tongdonhang, thoigiandathang) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
  [idtaikhoan, trangthai, tenkhachhang, sdt, email, tinhthanhpho, quanhuyen, phuongxa, sonhatenduong, ghichu, thanhtoan, tongdonhang, thoigiandathang], (error, results) => {
    if (error) return res.status(500).json({ error: error.message });

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

    db.query('INSERT INTO chitietdonhang (iddonhang , idsanpham, soluong, tensanpham, giahientai, tonggiasanpham) VALUES ?', 
    [orderItems], (error) => {
      if (error) return res.status(500).json({ error: error.message });
      return res.status(201).json({ message: 'Order placed successfully' });
    });
  });
});


app.listen(4000, () => {
  console.log("Server listening on port 4000!");
});

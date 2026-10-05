import db from '../config/database.js';

export const get_loaimay_1 = (req, res) => {
  const sql = "SELECT * FROM loaisp";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Message: "Error" });
    return res.json(result);
  });
};

export const post_addmachine_1 = (req, res) => {
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
};

export const post_addmanufacture_1 = (req, res) => {
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
};

export const get_hang_1 = (req, res) => {
  const sql = `
        SELECT * FROM hang 
    `;
  db.query(sql, (err, result) => {
    if (err) return res.json({ Message: "Error" });
    return res.json(result);
  });
};

import React, { useState } from "react";
import ManufactureComponent from "../ManufactureComponent.js";
import axios from "axios";
function AddManufactureForm() {

  //   nhập dữ liệu hãng
  const [values, setValues] = useState({
    tenhang: ""
  });
  const handleSubmit = async (event) => {
    console.log(values);
    if (values.tenhang === "") {
      alert("Dữ Liệu trống");
    } else {
      event.preventDefault();
      axios
        .post("http://localhost:4000/addmanufacture", values)
        .then((res) => {
          if (res.data.Status === "duplicate") {
            alert("Hãng Sản xuất của loại mày này đã tồn tại trong db");
          }
          if (res.data.Status === "Success") {
            alert("Nhập Thành Công");
          }
        })
        .then((err) => console.log(err));
    }
  };

  return (
    <div className="flex">
      <ManufactureComponent />
      <hr />
      <div className="m-12">
        <hr />
        <div className="mt-10">
          <form onSubmit={handleSubmit}>
            <h2 className="font-bold mb-6">Nhập Dữ Liệu Hãng</h2>
            <p>Tên hãng:</p>
            <input
              type="text"
              placeholder="Nhập Tên Hãng"
              className="border border-dark-600 p-2 mb-6"
              onChange={(e) =>
                setValues({ ...values, tenhang: e.target.value })
              }
            />
            <br />
            <button
              type="submit"
              className="border pl-4 pr-4 pt-1 pb-1 mt-2 rounded-lg bg-sky-600 hover:bg-sky-700"
            >
              Nhập dữ liệu
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddManufactureForm;

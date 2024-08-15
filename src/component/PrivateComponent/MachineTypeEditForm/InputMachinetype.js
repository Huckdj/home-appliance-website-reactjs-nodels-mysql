import React, { useState } from "react";
import axios from "axios";
import MachinetypeComponent from "../MachinetypeComponent";
function InputMachinetype() {
  const [values, setValues] = useState({
    tenloaisp: "",
  });

  const handleSubmit = async (event) => {
    console.log(values);
    if (values.tenloaisp === "") {
      alert("Dữ Liệu trống");
    } else {
      event.preventDefault();
      axios
        .post("http://localhost:4000/addmachine", values)
        .then((res) => {
          if (res.data.Status === "duplicate") {
            alert("Loại máy đã tồn tại");
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
      <MachinetypeComponent />

      {/* Form Nhập Dữ Liệu */}
      <div className="mt-20">
        <hr/>
        <div className='mt-10'>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nhập Loại Máy"
              className="border border-dark-600 p-2 mb-2"
              onChange={(e) =>
                setValues({ ...values, tenloaisp: e.target.value })
              }
            />
            <br />
            <button
              type="submit"
              className="border pl-4 pr-4 pt-1 pb-1 rounded-lg bg-sky-600 hover:bg-sky-700"
            >
              Nhập
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InputMachinetype;

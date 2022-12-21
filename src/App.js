import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [getdata, setdata] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: ""
  });

  function inputdata(event) {
    console.log(event.target.value);
    console.log(event.target.name);

    const { value, name } = event.target;

    setdata((prevalue) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: prevalue.lname,
          email: prevalue.email,
          phone: prevalue.phone
        };
      } else if (name === "lname") {
        return {
          fname: prevalue.fname,
          lname: value,
          email: prevalue.email,
          phone: prevalue.phone
        };
      } else if (name === "email") {
        return {
          fname: prevalue.fname,
          lname: prevalue.lname,
          email: value,
          phone: prevalue.phone
        };
      } else if (name === "phone") {
        return {
          fname: prevalue.fname,
          lname: prevalue.lname,
          email: prevalue.email,
          phone: value
        };
      }
    });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    alert("form submitted");
  };
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <div>
          <h1>
            Hello {getdata.fname} {getdata.lname}
          </h1>
          <p>{getdata.email}</p>
          <p>{getdata.phone}</p>
          <input
            type="text"
            placeholder="Enter Your First Name"
            name="fname"
            onChange={inputdata}
            value={getdata.fname}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter Your Last Name"
            name="lname"
            onChange={inputdata}
            value={getdata.lname}
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="Enter Your Email Address"
            name="email"
            onChange={inputdata}
            value={getdata.email}
          />
          <br />
          <br />
          <input
            type="number"
            placeholder="Enter Your Phone Number"
            name="phone"
            onChange={inputdata}
            value={getdata.phone}
          />
          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;

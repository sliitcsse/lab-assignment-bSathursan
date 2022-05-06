import axios from "axios";
import React, { useState } from "react";

function ViewCus() {
  const [getcustomer, setGetCustomer] = useState([]);
  axios
    .get("http://localhost:3000/customerprofiles/")
    .then((res) => {
      setGetCustomer(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div>
      <table
        style={{
          border: "1px solid #ccc",
          borderCollapse: "collapse",
          margin: "0",
          padding: "0",
          width: "100%",
          tableLayout: "fixed",
        }}
      >
        <caption style={{ fontSize: "1.5em", margin: "0.5em 0em 0.75em" }}>
          Get All Customers
        </caption>
        <thead>
          <tr
            style={{
              backgroundColor: "#f8f8f8",
              border: "1px solid #ddd",
              padding: "0.35em",
            }}
          >
            <th
              scope="col"
              style={{
                padding: "0.625em",
                textAlign: "center",
                fontSize: "0.85em",
                letterSpacing: "0.1em",
              }}
            >
              First Name
            </th>
            <th
              scope="col"
              style={{
                padding: "0.625em",
                textAlign: "center",
                fontSize: "0.85em",
                letterSpacing: "0.1em",
              }}
            >
              Last Name
            </th>
            <th
              scope="col"
              style={{
                padding: "0.625em",
                textAlign: "center",
                fontSize: "0.85em",
                letterSpacing: "0.1em",
              }}
            >
              User Name
            </th>
            <th
              scope="col"
              style={{
                padding: "0.625em",
                textAlign: "center",
                fontSize: "0.85em",
                letterSpacing: "0.1em",
              }}
            >
              Email
            </th>
            <th
              scope="col"
              style={{
                padding: "0.625em",
                textAlign: "center",
                fontSize: "0.85em",
                letterSpacing: "0.1em",
              }}
            >
              Phone Number
            </th>
          </tr>
        </thead>
        <tbody>
          {getcustomer
            ? getcustomer.map((item) => (
                <tr>
                  <td
                    data-label="Account"
                    style={{ padding: "0.625em", textAlign: "center" }}
                  >
                    {item.firstname}
                  </td>
                  <td
                    data-label="Due Date"
                    style={{ padding: "0.625em", textAlign: "center" }}
                  >
                    {item.lastname}
                  </td>
                  <td
                    data-label="Amount"
                    style={{ padding: "0.625em", textAlign: "center" }}
                  >
                    {item.username}
                  </td>
                  <td
                    data-label="Period"
                    style={{ padding: "0.625em", textAlign: "center" }}
                  >
                    {item.email}
                  </td>
                  <td
                    data-label="Period"
                    style={{ padding: "0.625em", textAlign: "center" }}
                  >
                    {item.phonenumber}
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
      <div>
        <a href="/ItemsAdd">
          <h3>Add Item</h3>
        </a>
      </div>
    </div>
  );
}

export default ViewCus;

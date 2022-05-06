import axios from "axios";
import React, { useState } from "react";

function ViewPromo() {
  const [getcustomer, setGetCustomer] = useState([]);
  axios
    .get("http://localhost:3000/promotions/")
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
          Get All Promotions
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
              Promotion Name
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
              Promotions Code
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
              Description
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
              Item
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
              Item Offer
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
                    {item.promotionsname}
                  </td>
                  <td
                    data-label="Due Date"
                    style={{ padding: "0.625em", textAlign: "center" }}
                  >
                    {item.promotionscode}
                  </td>
                  <td
                    data-label="Amount"
                    style={{ padding: "0.625em", textAlign: "center" }}
                  >
                    {item.description}
                  </td>
                  <td
                    data-label="Period"
                    style={{ padding: "0.625em", textAlign: "center" }}
                  >
                    {item.item}
                  </td>
                  <td
                    data-label="Period"
                    style={{ padding: "0.625em", textAlign: "center" }}
                  >
                    {item.itmoff}
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
      <div>
        <a href="/">
          <h3>Home</h3>
        </a>
      </div>
    </div>
  );
}

export default ViewPromo;

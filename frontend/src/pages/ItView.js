import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ItView() {
  const [items, setItems] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3000/items/")
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log("err : ", err);
      });
  });

  const navigate = useNavigate();

  const editItems = (id) => {
    window.sessionStorage.setItem("AgentID", id);
    navigate("/ItemsEdit");
  };

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
          Get All Items
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
              Item Name
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
              Price
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
              Offer Price
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
              Qty
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
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {items
            ? items.map((item) => (
                <tr>
                  <td
                    data-label="Account"
                    style={{ padding: "0.625em", textAlign: "center" }}
                  >
                    {item.itemname}
                  </td>
                  <td
                    data-label="Due Date"
                    style={{ padding: "0.625em", textAlign: "center" }}
                  >
                    {item.description}
                  </td>
                  <td
                    data-label="Amount"
                    style={{ padding: "0.625em", textAlign: "center" }}
                  >
                    {item.price}
                  </td>
                  <td
                    data-label="Period"
                    style={{ padding: "0.625em", textAlign: "center" }}
                  >
                    {item.offerprice}
                  </td>
                  <td
                    data-label="Period"
                    style={{ padding: "0.625em", textAlign: "center" }}
                  >
                    {item.qty}
                  </td>
                  <td
                    data-label="Period"
                    style={{ padding: "0.625em", textAlign: "center" }}
                  >
                    {/* <a onClick={() => editItems(item.id)}>Edit</a> */}
                    <button onClick={() => editItems(item.id)}>Edit</button>
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
        <a href="/">
          <h3>Home</h3>
        </a>
      </div>
    </div>
  );
}

export default ItView;

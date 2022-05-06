import React from "react";
import { Link } from "react-router-dom";

function TraPage() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <a href="ItemsAdd" style={{ textDecoration: "none", color: "black" }}>
            <div
              style={{
                border: "1",
                borderStyle: "solid",
                borderRadius: 10,
                borderColor: "black",
                padding: "20",
                fontSize: "30",
                fontWeight: "400",
                margin: 20,
              }}
            >
              Add Items
            </div>
          </a>
          <a
            href="ItemsView"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              style={{
                border: "1",
                borderStyle: "solid",
                borderRadius: 10,
                borderColor: "black",
                padding: "20",
                fontSize: "30",
                fontWeight: "400",
                margin: 20,
              }}
            >
              View Items
            </div>
          </a>
          <a
            href="ViewCustomers"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              style={{
                border: "1",
                borderStyle: "solid",
                borderRadius: 10,
                borderColor: "black",
                padding: "20",
                fontSize: "30",
                fontWeight: "400",
                margin: 20,
              }}
            >
              View Customers
            </div>
          </a>
          <a
            href="AddPromotions"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              style={{
                border: "1",
                borderStyle: "solid",
                borderRadius: 10,
                borderColor: "black",
                padding: "20",
                fontSize: "30",
                fontWeight: "400",
                margin: 20,
              }}
            >
              Add Promotions
            </div>
          </a>
          <a
            href="ViewPromotions"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              style={{
                border: "1",
                borderStyle: "solid",
                borderRadius: 10,
                borderColor: "black",
                padding: "20",
                fontSize: "30",
                fontWeight: "400",
                margin: 20,
              }}
            >
              View Promotion
            </div>
          </a>
        </div>
      </div>
      <div>
        <Link to="/products">products</Link>
        <br />
        <Link to="/ItemsAdd">ItemsAdd</Link>
        <br />
        <Link to="/ItemsView">Items View</Link>
      </div>
    </div>
  );
}

export default TraPage;

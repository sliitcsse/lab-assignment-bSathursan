import React from "react";
import { Link } from "react-router-dom";

function Home() {
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
          <a
            href="CreateCuatomerProfile"
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
              Register Customer
            </div>
          </a>
          <a
            href="CreateTraderProfile"
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
              Register Trader
            </div>
          </a>
        </div>
      </div>
      
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ItAdd() {
  const [itemname, setItemName] = useState();
  const [description, setDescription] = useState();
  const [qty, setQty] = useState();
  const [price, setPrice] = useState();
  const [offerprice, setOfferPrice] = useState();

  const navigate = useNavigate();

  const handleSubmit = () => {
    const artical = {
      itemname: itemname,
      description: description,
      qty: qty,
      price: price,
      offerprice: offerprice,
    };
    console.log("artical : ", artical);

    axios
      .post("http://localhost:3000/items/", artical, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        navigate("/ItemsView");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="row" style={{ color: "#384047" }}>
      <div className="col-md-12">
        <div
          style={{
            margin: "10px auto",
            padding: "10px 20px",
            background: "#f4f7f8",
            borderRadius: "8px",
            maxWidth: "480px",
          }}
        >
          <h1 style={{ margin: "0 0 30px 0", textAlign: "center" }}>
            {" "}
            Add items{" "}
          </h1>
          <fieldset style={{ marginBottom: "30px", border: "none" }}>
            <div>
              <label
                htmlFor="name"
                style={{
                  fontWeight: "500",
                  display: "inline",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                Item Name:
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                value={itemname}
                onChange={(e) => setItemName(e.target.value)}
                style={{ width: "70%", height: "5%" }}
              />
            </div>
            <br />
            <div>
              <label
                htmlFor="name"
                style={{
                  fontWeight: "500",
                  display: "inline",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                Description
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ width: "70%", height: "5%" }}
              />
            </div>
            <br />
            <div>
              <label
                htmlFor="name"
                style={{
                  fontWeight: "500",
                  display: "inline",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                Qty
              </label>
              <input
                type="number"
                id="name"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                name="user_name"
                style={{ width: "70%", height: "5%" }}
              />
            </div>
            <br />
            <div>
              <label
                htmlFor="email"
                style={{
                  fontWeight: "500",
                  display: "inline",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                Price
              </label>
              <input
                type="number"
                id="mail"
                name="user_email"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                style={{ width: "78%", height: "5%" }}
              />
            </div>
            <br />
            <div>
              <label
                htmlFor="name"
                style={{
                  fontWeight: "500",
                  display: "inline",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                Offer Price
              </label>
              <input
                type="number"
                id="name"
                name="user_name"
                value={offerprice}
                onChange={(e) => setOfferPrice(e.target.value)}
                style={{ width: "65%", height: "5%" }}
              />
            </div>
          </fieldset>
          <button
            type="submit"
            style={{
              padding: "19px 39px 18px 39px",
              color: "#FFF",
              backgroundColor: "#4bc970",
              fontSize: "18px",
              textAlign: "center",
              fontStyle: "normal",
              borderRadius: "5px",
              width: "100%",
              border: "1px solid #3ac162",
              borderWidth: "1px 1px 3px",
              boxShadow: "0 -1px 0 rgba(255,255,255,0.1) inset",
              marginBottom: "10px",
            }}
            onClick={() => handleSubmit()}
          >
            Submit
          </button>
        </div>
      </div>
      <div>
        <a href="/">
          <h3>Home</h3>
        </a>
      </div>
    </div>
  );
}

export default ItAdd;

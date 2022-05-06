import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AddPromo() {
  const [promotionsname, setpromotionsname] = useState();
  const [promotionscode, setpromotionscode] = useState();
  const [description, setdescription] = useState();
  const [item, setitem] = useState();
  const [itmoff, setitmoff] = useState();

  const navigate = useNavigate();

  const handleSubmit = () => {
    const artical = {
      promotionsname: promotionsname,
      promotionscode: promotionscode,
      description: description,
      item: item,
      itmoff: itmoff,
    };
    console.log("artical : ", artical);

    axios
      .post("http://localhost:3000/promotions/", artical, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        navigate("/ViewPromotions");
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
                Promotion Name:
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                value={promotionsname}
                onChange={(e) => setpromotionsname(e.target.value)}
                style={{ width: "60%", height: "5%" }}
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
                Promotions Code
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                value={promotionscode}
                onChange={(e) => setpromotionscode(e.target.value)}
                style={{ width: "60%", height: "5%" }}
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
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                name="user_name"
                style={{ width: "70%", height: "5%" }}
              />
            </div>
            <br />
            <div>
              <label
                htmlFor="text"
                style={{
                  fontWeight: "500",
                  display: "inline",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                Item
              </label>
              <input
                type="text"
                id="name"
                name="user_email"
                value={item}
                onChange={(e) => setitem(e.target.value)}
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
                Item Offer
              </label>
              <input
                type="number"
                id="name"
                name="user_name"
                value={itmoff}
                onChange={(e) => setitmoff(e.target.value)}
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

export default AddPromo;

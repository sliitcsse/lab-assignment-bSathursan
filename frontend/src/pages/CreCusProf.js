import React, { useState } from "react";
import axios, { Axios } from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CreCusProf() {
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [phonenumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = () => {
    const artical = {
      firstname: firstname,
      lastname: lastname,
      username: username,
      email: email,
      phonenumber: phonenumber,
      password: password,
      confirmpassword: confirmpassword,
    };
    console.log("artical : ", artical);

    axios
      .post("http://localhost:3000/customerprofiles", artical, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        navigate("/customerItemView");
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
            Customer Profile Registation Form{" "}
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
                First Name:
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
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
                Last Name:
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
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
                User Name:
              </label>
              <input
                type="text"
                id="name"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
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
                Email:
              </label>
              <input
                type="email"
                id="mail"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                Phone Number:
              </label>
              <input
                type="number"
                id="name"
                name="user_name"
                value={phonenumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                style={{ width: "65%", height: "5%" }}
              />
            </div>
            <br />
            <div>
              <label
                htmlFor="password"
                style={{
                  fontWeight: "500",
                  display: "inline",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="user_password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: "75%", height: "5%" }}
              />
            </div>
            <br />
            <div>
              <label
                htmlFor="password"
                style={{
                  fontWeight: "500",
                  display: "inline",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                Confirm Password:
              </label>
              <input
                type="password"
                id="password"
                name="user_password"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{ width: "60%", height: "5%" }}
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

export default CreCusProf;

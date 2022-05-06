import axios from "axios";
import React, { useState } from "react";
import { CartProvider, useCart } from "react-use-cart";

const CardItems = () => {
  const { addItem } = useCart();

  const [getitems, setItems] = useState();
  axios
    .get("http://localhost:3000/items/")
    .then((res) => {
      setItems(res.data);
    })
    .catch((err) => {
      console.log("err : ", err);
    });
  return (
    <div style={{ margin: "0 -5px" }}>
      <h1>View All Items</h1>
      {getitems
        ? getitems.map((item) => (
            <div
              style={{
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                transition: "0.3s",
                width: "25%",
                float: "left",
                padding: "0 10px",
                margin: "20",
              }}
            >
              <div style={{ padding: "2px 16px" }}>
                <h4>
                  <h3>{item.itemname}</h3>
                </h4>
                <p>description : {item.description}</p>
                <p>qty : {item.qty}</p>
                <p>price: {item.price}</p>
                <p>Offer Price: {item.offerprice}</p>
                <button onClick={() => addItem(item)}>Add to cart</button>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  let totalPrice = 0;

  return (
    <>
      <h1>Cart ({totalUniqueItems})</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h3 style={{ margin: 20 }}>Quantity ({item.quantity})</h3>{" "}
            <h3 style={{ margin: 20 }}>Item Name - {item.itemname}</h3>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              style={{ padding: 10, margin: 10 }}
            >
              -
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              style={{ padding: 10, margin: 10 }}
            >
              +
            </button>
            <button
              onClick={() => removeItem(item.id)}
              style={{ padding: 10, margin: 10 }}
            >
              Remove Item
            </button>
            <p style={{ color: "white" }}>
              {(totalPrice = totalPrice + parseInt(item.offerprice))}
            </p>
          </li>
        ))}
      </ul>
      <center>
        <h1>Total Price = {totalPrice}</h1>
        <button onClick={() => emptyCart()} style={{ padding: 10, margin: 10 }}>
          Purchase Now
        </button>
      </center>
    </>
  );
}

function CusITView() {
  return (
    <CartProvider>
      <CardItems />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Cart />
    </CartProvider>
  );
}

export default CusITView;

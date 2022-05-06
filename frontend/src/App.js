import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CreateCuatomerProfile from "./pages/CreCusProf";
import CreateTraderProfile from "./pages/CreTraProf";
import Products from "./pages/Prod";
import ItemsAdd from "./pages/ItAdd";
import ItemsView from "./pages/ItView";
import ViewCustomers from "./pages/ViewCus";
import ItemsEdit from "./pages/ITEdit";
import TraderPage from "./pages/TraPage";
import CustomerItemView from "./pages/CusITView";
import AddPromotions from "./pages/AddPromo";
import ViewPromotions from "./pages/ViewPromo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/CreateCuatomerProfile"
            element={<CreateCuatomerProfile />}
          />
          <Route
            path="/CreateTraderProfile"
            element={<CreateTraderProfile />}
          />
          <Route path="/products" element={<Products />} />
          <Route path="/ItemsAdd" element={<ItemsAdd />} />
          <Route path="/ItemsView" element={<ItemsView />} />
          <Route path="/ViewCustomers" element={<ViewCustomers />} />
          <Route path="/ItemsEdit" element={<ItemsEdit />} />
          <Route path="/TraderPage" element={<TraderPage />} />
          <Route path="/CustomerItemView" element={<CustomerItemView />} />
          <Route path="/AddPromotions" element={<AddPromotions />} />
          <Route path="/ViewPromotions" element={<ViewPromotions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

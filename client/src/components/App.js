import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import UploadProductPage from "./views/UploadProductPage/UploadProductPage";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  const NewLandingPage = Auth(LandingPage, null);
  const NewLoginPage = Auth(LoginPage, false);
  const NewRegisterPage = Auth(RegisterPage, false);
  const NewUploadProductPage = Auth(UploadProductPage, true);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Routes>
          <Route path="/" element={<NewLandingPage />} />
          <Route path="/login" element={<NewLoginPage />} />
          <Route path="/register" element={<NewRegisterPage />} />
          <Route path="/product/upload" element={<NewUploadProductPage />} />
        </Routes>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
